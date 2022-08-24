const connection = require('../config/connection');

const getReplies = (id) => connection.query('SELECT * FROM Replyes r WHERE r.id=$1;', [id]);
const getTweets = () => connection.query('select * from Tweets');

module.exports = { getTweets, getReplies };
