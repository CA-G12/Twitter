const connection = require('../config/connection');

const deletedTweet = (id) => connection.query(
  'DELETE FROM Tweets WHERE id = $1',
  [id],
);
const deletedReply = (id) => connection.query(
  'DELETE FROM Replyes WHERE id = $1',
  [id],
);

module.exports = { deletedTweet, deletedReply };
