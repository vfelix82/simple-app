
$(document).ready(function(){
  $("form#show").submit(function(){
    event.preventDefault();

    $("#img1").toggle();
    if($("#img1").css('display') == 'inline'){
      $("#img2").hide();
    } else {
      $("#img2").show();
    }
  });
});


