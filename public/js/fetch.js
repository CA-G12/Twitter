const fetchData = (method, data, endpoint) => {
 return fetch(endpoint, {
    method,
    body: JSON.stringify(data),
    headers: { 'Content-type': 'application/json' },
  }).then((res) => res.json());
};

fetchData('GET', undefined, '/Tweets')
  .then((data) => renderTweet(data))
  .catch((err) => console.log(err));

