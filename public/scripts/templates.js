const createTweetElement = function(tweet) {
  const $tweet = $(`<article>
  <header>
    <div>
      <img class="profile" src=${escape(tweet.user.avatars)}> 
      <span>${escape(tweet.user.name)}</span>
    </div>
    <span class="handler">${escape(tweet.user.handle)}</span>
    
  </header>
  <div class="tweetText">${escape(tweet.content.text)}</div>
  <footer>
    <span>${escape(daysBetween(tweet.created_at))} days ago</span>
    <div class="symbols">
      <img class="icons" src="/images/heart.png">
      <img class="icons" src="/images/flag.png"> 
      <img class="icons" src="/images/retweet.png"> 
    </div>
  </footer>
  </article>`).addClass('tweet');
  return $tweet;

};