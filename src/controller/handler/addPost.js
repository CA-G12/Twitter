const { faker } = require('@faker-js/faker');
const { addTweet , addReply} = require('../../database/queries');

const user = [];
function createRandomUser() {
  return {
    userId: faker.datatype.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
}

Array.from({ length: 1 }).forEach(() => {
  user.push(createRandomUser());
});

const addPost = (req, res) => {
  const { data } = req.body;
  addTweet({
    user_name: user[0].username, avatar: user[0].avatar, content: data, likes: 0,
  }).then((data) => res.json(data.rows)).catch((err) => res.json({ massage: 'Error to add Tweet', status: '500' }));
};
const addReplies = (req, res) => {
  const { data ,tweet_id } = req.body;
  addReply({
    name: user[0].username, avatar: user[0].avatar, content: data, tweets_id:tweet_id,
  }).then((data) => res.json(data.rows)).catch((err) => res.json({ massage: err, status: '500' }));
}

module.exports = {addPost,addReplies};
