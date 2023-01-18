const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const span = document.querySelector(".color");
const btn = document.getElementById("btn");

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  console.log(randomNumber);
  span.textContent = colors[randomNumber];
  document.body.style.backgroundColor = colors[randomNumber];
});
