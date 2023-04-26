let score = 20;
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    // When there is no number
    displayMessage("⛔ No Number!!!");
  } else if (guess === secretNumber) {
    // When Player wins the game
    displayMessage("🟢 Correct Number");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    // Setting Highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    // When the guess is wrong
    if (score > 1) {
      displayMessage(guess > secretNumber ? "🟡 Too High" : "🟡 Too Low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("🔴 You lost the game");
      document.querySelector(".score").textContent = 0;
    }
  }

  //   else if (guess > secretNumber) {
  //     // When Guess is too high
  //     if (score > 1) {
  //       document.querySelector(".message").textContent = "🟡 Too High";
  //       score--;
  //       document.querySelector(".score").textContent = score;
  //     } else {
  //       document.querySelector(".message").textContent = "🔴 You lost the game";
  //       document.querySelector(".score").textContent = 0;
  //     }
  //   } else if (guess < secretNumber) {
  //     // When Guess is too Low
  //     if (score > 1) {
  //       document.querySelector(".message").textContent = "🟡 Too Low";
  //       score--;
  //       document.querySelector(".score").textContent = score;
  //     } else {
  //       document.querySelector(".message").textContent = "🔴 You lost the game";
  //       document.querySelector(".score").textContent = 0;
  //     }
  //   }
});

// Play again
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = 20;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
