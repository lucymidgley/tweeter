console.log("file loaded");
$(document).ready(function() {
  // --- our code goes here ---
  console.log("hover ready!");
  $('article').click( function() {
    alert('clicked')
  })


  $('article').hover( function(){ 
    console.log(this);
    $(this).css('box-shadow', '10px 10px 10px #555');
  
  $(this).find("header").css('opacity', 1)
  $(this).find("footer span").css('opacity', 1)
  $(this).find("footer div").css('opacity', 1)
  $(this).find("div.tweetText ").css('opacity', 1)
  $(this).find("span.nameId").css('opacity', 1)
  }
  , function(){ 
    $(this).css('box-shadow', "")
    $(this).find("header").css('opacity', 0.5)
    $(this).find("footer span").css('opacity', 0.5)
    $(this).find("footer div").css('opacity', 0.5)
    $(this).find("div.tweetText ").css('opacity', 0.5)
    $(this).find("span.nameId").css('opacity', 0)
  })
});

