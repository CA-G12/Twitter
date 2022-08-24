const connection = require('../config/connection');

const addTweet = ({
  userName, avatar, content, likes,
}) => connection.query(
  'INSERT INTO tweets (userName,avatar,content,likes) values($1,$2,$3,$4) returning *',
  [userName, avatar, content, likes],
);

const addReply = ({
  content, avatar, name, tweetsId,
}) => connection.query(
  'INSERT INTO replyes (content , avatar , name , tweets_id ) values($1,$2,$3,$4) returning *',
  [content, avatar, name, tweetsId],
);

module.exports = { addTweet, addReply };
