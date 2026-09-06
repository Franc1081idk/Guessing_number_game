let number;
const max = 100;
const min = 1;
let randNum;
let score = 0;

randNum = Math.floor(Math.random() * (max - min)) + min;

document.getElementById("submit").onclick = function () {
  number = document.getElementById("number").value;

  if (number < randNum) {
    text.textContent = "Wrong, your number is too small🡻";
    score += 1;
  } else if (number > randNum) {
    text.textContent = "Wrong, your number is too big🡹";
    score += 1;
  } else {
    text.textContent = `Correct ✅ ,The number was ${randNum}🏆`;
    document.getElementById("score").textContent = `Number of tries:${score}`;
    score += 1;
  }
};
