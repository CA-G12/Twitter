require('dotenv').config();
const { Pool } = require('pg');

const { DATABASE_URL } = process.env;

if (!DATABASE_URL) {
  throw new Error('invalid DATABASE_URL');
}
module.exports = new Pool({
  connectionString: DATABASE_URL,
  ssl: false,
});
