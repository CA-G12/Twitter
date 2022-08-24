const express = require('express');

const router = express.Router();
const {
  deleteTweet, deleteReply, getTweet, getReply,addPost,
} = require('./controller/handler');

router.get('/Tweets', getTweet);
router.get('/Reply', getReply);
router.post('/addTweets', addPost);
router.delete('/deleteTweet', deleteTweet);
router.get('/deleteReply', deleteReply);
module.exports = router;
