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
    likes.setAttribute('class', 'btn');
    const likeIcon = document.createElement('button');
    likeIcon.setAttribute('class', 'fa-solid fa-heart');
    likes.textContent = `${ele.likes}`;
    likes.appendChild(likeIcon);
    likes.addEventListener('click',()=>{
      likeIcon.style.color='#fd4141'
    })

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
  tweet.textContent = '';
  const addRep = document.createElement('div');
  addRep.setAttribute('class', 'addRep');
  const textAreaDiv = document.createElement('div');
  textAreaDiv.setAttribute('class', 'textAreaForReply');
  const text = document.createElement('textarea');
  text.setAttribute('class', 'textArea');
  text.setAttribute('name', 'addReply');

  const replySubmit = document.createElement('button');
  replySubmit.textContent = 'Reply';
  if (text.value !== '') {
    replySubmit.addEventListener('click', () => {
      addReplies(text.value, tweetId);
      document.getElementsByClassName('allReply')[0].textContent = '';
      getReply(event, tweetId);
    });
  }
  textAreaDiv.append(text, replySubmit);
  addRep.appendChild(textAreaDiv);
  tweet.appendChild(addRep);
}

function showReplies(event, data) {
  const tweet = event.target.parentElement.getElementsByClassName('addRep')[0];
  const allReply = document.createElement('div');
  allReply.setAttribute('class', 'allReply');
  if (data.length !== 0) {
    data.map((ele) => {
      const replyContaner = document.createElement('div');
      replyContaner.setAttribute('class', 'replyContaner');
      const replies = RenderHeadOFTweets(ele.avatar, ele.name, 'tweet-reply');
      const content = contentTweet(ele.content);
      const deleteBtn = document.createElement('button');
      deleteBtn.setAttribute('class', 'btn');
      deleteBtn.textContent = 'X';
      deleteBtn.addEventListener('click', () => {
        deleteReply(ele.id);
        addReply(event, ele.id);
        getReply(event, ele.id);
      });
      replies.appendChild(deleteBtn);
      replyContaner.append(replies, content);
      allReply.append(replyContaner);
    });
    tweet.appendChild(allReply);
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
  .catch((err) => console.log(err));

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
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}
function deleteTweet(id) {
  fetchData('DELETE', { data: id }, '/deleteTweet')
    .then((res) => res.json())
    .catch((err) => console.log(err));

  window.location.reload();
}
function deleteReply(id) {
  fetchData('DELETE', { data: id }, '/deleteReply')
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}
function getReply(event, tweetId) {
  fetchData('GET', undefined, `/Reply/:${tweetId}`)
    .then((data) => showReplies(event, data))
    .catch((err) => console.log(err));
}
