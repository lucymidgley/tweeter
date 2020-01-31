const renderTweets = function(tweets) {
  $('#tweets-container').empty(); //empty tweets container to prevent duplication
  for (const tweet of tweets) {
    $tweetElm = createTweetElement(tweet); //loop through tweets and use template to markup tweet
    $('#tweets-container').prepend($tweetElm); //prepend new tweet
  }
  
};

const getTweets = function() { // function to get tweets from server
  $.ajax({
    url: '/tweets',
    method: 'GET'
  }).then(function(data) {
    renderTweets(data); //after getting tweets call render function on the tweets
  });
};

const postTweets = function(input) { //function to post new tweet
  $.ajax({
    url: '/tweets',
    method: 'POST',
    data: input
  }).then(function(createdTweet) {
  
    $('textarea').val(''); //reset text field to empty
    getTweets(createdTweet); //call get tweet function on new tweet

        
  });
};