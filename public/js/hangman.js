// These functions are pulled from the original script, would be better suited as a class, but maybe an idea for future refactor
const gradualAppend = (question, btnArr) => {
  const questionArr = question.split("");
  let input = ``;
  let appendIndex = 0;
  let end = questionArr.length;
  intervalFunc(questionArr, input, appendIndex, end, btnArr);
};

const intervalFunc = (questionArr, input, appendIndex, end, btnArr) => {
  const myInterval = setInterval(() => {
    input += questionArr[appendIndex];
    const questionHTML = `<h2 class="question">${input}</h2>`;
    document.getElementById("hangmanForm").innerHTML = questionHTML;
    if (
      questionArr[appendIndex] === "." ||
      questionArr[appendIndex] === "!" ||
      questionArr[appendIndex] === "?"
    ) {
      clearInterval(myInterval);
      setTimeout(() => {
        if (appendIndex >= end) {
          clearInterval(myInterval);
          putButtons(btnArr);
          return;
        } else {
          intervalFunc(questionArr, input, appendIndex, end, btnArr);
        }
      }, 400);
    }
    appendIndex++;
    if (appendIndex >= end) {
      clearInterval(myInterval);
      putButtons(btnArr);
      return;
    }
  }, 100);
};

const clearButtons = () => {
  document.getElementById("button-element-container").innerHTML = "";
};

const putButtons = (buttonArr) => {
  let btnHtml = ``;
  for (let i = 0; i < buttonArr.length; i++) {
    const tempBtnHtml = ` <div class="button-element-container">
    <section id="button-box${i + 1}" class="text-center mx-xl-2 p-3">
    <button id="button${i}" class="p-4">${buttonArr[i]}</button>
    </section>
    </div>`;
    btnHtml += tempBtnHtml;
  }
  document.getElementById("button-element-container").innerHTML = btnHtml;
};

// beginning of Hangman Logic
// Uses word array, add to this to add words that could be used for the game
const wordArr = [
  "In the direction of Deer",
  "Not today",
  "the last of us",
  "all purpose entertainment",
  "The Dark Knight",
  "I need it",
  "Krusty krab pizza",
  "King in the north",
  "max and ruby",
];
let chosenWord;
let lettersInChosen;
let displayLetters = [];
let guessedLetters = [];
let lives = 7;

// set word creates the string of underscores, and calls renderword at the end
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

// render word generates the string so that it will format correctly and actually puts it on the page
const renderWord = (letterArr) => {
  const wordString = letterArr
    .join(" ")
    .replace(new RegExp("   ", "g"), "<span id='whiteSpace'>   </span>");
  document.getElementById("wordBlanks").innerHTML = wordString;
};

// called by the submission handler when new letter is input
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
    console.log(displayLetters);
    if (
      displayLetters.every((val) => {
        return val !== "_";
      })
    ) {
      winCondition();
    }
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

// wrong letter updates image on page
const wrongLetter = () => {
  document
    .getElementById("hangmanImg")
    .setAttribute("src", `/images/hangman/HM${lives}.png`);
};

// game over triggers when there are no lives left, prompts for user input
const gameOver = () => {
  wrongLetter();
  const message = `Oh no! You died...The answer was, ${chosenWord}, but good try. Do you want to play again?`;
  const btnArr = [`Sure`, `No, lets try something else.`];
  gradualAppend(message, btnArr);
  document
    .getElementById("button-element-container")
    .addEventListener("click", (e) => {
      if (e.target === document.getElementById("button0")) {
        alert("this does something");
      } else if (e.target === document.getElementById("button1")) {
        alert("this does something else");
      }
    });
};

// activates when the word is completed, prompts for next action
const winCondition = () => {
  let message;
  if (lives === 1) {
    message =
      "Oh boy, that was a close one! You were only one wrong answer away from being hanged...Wanna play again?";
  } else if (lives === 7) {
    message =
      "Holy Java! You got the whole thing without even losing a life! Wanna go another round?";
  } else {
    message =
      "Wow good job! Your body is ... incomplete. So ... you win I guess? Do you want to play again?";
  }
  const btnArr = ["Let's go again", "I'm ready to move on"];
  gradualAppend(message, btnArr);
  document
    .getElementById("button-element-container")
    .addEventListener("click", (e) => {
      if (e.target === document.getElementById("button0")) {
        alert("this does something");
      } else if (e.target === document.getElementById("button1")) {
        alert("this does something else");
      }
    });
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
