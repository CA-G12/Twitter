const express = require('express');

const router = express.Router();
const { deleteTweet, deleteReply, getTweet, getReply } = require('./controller/handler');

router.get('/Tweets', getTweet);
router.get('/Reply', getReply);

router.get('/deleteTweet', deleteTweet);
router.get('/deleteReply', deleteReply);
module.exports = router;
