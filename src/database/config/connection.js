require('dotenv').config();
const { Pool } = require('pg');

const { DB_URL } = process.env;

if (!DB_URL) {
  throw new Error('invalid DB_URL');
}
module.exports = new Pool({
  connectionString: DB_URL,
  ssl: false,
});
