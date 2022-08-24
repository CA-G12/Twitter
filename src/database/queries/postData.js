const connection = require('../config/connection');

const addTweet = ({
  user_name, avatar, content, likes,
}) => connection.query(
  'INSERT INTO Tweets (user_name,avatar,content,likes) values($1,$2,$3,$4) returning * ',
  [user_name, avatar, content, likes],
);

const addReply = ({
  name, avatar, content,tweets_id,
}) => connection.query(
  'INSERT INTO Replyes (content , avatar , name , tweets_id ) values($1,$2,$3,$4) returning *',
  [name, avatar, content,tweets_id,],
);

module.exports = { addTweet, addReply };
