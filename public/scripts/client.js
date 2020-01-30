/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  // --- our code goes here ---
  console.log("doc ready!");


 
  


  $('form').on('submit', function (event) {
    event.preventDefault();
    $("#error-msg-no-char").slideUp();
      $("#error-msg-too-many-char").slideUp( 1000, function() {
      });
      $('textarea').focus();
    const newData = $(this).serialize();
    if(newData.length === 5) {
      $("#error-msg-no-char").slideDown();
      $('textarea').focus();
    } else if(newData.length >= 145) {
      $("#error-msg-too-many-char").slideDown();
      $('textarea').focus();
    } else {
      $('.counter').text('0')
      postTweets(newData);
    }
    
});

getTweets();
   

$('#arrows').on('mouseover', function() {
 $(this).attr("src", "/images/arrowsBlue.png")
 $(this).addClass( 'moving' );
})

$('#arrowUp').on('mouseover', function() {
  $(this).addClass( 'movingBottomArrow' );
 })


$('#arrows').on('click', function(e) {
  e.preventDefault()

  $('html, body').animate(
    {
      scrollTop: $('#newTweet').offset().top - 120,
    },
    500
  )
  $('textarea').focus();
})

$('#arrowUp').on('click', function(e) {
  e.preventDefault()

  $('html, body').animate(
    {
      scrollTop: $('#newTweet').offset().top - 120,
    },
    500
  )
  $('textarea').focus();
})

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 500) {
    $('#arrowUp').show();
    $('nav h3').hide();
  } else {
    $('#arrowUp').hide();
    $('nav h3').show();
  }
});



});

