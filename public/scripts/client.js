/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {
  // --- our code goes here ---
  console.log("doc ready!");

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
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]

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
  <span>${tweet.created_at}</span>
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



const $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
//console.log($tweet); // to see what it looks like
$('#tweets-container').append( $tweet );
; // to add it to the page so we can make sure it's got all the right elements, classes, etc.


});