/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  // --- our code goes here ---
  console.log("doc ready!");

  const daysBetween = function(time) {
  
    const nowDate = new Date(Math.round((new Date()).getTime() / 1000)*1000);
    const thenDate = new Date(time);
    console.log(thenDate.toDateString());
    console.log(nowDate.toDateString());
  
    var diff =(nowDate.getTime() - thenDate.getTime()) / (1000*60 * 60 * 24);
    return Math.abs(Math.round(diff));
   }
  ;
  

  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1575511781000
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1578190181000
    }
  ]

  const renderTweets = function(tweets) {
    for( const tweet of tweets){
      $tweetElm = createTweetElement(tweet);
      $('#tweets-container').append($tweetElm);
    }
    
  }
  

const createTweetElement = function(tweet) {
  
//console.log(markup);
let $tweet = $(`<article>
<header>
  <div>
    <img class="profile" src=${tweet.user.avatars}> 
    <span>${tweet.user.name}</span>
  </div>
  <span class="nameId">${tweet.user.handle}</span>
  
</header>
<div class="tweetText">${tweet.content.text}</div>
<footer>
  <span>${daysBetween(tweet.created_at)} days ago</span>
  <div class="symbols">
    <img class="icons" src="/images/heart.png">
    <img class="icons" src="/images/flag.png"> 
    <img class="icons" src="/images/retweet.png"> 
   </div>
</footer>
</article>`).addClass('tweet');
console.log($tweet);
  return $tweet;

}

renderTweets(data);

});