let correctGuess;
let userGuessArr = [];
let maxGuess;
let easyAttempt = document.querySelector(".easyAt");
let hardAttempt = document.querySelector(".hardAt");
let guess = document.querySelector(".enterGuess");
const gameArea = document.getElementById("gameArea");
let newGame = document.querySelector(".newGame");

const init = () => {
  correctGuess = Math.floor(Math.random() * 100);
  document.querySelector(".newGame").style.display = "none";
  document.getElementById("gameArea").style.display = "none";
};

const startGame = () => {
  document.querySelector(".container").style.display = "none";
  document.getElementById("gameArea").style.display = "block";
};

// Defining functions
const easyLoad = () => {
  startGame();
  maxGuess = 10;
};
const hardLoad = () => {
  startGame();
  maxGuess = 5;
};
// Ending game
const endGame = () => {
  document.querySelector(".newGame").style.display = "inline-block";
  guess.setAttribute("disabled", true);
};
// Starting new game
const startNewGame = () => {
  document.querySelector(".container").style.display = "block";
  document.getElementById("gameArea").style.display = "none";
};

const fetchGuess = () => {
  const fetchedGuess = Number(guess.value);
  userGuessArr.push(fetchedGuess);
  //   userGuessArr = [...userGuessArr, fetchedGuess];
  document.getElementById("guesses").innerHTML = userGuessArr;
  document.getElementById("attempts").textContent = userGuessArr.length;

  //   Comparing the UserGuess
  if (userGuessArr.length < maxGuess) {
    if (fetchedGuess > correctGuess) {
      document.querySelector(".alert").textContent = `Your guess is High`;
      guess.value = "";
    } else if (fetchedGuess < correctGuess) {
      document.querySelector(".alert").textContent = `Your guess is low`;
      guess.value = "";
    } else {
      guess.value = "";
      document.querySelector(".alert").textContent = `You Won the game`;
      gameArea.style.backgroundColor = "#00ff7f";
      endGame();
    }
  } else {
    if (fetchedGuess > correctGuess) {
      guess.value = "";
      document.querySelector(
        ".alert"
      ).textContent = `You Loose!! Correct number was ${correctGuess}`;
      gameArea.style.backgroundColor = "#ff4500";
      endGame();
    } else if (fetchedGuess < correctGuess) {
      guess.value = "";
      document.querySelector(
        ".alert"
      ).textContent = `You loose!! Correct number was ${correctGuess}`;
      gameArea.style.backgroundColor = "#ff4500";
      endGame();
    } else {
      guess.value = "";
      document.querySelector(".alert").textContent = `You Won the game`;
      gameArea.style.backgroundColor = "#00ff7f";
      endGame();
    }
  }
};

// Loading easy and hard attempts
easyAttempt.addEventListener("click", easyLoad);
hardAttempt.addEventListener("click", hardLoad);
guess.addEventListener("change", fetchGuess);
newGame.addEventListener("click", startNewGame);
