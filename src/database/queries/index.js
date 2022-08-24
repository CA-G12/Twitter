const { getTweets, getReplies } = require('./getData');
const { addTweet, addReply } = require('./postData');
const { deletedTweet, deletedReply } = require('./deletedData');

module.exports = {
  addTweet, addReply, getTweets, getReplies, deletedTweet, deletedReply,
};
