$(document).ready(function() {
  getTweets(); //call get tweets on page load

  $('form').on('submit', function(event) {
    event.preventDefault();
    $("#error-msg-no-char").slideUp(); //on submit slide up any error messages
    $("#error-msg-too-many-char").slideUp(1000, function() {
    });
    $('textarea').focus(); //refocus on text area
    const newData = $(this).serialize();
    if (newData.length === 5) { //check length of serialized data, if this is just 'text=' then length of input is 0
      $("#error-msg-no-char").slideDown();
      $('textarea').focus();
    } else if (newData.length >= 145) { //similarly check if input is longer than 140 char 
      $("#error-msg-too-many-char").slideDown();
      $('textarea').focus();
    } else {
      $('.counter').text('140'); //otherwise reset counter to 140
      postTweets(newData); //post request with serialised data
    }
    
  });

  $('#arrows').hover(function() { //change colour of arrows on when mouse first moves over
    $(this).attr("src", "/images/arrows-blue.png");
    $(this).addClass('moving'); //animate arrows to bouce up and down
  });

  $('#arrowUp').on('mouseover', function() { //add boucning class to bottom arrow on first mouseover event
    $(this).addClass('movingBottomArrow');
  });


  $('#arrows').on('click', function() { //functionality to hide compose tweet box on open

    if($('#newTweet').is(":hidden")) { //check if hidden and slide down
      $('#newTweet').slideDown();
      $('textarea').focus(); //focus on text area
    }else{
      $('#newTweet').slideUp(); //if visible slide it out of view
    }
  });

  $('#arrowUp').on('click', function() { //check if compose tweet is hidden and reveal it
    if($('#newTweet').is(":hidden")) {
      $('#newTweet').slideDown();
    }

    $('html, body').animate(
      {
        scrollTop: $('#newTweet').offset().top - 120, //scroll to the position of compose tweet box
      },
      500
    );
    $('textarea').focus(); //focus on text input area
  });

  $(document).scroll(function() { //function to make arrows and large bottom arrow appear at and dissapear at different places in the window in reference to scroll value of window
    let y = $(this).scrollTop(); //y is the y axis of the window
    if (y > 400) {
      $('#arrowUp').show(); 
      $('nav h3').hide();
    } else {
      $('#arrowUp').hide();
      $('nav h3').show(); //hide and show arrows respectively
    }
  });

});

