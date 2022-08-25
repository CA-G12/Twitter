const { getTweets, getReplies } = require('../../database/queries');

const getTweet = (req, res) => {
  getTweets().then((data) => res.json(data.rows)).catch(() => res.json({ massage: 'Error to get Tweets', status: '500' }));
};
const getReply = (req, res) => {
  getReplies(req.params.id.split(':')[1]).then((data) => res.json(data.rows)).catch((err) => res.json({ massage: err, status: '500' }));
};

module.exports = { getTweet, getReply };
