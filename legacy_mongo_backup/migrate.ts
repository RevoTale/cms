import fs from 'fs';
import { convertMongoToPostgres } from './migration-util.ts';

// Read JSON file

// Convert to PostgreSQL queries
const sqlQueries = ['media','tags','users','micro_posts','micro_post_external_links'].map(tableName => {
    const mongoData = fs.readFileSync(`${tableName}.json`, 'utf-8');

    return convertMongoToPostgres((mongoData), tableName).join('\n');
});

fs.writeFileSync('migration.sql', sqlQueries.join('\n\n'), 'utf-8');