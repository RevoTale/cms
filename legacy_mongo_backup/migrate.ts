import fs from 'fs';
import { convertMongoToPostgres } from './migration-util.js';

// Read JSON file
const mongoData = fs.readFileSync('categories.json', 'utf-8');

// Convert to PostgreSQL queries
const sqlQueries = [
        ...convertMongoToPostgres(mongoData, 'media'),

    ...convertMongoToPostgres(mongoData, 'tags'),
    ...convertMongoToPostgres(mongoData, 'users'),
    ...convertMongoToPostgres(mongoData, 'micro_posts'),
    ...convertMongoToPostgres(mongoData, 'micro_post_external_links'),
];

// Output is array of SQL strings
console.log(sqlQueries.join('\n'));