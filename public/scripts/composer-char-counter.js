$(document).ready(function() {
  $('textarea').on("keyup", function() { //listen for keyup
    const currentLength = 140 - $(this).val().length; //test for length of input, subtract this value from 140
    if (currentLength <= 0) {
      $(this).closest("form").find(".counter").css('color', 'red').text(currentLength); //check length
    } else {
      $(this).closest("form").find(".counter").css('color', ' #545149').text(currentLength); //change colour if >140 char
    }
  });
});

