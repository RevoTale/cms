interface MongoDoc {
  _id: { $oid: string };
  createdAt?: { $date: string };
  updatedAt?: { $date: string };
  [key: string]: any;
}

const supportedLocales = ['en-US', 'uk-UA', 'de-DE', 'hi-IN', 'ja-JP', 'ru-RU', 'fr-FR', 'es-ES'];

function convertMongoToPostgres(mongoJsonString: string, tableName: string): string[] {
  const lines = mongoJsonString.trim().split('\n').filter(line => line.trim());
  
  if (lines.length === 0) {
    return [`-- No data found for ${tableName}`];
  }
  
  const queries: string[] = [];
  const localeQueries: string[] = [];
  
  for (const line of lines) {
    try {
      const doc: MongoDoc = JSON.parse(line);
      const { mainQuery, localeQuery } = convertDocument(doc, tableName);
      
      queries.push(mainQuery);
      if (localeQuery && localeQuery.length > 0) {
        localeQueries.push(...localeQuery);
      }
    } catch (error) {
      console.error(`Error parsing line in ${tableName}:`, error);
    }
  }
  
  const result = [
    `-- ${tableName} table inserts (${queries.length} records)`,
    ...queries
  ];
  
  if (localeQueries.length > 0) {
    result.push(
      '',
      `-- ${tableName}_locales table inserts (${localeQueries.length} records)`,
      ...localeQueries
    );
  }

  return result;
}

function convertDocument(doc: MongoDoc, tableName: string): { mainQuery: string; localeQuery?: string[] } {
  const id = convertOidToUuid(doc._id.$oid);
  const mainData: Record<string, any> = { id };
  
  if (doc.createdAt) {
    mainData.created_at = new Date(doc.createdAt.$date).toISOString();
  }
  if (doc.updatedAt) {
    mainData.updated_at = new Date(doc.updatedAt.$date).toISOString();
  }
  
  const localeDataMap = new Map<string, Record<string, any>>();
  
  Object.keys(doc).forEach(key => {
    if (['_id', 'createdAt', 'updatedAt', '__v','meta'].includes(key)) return;
    
    const value = doc[key];
    
    if (isLocalizedField(value)) {
      supportedLocales.forEach(locale => {
        if (value[locale] !== undefined) {
          if (!localeDataMap.has(locale)) {
            localeDataMap.set(locale, {
              _locale: locale,
              _parent_id: id
            });
          }
          
          const localeData = localeDataMap.get(locale)!;
          localeData[key] = typeof value[locale] === 'object' && !Array.isArray(value[locale])
            ? JSON.stringify(value[locale])
            : value[locale];
        }
      });
    } else {
      const convertedKey = convertFieldName(key);
      
      if (isObjectIdReference(value)) {
        mainData[convertedKey] = convertOidToUuid(value.$oid);
      } else if (isDateField(value)) {
        mainData[convertedKey] = new Date(value.$date).toISOString();
      } else if (Array.isArray(value)) {
        const convertedArray = value.map(item => {
          if (isObjectIdReference(item)) {
            return convertOidToUuid(item.$oid);
          } else if (typeof item === 'object' && item.doc && item.doc.$oid) {
            return { ...item, doc: convertOidToUuid(item.doc.$oid) };
          }
          return item;
        });
        mainData[convertedKey] = JSON.stringify(convertedArray);
      } else if (typeof value === 'object' && value !== null) {
        mainData[convertedKey] = JSON.stringify(value);
      } else {
        mainData[convertedKey] = value;
      }
    }
  });
  
  const mainQuery = generateInsertQuery(tableName, mainData);
  const localeQueries = Array.from(localeDataMap.values()).map(locale => 
    generateInsertQuery(`${tableName}_locales`, locale)
  );
  
  return {
    mainQuery,
    localeQuery: localeQueries.length > 0 ? localeQueries : undefined
  };
}

function isLocalizedField(value: any): boolean {
  return typeof value === 'object' && 
         value !== null && 
         !Array.isArray(value) &&
         !value.$oid &&
         !value.$date &&
         supportedLocales.some(locale => locale in value);
}

function isObjectIdReference(value: any): boolean {
  return typeof value === 'object' && value !== null && value.$oid;
}

function isDateField(value: any): boolean {
  return typeof value === 'object' && value !== null && value.$date;
}

function convertFieldName(fieldName: string): string {
  return fieldName.replace(/([A-Z])/g, '_$1').toLowerCase();
}
function fillIfNo(str: string, length: number, char: string): string {
  while (str.length < length) {
    str = char + str;
  }
  return str;
}
function convertOidToUuid(oid: string): string {
  const cleanOid = fillIfNo(oid, 32, '1');
  return `${cleanOid.substring(0, 8)}-${cleanOid.substring(8, 12)}-${cleanOid.substring(12, 16)}-${cleanOid.substring(16, 20)}-${cleanOid.substring(20, 32)}`;
}

function escapeString(str: string): string {
  return str.replace(/'/g, "''").replace(/\\/g, '\\\\').replace(/\0/g, '\\0');
}

function generateInsertQuery(table: string, data: Record<string, any>): string {
  const columns = Object.keys(data).map(col => `"${col}"`).join(', ');
  const values = Object.values(data).map(value => {
    if (value === null || value === undefined) return 'NULL';
    if (typeof value === 'string') return `'${escapeString(value)}'`;
    if (typeof value === 'boolean') return value.toString();
    if (typeof value === 'number') return value.toString();
    return `'${escapeString(String(value))}'`;
  }).join(', ');

  return `INSERT INTO "${table}" (${columns}) VALUES (${values});`;
}

export { convertMongoToPostgres };
