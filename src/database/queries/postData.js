const connection = require('../config/connection');
//
const postData = ({
  userName, avatar, content, likes,
}) => connection.query(
  'INSERT INTO Tweets (userName,avatar,content,likes) values($1,$2,$3,$4) returning *',
  [userName, avatar, content, likes],
);

module.exports = postData;
