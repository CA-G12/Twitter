const supertest = require('supertest');
const bd = require('../src/database/config/bulit');
const app = require('../src/app');
const connection = require('../src/database/config/connection');

beforeAll(() => bd());
afterAll(() => connection.end());

test('get tweets', (done) => {
  supertest(app)
    .get('/Tweets')
    .expect(200)
    .end((err, res) => {
      if (err) { return done(err); }
      expect(res.body[0]).toEqual({
        id: 1,
        user_name: 'tareq',
        avatar: 'https://i.ytimg.com/vi/XjvaJH8aRc0/maxresdefault.jpg',
        content: 'Software Engineering',
        likes: 109,
      });
      done();
    });
});
test('get Repleis', (done) => {
  supertest(app)
    .get('/Reply')
    .expect(200)
    .end((err, res) => {
      if (err) { return done(err); }
      expect(res.body[0]).toEqual({
        id: 1,
        content: 'Software Engineering',
        avatar: 'https://i.ytimg.com/vi/XjvaJH8aRc0/maxresdefault.jpg',
        name: 'tareq',
        tweets_id: 1,
      });
      done();
    });
});
test('get Repleis', (done) => {
    supertest(app)
      .post('/Reply')
      .send({
        id: 3,
        content: 'Software Engineering',
        avatar: 'https://i.ytimg.com/vi/XjvaJH8aRc0/maxresdefault.jpg',
        name: 'salsabeel 2',
        tweets_id: 1,
      })
      .end((err, res) => {
        if (err) { return done(err); }
        expect(res.body.length).toBe(3);
        done();
      });
  });
  