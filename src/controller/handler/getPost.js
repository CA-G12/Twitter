const { getTweets, getReplies } = require('../../database/queries');

const getTweet = (req, res) => {
  getTweets().then((data) => res.json(data.rows)).catch(() => res.json({ massage: 'Error to get Tweets', status: '500' }));
};
const getReply = (req, res) => {
  // req.body
  getReplies(1).then((data) => res.json(data.rows)).catch(() => res.json({ massage: 'Error to get replies', status: '500' }));
};

module.exports = { getTweet, getReply };
