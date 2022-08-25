const express = require('express');

const router = express.Router();
const {
  deleteTweet, deleteReply, getTweet, getReply, addPost, addReplies,
} = require('./controller/handler');

router.get('/Tweets', getTweet);
router.get('/Reply/:id', getReply);
router.post('/addTweets', addPost);
router.post('/addReplay', addReplies);
router.delete('/deleteTweet', deleteTweet);
router.get('/deleteReply', deleteReply);
module.exports = router;
