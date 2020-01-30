const renderTweets = function(tweets) {
  $('#tweets-container').empty();
  for (const tweet of tweets) {
    $tweetElm = createTweetElement(tweet);
    $('#tweets-container').prepend($tweetElm);
  }
  
};

const getTweets = function() {
  $.ajax({
    url: '/tweets',
    method: 'GET'
  }).then(function(data) {
    renderTweets(data);
  
  });
};

const postTweets = function(input) {
  $.ajax({
    url: '/tweets',
    method: 'POST',
    data: input
  }).then(function(createdTweet) {
  
    $('textarea').val('');
    getTweets(createdTweet);

        
  });
};