const connection = require('../config/connection');

const deletedData = (id) => connection.query(
  'DELETE FROM Tweets WHERE id = $1',
  [id],
);

module.exports = deletedData;
