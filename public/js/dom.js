const textArea = document.getElementById('tweets');
const submitBtn = document.getElementById('submit');
const deleteBtn = document.getElementById('delete');
submitBtn.addEventListener('click', () => {
  fetchData('POST', {
    data: textArea.value,
  }, '/addTweets').then((data) => console.log('done')).catch((err) => { console.log(err); });
});
deleteBtn.addEventListener('click', () => {
  // fetchData('DELETE',textArea.value, '/deleteTweet').then((data) =>console.log('done')).catch(err=>{console.log(err)})
});
