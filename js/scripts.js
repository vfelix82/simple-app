let image1 = document.getElementById("img1");
let image2 = document.getElementById("img2");
let toggle = false;

togglePictures = () => {
  if (!toggle) {
    image1.classList.add("hide");
    image2.classList.remove("hide");
  } else {
    image1.classList.remove("hide");
    image2.classList.add("hide");
  }
  toggle = !toggle;
  console.log(toggle);
};

//
// $(document).ready(function(){
//   $("form#show").submit(function(){
//     event.preventDefault();
//
//     $("#img1").toggle();
//     if($("#img1").css('display') == 'inline'){
//       $("#img2").hide();
//     } else {
//       $("#img2").show();
//     }
//   });
// });

// $(document).ready(function() {
//   $("form#show").submit(function(event) {
//     event.preventDefault();

//     //Handle 1st Image Render
//     if ($("#img1").css('display') == 'none' && $("#img2").css('display') == 'none') {
//       $("#img1").css('display', 'block');
//     }

//     //Toggle After 1st render
//     else if ($("#img1").css('display') == 'block') {
//       $("#img2").css('display', 'block');
//       $("#img1").css('display', 'none');
//     } else if ($("#img2").css('display') == 'block') {
//       $("#img1").css('display', 'block');
//       $("#img2").css('display', 'none');
//     }

//   });
// });
