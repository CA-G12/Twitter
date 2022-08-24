const main = document.querySelector('main');
const textArea = document.getElementById('tweets');
const submitBtn = document.getElementById('submit');
const deleteBtn = document.getElementById('delete');


fetchData('GET', undefined, '/Tweets')
  .then((data) => renderTweet(data))
  .catch((err) => console.log(err));
  
fetchData('GET', undefined, '/Reply')
.then((data) => renderReplyes(data))
.catch((err) => console.log(err));


const renderTweet = (data) => {
  console.log(data);
  data.forEach((ele) => {
    const tweets = document.createElement('div');
    tweets.setAttribute('class', 'tweets');

    const headerTweets = document.createElement('div');
    headerTweets.setAttribute('class', 'headerTweets');

    const avatar = document.createElement('img');
    avatar.setAttribute('class', 'avatar');
    avatar.setAttribute('src', ele.avatar);

    const user_name = document.createElement('p');
    user_name.setAttribute('class', 'user_name');
    user_name.textContent = ele.user_name;

    const text = document.createElement('p');
    text.setAttribute('class', 'text');
    text.textContent = ele.content;

    const likes = document.createElement('p');
    likes.setAttribute('class', 'likes');
    likes.textContent = `${ele.likes}LIKES`;

    const reply = document.createElement('button');
    reply.setAttribute('class', 'btn');
    reply.textContent = "Reply"

    tweets.appendChild(headerTweets);
    headerTweets.appendChild(avatar);
    headerTweets.appendChild(user_name);
    tweets.appendChild(text);
    tweets.appendChild(likes);
    tweets.appendChild(reply);

    main.appendChild(tweets);
  });
};

const renderReplyes = (data) => {
  console.log(data);
  data.forEach((ele) => {
    const replies = document.createElement('div');
    replies.setAttribute('class', 'replies');

    const headerReplies = document.createElement('div');
    headerReplies.setAttribute('class', 'headerReplies');

    const avatar = document.createElement('img');
    avatar.setAttribute('class', 'avatar');
    avatar.setAttribute('src', ele.avatar);

    const user_name = document.createElement('p');
    user_name.setAttribute('class', 'user_name');
    user_name.textContent = ele.content;

    const text = document.createElement('p');
    text.setAttribute('class', 'text');
    text.textContent = ele.content;

    const tweets_id = document.createElement('p');
    text.setAttribute('class', 'tweets_id');
    text.textContent = ele.tweets_id;

    replies.appendChild(headerReplies);
    headerReplies.appendChild(avatar);
    headerReplies.appendChild(user_name);
    replies.appendChild(text);
    replies.appendChild(tweets_id);
    main.appendChild(replies);
  });
};

submitBtn.addEventListener('click', () => {
  fetchData('POST', {
    data: textArea.value,
  }, '/addTweets').then((data) => console.log('done')).catch((err) => { console.log(err); });
});
deleteBtn.addEventListener('click', () => {
  // fetchData('DELETE',textArea.value, '/deleteTweet').then((data) =>console.log('done')).catch(err=>{console.log(err)})
});
