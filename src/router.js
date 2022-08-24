const express = require('express');

const router = express.Router();

const { getTweets, getReplies } = require('./database/queries');

router.get('/tweets', (req, res) => {
  getTweets().then((data) => res.json(data.rows)).catch(() => res.json({
    massege: 'Error to get tweets',
    status: '500',
  }));
});
router.get('/Reply', (req, res) => {
  // req.body
  getReplies(2).then((data) => res.json(data.rows)).catch(() => res.json({ massege: 'Error to get replies', status: '500' }));
});

module.exports = router;
