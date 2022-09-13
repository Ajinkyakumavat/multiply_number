const num1 = Math.ceil(Math.random() * 10);

const num2 = Math.ceil(Math.random() * 10);

const header = document.getElementById("head");

header.innerText = `What is ${num1} Multiply by ${num2}?`;

const input1 = document.getElementById("input");

let score = JSON.parse(localStorage.getItem("score"))

const score1 = document.getElementById("score");

score1.innerText = `score : ${score}`

const correctAns = num1 * num2;

const formE1 = document.getElementById("form");

formE1.addEventListener("submit", () => {
  const userAns = +input1.value;
  if (userAns === correctAns) {
    score++
    updateStorage();
  } else {
    score--
    updateStorage();
  }
});

function updateStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}
