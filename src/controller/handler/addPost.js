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
  console.log(createRandomUser());
  user.push(createRandomUser());
});

const addPost = (req, res) => {
  const { data } = req.body;
  addTweet({
    user_name: user[0].username, avatar: user[0].avatar, content: data, likes: 0,
  }).then((data) => res.json(data.rows)).catch((err) => res.json({ massage: 'ss', status: '500' }));
};
const addReplies = (req, res) => {
  const { data } = req.body;
  addReply({
    name: user[0].username, avatar: user[0].avatar, content: 's', tweets_id: 1,
  }).then((data) => res.json(data.rows)).catch((err) => res.json({ massage: 'ss', status: '500' }));
}

module.exports = {addPost,addReplies};
