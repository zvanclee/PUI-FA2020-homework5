function changeColor(newColor) {
  let newProductImg = document.getElementById("product-img");
  let colorFieldText = document.getElementById("color-text");

  if(newColor == "strawberry") {
    newProductImg.src = "images/strawberry-harness.png";
    colorFieldText.textContent="Strawberry";
  }
  else if (newColor == "blackberry") {
    newProductImg.src = "images/header-logo.png";
    colorFieldText.textContent="Blackberry";
  }
  else if (newColor == "crazyberry") {
    newProductImg.src = "images/strawberry-harness.png";
    colorFieldText.textContent="Crazyberry";
  }
  else if (newColor == "fireOrange") {
    newProductImg.src = "images/strawberry-harness.png";
    colorFieldText.textContent="Fire Orange";
  }
}
