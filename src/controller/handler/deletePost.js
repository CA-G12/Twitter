const { deletedTweet, deletedReply } = require('../../database/queries/deletedData');

const deleteTweet = (req, res) => {
  deletedTweet(req.body.data).then((data) => res.json(data.rows)).catch((err) => res.json({ massage: 'Error to delete', status: '500' }));
};
const deleteReply = (req, res) => {
  deletedReply(req.body.data).then((data) => res.json(data)).catch((err) => res.json({ massage: err, status: '500' }));
};
module.exports = { deleteTweet, deleteReply };
