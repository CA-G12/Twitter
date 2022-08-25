const connection = require('../config/connection');

const getReplies = (tweets_id) => connection.query('SELECT * FROM Replyes r WHERE r.tweets_id=$1;', [tweets_id]);
const getTweets = () => connection.query('select * from Tweets');

module.exports = { getTweets, getReplies };
