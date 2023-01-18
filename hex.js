const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// 15 karakter
// 0 - 15 - > will turn a from 10

const btn = document.getElementById("btn");
const span = document.querySelector(".color");

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}

btn.addEventListener("click", function () {
  // #ffffff
  let hexColor = "#";
  //   const random = 10;
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }

  document.body.style.backgroundColor = hexColor;
  span.textContent = hexColor;
});
