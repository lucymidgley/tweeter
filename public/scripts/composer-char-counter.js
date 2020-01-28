console.log("file loaded");
$(document).ready(function() {
  // --- our code goes here ---
  console.log("doc ready!");

  const textarea = document.querySelector("textarea");
  const counter = document.querySelector(".counter");
$('textarea').on("keyup", function(){ 
  let currentLength = 140 - $(this).val().length;
  if(currentLength <= 0){
    $(this).closest( "form" ).find(".counter").css('color', 'red').text( currentLength );
  } else {
  $(this).closest( "form" ).find(".counter").css('color', ' #545149').text( currentLength );
  }
})
});

