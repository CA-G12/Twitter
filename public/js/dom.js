const main = document.querySelector('.main');
const tweetsSection = document.querySelector('.tweets--render');
const textArea = document.getElementById('tweets');
const submitBtn = document.getElementById('submit');
// fetchData('GET', undefined, '/Reply')
//   .then((data) => renderReplyes(data))
//   .catch((err) => console.log(err));

const renderTweet = (data) => {
  tweetsSection.textContent = '';
  data.sort((ele1, ele2) => ele2.id - ele1.id).forEach((ele) => {
    const tweet = document.createElement('div');
    tweet.setAttribute('class', 'tweets');

    const headerTweets = document.createElement('div');
    headerTweets.setAttribute('class', 'headerTweets');

    const avatar = document.createElement('img');
    avatar.setAttribute('class', 'avatar');
    avatar.setAttribute('src', ele.avatar);

    const userName = document.createElement('p');
    userName.setAttribute('class', 'user_name');
    userName.textContent = ele.user_name;

    const text = document.createElement('p');
    text.setAttribute('class', 'text');
    text.textContent = ele.content;

    const likes = document.createElement('p');
    likes.setAttribute('class', 'likes');
    likes.textContent = `${ele.likes}LIKES`;

    const reply = document.createElement('button');
    reply.setAttribute('class', 'btn');
    reply.textContent = 'Reply';
    reply.addEventListener('click', () => {
      replyTweet(ele.id);
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class', 'btn');
    deleteBtn.textContent = 'delete';

    deleteBtn.addEventListener('click', () => {
      deleteTweet(ele.id);
    });

    headerTweets.appendChild(avatar, userName);
    tweet.append(headerTweets, text, likes, reply, deleteBtn);
    gen(tweetsSection, tweet);
  });
};

function gen(childFor, child) {
  childFor.appendChild(child);
}

// const popReply = (data ,tweet_id) => {
//   // data.forEach((ele) => {
//     // ele.user

//   // ele.content
//   // const tweets_id = document.createElement('p');
//   // text.setAttribute('class', 'tweets_id');
//   // text.textContent = 'id twweet';
//   // ele.tweets_id

//   headerReplies.append(avatar, user_name, closeBtn);
//   addTweet.append(headerReplies, text, replySubmit);
//   replies.append(addTweet);
//   main.appendChild(replies);
//   // });
// };

function popReply(data, tweetId) {
  const replies = document.createElement('div');
  replies.style.display = 'block';
  replies.setAttribute('class', 'popup');

  const addTweet = document.createElement('div');
  addTweet.setAttribute('class', 'addTweet');
  const headerReplies = document.createElement('div');
  headerReplies.setAttribute('class', 'headerReplies');

  const avatar = document.createElement('img');
  avatar.setAttribute('class', 'avatar');
  avatar.setAttribute('src', 'salsabeel .png');

  const userName = document.createElement('p');
  userName.setAttribute('class', 'user_name');
  userName.textContent = 'user';

  const closeBtn = document.createElement('button');
  closeBtn.setAttribute('class', 'closebtn');
  closeBtn.textContent = 'X';

  closeBtn.addEventListener('click', () => {
    replies.style.display = 'none';
  });

  const text = document.createElement('textarea');
  text.setAttribute('class', 'text');
  text.setAttribute('name', 'addReply');

  const replySubmit = document.createElement('button');
  replySubmit.textContent = 'Reply';
  replySubmit.addEventListener('click', () => {
    addReply(text.value, tweetId);
  });

  headerReplies.append(avatar, userName, closeBtn);
  addTweet.append(headerReplies, text, replySubmit);
  replies.append(addTweet);
  main.appendChild(replies);
}

fetchData('GET', undefined, '/Tweets')
  .then((data) => renderTweet(data))
  .catch((err) => console.log(err));

submitBtn.addEventListener('click', () => {
  fetchData('POST', {
    data: textArea.value,
  }, '/addTweets').then((data) => {
    fetchData('GET', undefined, '/Tweets')
      .then((data) => renderTweet(data))
      .catch((err) => console.log(err));
  }).catch((err) => { console.log(err); });
});

function addReply(content, id) {
  fetchData('POST', { data: content, tweet_id: id }, '/addReplay')
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}
function deleteTweet(id) {
  fetchData('DELETE', { data: id }, '/deleteTweet')
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

  window.location.reload();
}
function replyTweet(tweet_id) {
  fetchData('GET', undefined, '/Reply')
    .then((data) => popReply(data, tweet_id))
    .catch((err) => console.log(err));
}
