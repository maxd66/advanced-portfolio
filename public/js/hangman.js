// tasks:
// Create array of tons of phrases, there should be so many that the user shouldn't see the same one after playing dozens of times
// create funtion to generate word object for selected phrase
// create function to append words to page, called every time an input is registered
// create function to check user input and replace letters when necessary
const wordArr = ["In the direction of Deer"];
let chosenWord;
let lettersInChosen;
let displayLetters = [];
let guessedLetters = [];
let lives = 7;

const setWord = () => {
  chosenWord =
    wordArr[Math.floor(Math.random() * wordArr.length)].toUpperCase();
  lettersInChosen = chosenWord.split("");
  for (let i = 0; i < lettersInChosen.length; i++) {
    if (
      lettersInChosen[i] === " " ||
      lettersInChosen[i] === "-" ||
      lettersInChosen[i] === ","
    ) {
      displayLetters.push(lettersInChosen[i]);
    } else {
      displayLetters.push("_");
    }
  }
  renderWord(displayLetters);
};

const renderWord = (letterArr) => {
  const wordString = letterArr
    .join(" ")
    .replace(new RegExp("   ", "g"), "<span id='whiteSpace'>   </span>");
  document.getElementById("wordBlanks").innerHTML = wordString;
};

const checkLetter = (letter) => {
  let needRender = false;
  if (guessedLetters[0]) {
    let alreadyGuessed = false;
    guessedLetters.forEach((val) => {
      if (
        val === `<span id="correctGuess">${letter.toUpperCase()}</span>` ||
        val === `<span id="wrongGuess">${letter.toUpperCase()}</span>`
      ) {
        alert("You already guessed that letter traveler!");
        alreadyGuessed = true;
      }
    });
    if (alreadyGuessed) {
      return;
    }
  }
  for (let i = 0; i < lettersInChosen.length; i++) {
    if (letter.toUpperCase() === lettersInChosen[i]) {
      displayLetters[i] = letter;
      needRender = true;
    }
  }
  if (needRender) {
    renderWord(displayLetters);
    guessedLetters.push(`<span id="correctGuess">${letter}</span>`);
    const guessedString = guessedLetters.join(", ");
    document.getElementById("guessed").innerHTML = guessedString;
  } else {
    lives--;
    guessedLetters.push(`<span id="wrongGuess">${letter}</span>`);
    const guessedString = guessedLetters.join(", ");
    document.getElementById("guessed").innerHTML = guessedString;
    if (lives === 0) {
      gameOver();
    } else {
      wrongLetter();
    }
  }
};

const wrongLetter = () => {
  document
    .getElementById("hangmanImg")
    .setAttribute("src", `/images/HM${lives}.png`);
};

const gameOver = () => {
  wrongLetter();
};

const handleSubmit = () => {
  const userInput = document.getElementById("userInput").value.toUpperCase();
  document.getElementById("userInput").value = "";
  if (!userInput) {
    return;
  } else if (!userInput.match(/[A-Z]/)) {
    alert(
      "Traveler, have you not played this game before? Only guess letters!"
    );
    return;
  } else {
    checkLetter(userInput);
  }
};

document.getElementById("hangmanForm").addEventListener("submit", (event) => {
  event.preventDefault();
  handleSubmit();
});

setWord();
