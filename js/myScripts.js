// $(document).ready(function() {
//
//   $('.color-choice input').on('click', function() {
//       let colorSelection = $(this).attr('data-image');
//
//       $('.active').removeClass('active');
//       $('.left-column img[data-image = ' + colorSelection + ']').addClass('active');
//       $(this).addClass('active');
//   });
// });

function changeColor(newColor) {
  let newProductImg = document.getElementById("product-img");

  if(newColor == "strawberry") {
    newProductImg.src = "images/strawberry-harness.png";
  }
  else if (newColor == "blackberry") {
    newProductImg.src = "images/header-logo.png";
  }
  else if (newColor == "crazyberry") {
    newProductImg.src = "images/header-logo.png";
  }
  else if (newColor == "fireOrange") {
    newProductImg.src = "images/header-logo.png";
  }
}
