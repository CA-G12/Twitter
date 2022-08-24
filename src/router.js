const express = require('express');

const router = express.Router();
const { getTweet, getReply } = require('./controller/handler');

router.get('/Tweets', getTweet);
router.get('/Reply', getReply);

router.get('/delete' , (req,res) => {
  
})

module.exports = router;
