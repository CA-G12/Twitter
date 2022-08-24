const { getTweet, getReply } = require('./getPost');
const { deleteTweet, deleteReply } = require('./deletePost');

module.exports = {
  getTweet, getReply, deleteTweet, deleteReply,
};
