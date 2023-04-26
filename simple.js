const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.querySelector(".btn");
const color = document.querySelector(".color");

function randNum() {
  return Math.floor(Math.random() * colors.length);
}

btn.addEventListener("click", () => {
  let randomNum = randNum();
  document.body.style.background = colors[randomNum];
  color.textContent = colors[randomNum];
  randNum();
});
