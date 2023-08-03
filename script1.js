let input = document.querySelector(".input");
let button = document.querySelector(".check");
let score = document.querySelector(".score");
let highscore = document.querySelector(".highscore");
let remark = document.querySelector(".remark");
let restart = document.querySelector(".restart");
let scorenum = 20;
highnum = 0;
let checknum = Math.trunc(Math.random() * 21);
console.log(checknum);
button.addEventListener("click", function () {
  let number = Number(input.value);
  console.log(number);
  if (number != checknum) {
    scorenum--;
    score.textContent = scorenum;
    if (number > checknum) {
      remark.textContent = "too high";
    } else {
      remark.textContent = "too low";
    }
  } else {
    remark.textContent = "you won";
    document.querySelector(".guess").textContent = number;
    document.querySelector(".body").style.backgroundColor = "green";
    if (highnum < scorenum) {
      highnum = scorenum;
      highscore.textContent = highnum;
    }
  }
});
restart.addEventListener("click", function () {
  checknum = Math.trunc(Math.random() * 21);
  console.log(checknum);
  scorenum = 20;
  score.textContent = scorenum;
});
