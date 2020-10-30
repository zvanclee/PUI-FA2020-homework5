function changeColor(newColor) {
  let newProductImg = document.getElementById("product-img");

  if(newColor == "strawberry") {
    newProductImg.src = "images/strawberry-harness.png";
    document.getElementById("color-text").textContent="Strawberry";
  }
  else if (newColor == "blackberry") {
  document.getElementById("color-text").textContent="Blackberry";
  }
  else if (newColor == "crazyberry") {
  document.getElementById("color-text").textContent="Crazyberry";
  }
  else if (newColor == "fireOrange") {
  document.getElementById("color-text").textContent="Fire Orange";
  }
}
