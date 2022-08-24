const path = require('path');
const fs = require('fs');
const connection = require('./connection');

const dbbulit = () => {
  const db = fs.readFileSync(path.join(__dirname, '.', 'init.sql')).toString();
  return connection.query(db);
};
module.exports = dbbulit;
