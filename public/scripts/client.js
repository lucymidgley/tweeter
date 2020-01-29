/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  // --- our code goes here ---
  console.log("doc ready!");

  const escape =  function(str) {
    let div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }
  

  const daysBetween = function(time) {
  
    const nowDate = new Date(Math.round((new Date()).getTime() / 1000)*1000);
    const thenDate = new Date(time);
  
    var diff =(nowDate.getTime() - thenDate.getTime()) / (1000*60 * 60 * 24);
    return Math.abs(Math.round(diff));
   }
  ;
 

  const renderTweets = function(tweets) {
    $('#tweets-container').empty();
    for( const tweet of tweets){
      $tweetElm = createTweetElement(tweet);
      $('#tweets-container').append($tweetElm);
    }
    
  }
  

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
    <span>${daysBetween(escape(tweet.created_at))} days ago</span>
    <div class="symbols">
      <img class="icons" src="/images/heart.png">
      <img class="icons" src="/images/flag.png"> 
      <img class="icons" src="/images/retweet.png"> 
    </div>
  </footer>
  </article>`).addClass('tweet');
    return $tweet;

}



  $('form').on('submit', function (event) {
    event.preventDefault();
    console.log('Button clicked, performimng ajax call...');
    const newData = $(this).serialize();
    if(newData.length === 5) {
      alert("This form cannot be blank")
    } else if(newData.length >= 145) {
      alert("Tweet cannot surpass 140 characters")
    } else {
      $.ajax({
        url: '/tweets',
        method: 'POST',
        data: newData
          }).then(function (createdTweet) {
      
              $('textarea').val('');
           getTweets(createdTweet);

            
        })
    }
    
});





const getTweets = function() {
  $.ajax({
    url: '/tweets',
    method: 'GET'
      }).then(function (data) {
        renderTweets(data)
  
    })
}
getTweets();
   
   


});

// data: $('form').serialize(),
//           success: function () {
//             alert('form was submitted');
//           }