const connection = require('../config/connection');

const deleteData = (id) => connection.query(
  'DELETE FROM Tweets WHERE id = $1',
  [id],
);

module.exports = deleteData;
