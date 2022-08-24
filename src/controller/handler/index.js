const { getTweet, getReply } = require('./getPost');
const { deleteTweet, deleteReply } = require('./deletePost');
const addPost = require('./addPost');

module.exports = {
  getTweet, getReply, deleteTweet, deleteReply, addPost };
