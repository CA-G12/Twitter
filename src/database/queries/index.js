const { getTweets, getReplies } = require('./getData');
const {addTweet , addReply} = require('./postData');
const  deletedData  = require('./deletedData');

module.exports = {
  addTweet, getTweets, getReplies, deletedData , addReply
};
