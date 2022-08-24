const connection = require('../config/connection');

const addTweet = ({
  user_name, avatar, content, likes,
}) => connection.query(
  'INSERT INTO Tweets (user_name,avatar,content,likes) values($1,$2,$3,$4) returning * ',
  [user_name, avatar, content, likes],
);

const addReply = ({
  content, avatar, name, tweetsId,
}) => connection.query(
  'INSERT INTO Replyes (content , avatar , name , tweets_id ) values($1,$2,$3,$4) returning *',
  [content, avatar, name, tweetsId],
);

module.exports = { addTweet, addReply };

