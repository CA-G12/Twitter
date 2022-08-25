const tweetsSection = document.querySelector('.tweets--render');
const textArea = document.getElementById('tweets');
const submitBtn = document.getElementById('submit');

const renderTweet = (data) => {
  tweetsSection.textContent = '';
  data.sort((ele1, ele2) => ele2.id - ele1.id).map((ele) => {
    const tweet = document.createElement('div');
    tweet.setAttribute('class', 'tweets');

    const headerTweets = RenderHeadOFTweets(ele.avatar, ele.user_name, 'headerTweets');
    const content = contentTweet(ele.content);

    const addRep = document.createElement('div');
    addRep.setAttribute('class', 'addRep');

    const likes = document.createElement('button');
    const likeicon = document.createElement('button');
    likeicon.setAttribute('class', 'fa-solid fa-heart');
    likes.textContent = `${ele.likes}`;
    likes.appendChild(likeicon);

    const reply = document.createElement('button');
    reply.setAttribute('class', 'btn');
    reply.textContent = 'Reply';

    reply.addEventListener('click', (event) => {
      addRep.textContent = '';
      addReply(event, ele.id);
      getReply(event, ele.id);
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class', 'btn');
    deleteBtn.textContent = 'delete';

    deleteBtn.addEventListener('click', () => {
      deleteTweet(ele.id);
    });

    tweet.append(headerTweets, content, likes, reply, deleteBtn, addRep);
    tweetsSection.appendChild(tweet);
  });
};

function addReply(event, tweetId) {
  const tweet = event.target.parentElement.getElementsByClassName('addRep')[0];
  const addRep = document.createElement('div');
  addRep.setAttribute('class', 'addRep');
  const textAreaDiv = document.createElement('div');
  textAreaDiv.setAttribute('class', 'textAreaForReply');
  const text = document.createElement('textarea');
  text.setAttribute('class', 'textArea');
  text.setAttribute('name', 'addReply');

  const replySubmit = document.createElement('button');
  replySubmit.textContent = 'Reply';
  replySubmit.addEventListener('click', () => {
    addReplies(text.value, tweetId);
  });
  textAreaDiv.append(text, replySubmit);
  addRep.appendChild(textAreaDiv);
  tweet.appendChild(addRep);
}

function showReplies(event, data) {
  const tweet = event.target.parentElement.getElementsByClassName('addRep')[0];
  if (data.length !== 0) {
    data.map((ele) => {
      const replies = RenderHeadOFTweets(ele.avatar, ele.name, 'tweet-reply');
      const content = contentTweet(ele.content);

      tweet.append(replies, content);
    });
  }
}

function RenderHeadOFTweets(avatar, userName, classN) {
  const replies = document.createElement('div');
  replies.setAttribute('class', classN);
  const avatarR = document.createElement('img');
  avatarR.setAttribute('class', 'avatar');
  avatarR.setAttribute('src', avatar);

  const userNameR = document.createElement('p');
  userNameR.setAttribute('class', 'user_name');
  userNameR.textContent = userName;

  replies.append(avatarR, userNameR);
  return replies;
}
function contentTweet(value) {
  const text = document.createElement('p');
  text.setAttribute('class', 'text');
  text.textContent = value;
  return text;
}

fetchData('GET', undefined, '/Tweets')
  .then((data) => renderTweet(data))
  .catch((err) => err.json());

submitBtn.addEventListener('click', () => {
  fetchData('POST', { data: textArea.value }, '/addTweets')
    .then((data) => {
      fetchData('GET', undefined, '/Tweets')
        .then((data) => renderTweet(data))
        .catch((err) => console.log(err));
    })
    .catch((err) => { console.log(err); });
});

function addReplies(content, id) {
  fetchData('POST', { data: content, tweet_id: id }, '/addReplay')
    .then((res) => res.json())
    .catch((err) => err.json());
}
function deleteTweet(id) {
  fetchData('DELETE', { data: id }, '/deleteTweet')
    .then((res) => res.json())
    .catch((err) => err.json());

  window.location.reload();
}
function getReply(event, tweetId) {
  fetchData('GET', undefined, `/Reply/:${tweetId}`)
    .then((data) => showReplies(event, data))
    .catch((err) => err.json());
}
