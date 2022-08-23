const connection = require('../config/connection');

const getReplies = (id) => connection.query('SELECT * FROM Replyes r WHERE r.tweets_id=$1;', [id]);
const getData = () => connection.query('select * from tweets');
module.exports = { getData, getReplies };
