const { postData } = require('../../database/queries');

const addPost = (req, res) => {
// const  =req.body;userName, avatar, content, likes
  postData().then((data) => res.json(data)).catch(() => res.json({ massage: 'Error to get replies', status: '500' }));
};
module.exports = addPost;
