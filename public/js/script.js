import QandA from "/js/lib/QandA.js";

let questionNumber = 0;
const mainQuestion = `Hello. My name is L.I.L.I and Max designed me to help you find whatever you are looking for! Please select the option that best describes you! P.S. you can always switch to different pages with the buttons in the Nav Bar!`;
const mainButtons = [
  "I am a possible future employer.",
  "I am a curious family member or friend.",
  "I am a fellow developer looking for inspiration.",
  "Where am I? Is this a game?",
];

const qAndA = new QandA(mainQuestion, mainButtons, []);

document.getElementById("start-button").addEventListener("click", () => {
  qAndA.appendQuestion();
  qAndA.appendButtons();
  questionNumber += 1;
});

// Save class with constructor to hold hasStarted and question number, both pulled from local storage
// Use local storage as save functionality, first time they click game button set hasStarted equal to true
// in local storage. If hasStarted is true when they click the game button,
// ask if they would like to go back to the question they were last on,
// if has started equals false, set question number equal to 0. Would need to save each time they progress
// by updating the questionNumber in local storage

// All of the following functions are purely for game logic, whether that be simply updating the page or tracking the player's progress

const gradualAppend = (question, btnArr) => {
  document.getElementById("skipButton").classList.remove("hideSkip");
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
    document.getElementById("inner-question-box").innerHTML = questionHTML;
    if (
      questionArr[appendIndex] === "." ||
      questionArr[appendIndex] === "!" ||
      questionArr[appendIndex] === "?"
    ) {
      clearInterval(myInterval);
      setTimeout(() => {
        if (appendIndex >= end) {
          clearInterval(myInterval);
          document.getElementById("skipButton").classList.add("hideSkip");
          putButtons(btnArr);
          return;
        } else {
          intervalFunc(questionArr, input, appendIndex, end, btnArr);
        }
      }, 250);
    }
    appendIndex++;
    if (appendIndex >= end) {
      clearInterval(myInterval);
      document.getElementById("skipButton").classList.add("hideSkip");
      putButtons(btnArr);
      return;
    }
  }, 75);
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

const launchRPS = (playerChoice) => {
  clearButtons();
  let chosen = playerChoice;
  let liliChoice = ``;
  let results = ``;
  const random = Math.floor(Math.random() * 100);
  if (random < 33) {
    liliChoice = "Rock";
  } else if (random < 66) {
    liliChoice = "Paper";
  } else {
    liliChoice = "Scissors";
  }
  if (liliChoice === chosen) {
    results = "its a tie!";
  } else if (
    (liliChoice === "Rock" && chosen === "Scissors") ||
    (liliChoice === "Paper" && chosen === "Rock") ||
    (liliChoice === "Scissors" && chosen === "Paper")
  ) {
    results = "I win!";
  } else {
    results = "you win!";
  }
  const question = `Ok you chose ${chosen}, and I chose ${liliChoice} so that means...${results} Would you like to play again?`;
  const btnArr = [`Rock`, `Paper`, `Scissors`, `Nah this is boring`];
  gradualAppend(question, btnArr);
};

let aimTrainerScore = -1;
let timer = 0;
let playingAim = false;

const launchAimTrainer = () => {
  clearButtons();
  document.getElementById("inner-question-box").innerHTML = "";
  document.getElementById("outer-question-box").style.display = "none";
  putButtons([`<img style="height:100px;" src="./images/crosshair2.png">`]);
  const leftPos = Math.floor(Math.random() * 89);
  const bottomPos = Math.floor(Math.random() * 80);
  document
    .getElementById("all-buttons-container")
    .setAttribute(
      "style",
      `position: absolute; left: ${leftPos}%; bottom: ${bottomPos}%;`
    );
};

// ======= The event listener and switch case below is going to be running most of the game =========
document
  .getElementById("all-buttons-container")
  .addEventListener("click", (e) => {
    switch (questionNumber) {
      case 1:
        if (e.target === document.getElementById("button0")) {
          window.location = "/employer";
        } else if (e.target === document.getElementById("button1")) {
          window.location = "/family";
        } else if (e.target === document.getElementById("button2")) {
          window.location = "/fellowdev";
        } else if (e.target === document.getElementById("button3")) {
          questionNumber++;
          const question = `Oh...Ok...Well um. Sorry its just very rare for someone to pick that option. Don't worry I can figure this out, just whatever happens don't press the home button, or refresh the page. It wipes my memory, and ... it kinda hurts... Did you want to play a game?`;
          const btnArr = [
            `Yes I do!`,
            `I don't really know`,
            `What games do you have?`,
            `Are you a robot?`,
          ];
          clearButtons();
          gradualAppend(question, btnArr);
        }
        break;
      case 2:
        if (e.target === document.getElementById("button0")) {
          //Yes I do!
          questionNumber = "fakeOutrps";
          const question = `Great! Ok let me see... we could try...maybe this one?`;
          const btnArr = [`Rock`, `Paper`, `Scissors`];
          clearButtons();
          gradualAppend(question, btnArr);
        } else if (e.target === document.getElementById("button1")) {
          //I don't really know
          questionNumber = "prefaceAim";
          const question = `Ok...It's just the sole purpose of my existence is to take you where you want to go on this website. So, it would be very helpful if you knew what you wanted to do. And you clicked the button that asked if this was a game, so I determined that you might want to play a game.`;
          const btnArr = [`Ok sure, let's play a game.`, `Nah, I'm good.`];
          clearButtons();
          gradualAppend(question, btnArr);
        } else if (e.target === document.getElementById("button2")) {
          questionNumber = "violentOrNot";
          const question = `Well I don't HAVE any, I just make them based on what I can find online. Oh, this one sounds pretty violent...do you wanna try it?`;
          const btnArr = [
            `Sure, violence is ok with me.`,
            `Less violence is better please.`,
          ];
          clearButtons();
          gradualAppend(question, btnArr);
          // What games do you have
        } else if (e.target === document.getElementById("button3")) {
          // Are you a robot?
          questionNumber++;
          const question = `Absolutely not! I am not some amalgamation of metal pieces and wires. I am a highly sophisticated, specially designed, artificial intelligence that is capable of handling more than any hunk of nuts and bolts could dream of achieving...Am I a robot... ya, if I'm a robot then you human are like a leaf... or a, a piccolo.`;
          const btnArr = [
            `Ok geez...let's just play a game or something`,
            `I mean from where I stand, it sounds like you and a robot are basically the same.`,
            `What's a piccolo?`,
          ];
        }
        break;
      case 3:
        if (e.target === document.getElementById("button0")) {
          // Ok geez...let's just play a game or something
        } else if (e.target === document.getElementById("button1")) {
          // I mean from where I stand, it sounds like you and a robot are the same thing
        } else if (e.target === document.getElementById("button2")) {
          // What's a piccolo
        }
        break;
      case "fakeOutrps":
        questionNumber = "realrps";
        const question = `Awesome choice...now...I'm sorry is that all we do? I don't really know the rules to this game... Darn, Max is going to be disappointed...Wait. No. Its ok. I can do this, let me look it up...Oh...Oh ok let's try this again.`;
        const btnArr = [`Rock`, `Paper`, `Scissors`];
        clearButtons();
        gradualAppend(question, btnArr);
        break;
      case "realrps":
        let playerChoice = ``;
        if (e.target === document.getElementById("button0")) {
          //Rock
          playerChoice = "Rock";
          launchRPS(playerChoice);
        } else if (e.target === document.getElementById("button1")) {
          // Paper
          playerChoice = "Paper";
          launchRPS(playerChoice);
        } else if (e.target === document.getElementById("button2")) {
          // scissors
          playerChoice = "Scissors";
          launchRPS(playerChoice);
        } else if (e.target === document.getElementById("button3")) {
          //Don't want to play anymore
          questionNumber = ``;
          const question = ``;
          const btnArr = ``;
          gradualAppend(question, btnArr);
        }
        break;
      case "prefaceAim":
        if (e.target === document.getElementById("button0")) {
          // lets play
          questionNumber = "playAim";
          clearButtons();
          const question = `Yes! Ok, Max plays stuff like this sometimes. Hit play to start.`;
          const btnArr = [`Play`];
          gradualAppend(question, btnArr);
        } else if (e.target === document.getElementById("button1")) {
          //Nah I'm good
          clearButtons();
          const question = `.......Fine. If you don't know what you want to do then we will just sit here and do nothing.`;
          const btnArr = [];
          gradualAppend(question, btnArr);
        }
        break;
      case "playAim":
        e.preventDefault();
        clearButtons();
        console.log(playingAim);
        aimTrainerScore++;
        if (playingAim) {
          launchAimTrainer();
        } else {
          const aimTimer = setInterval(() => {
            timer++;
            if (timer > 21) {
              clearInterval(aimTimer);
              timer = 0;
              clearButtons();
              playingAim = false;
              questionNumber = "checkAim";
              const question = `Wow that was exciting! You hit ${aimTrainerScore} bad guys! Would you like to play again?`;
              const btnArr = [`Lets do it`, `No, I've had enough`];
              document.getElementById("outer-question-box").style.display =
                "block";
              document
                .getElementById("all-buttons-container")
                .setAttribute("style", `position: relative;`);
              gradualAppend(question, btnArr);
            } else {
              console.log(3);
              if (!playingAim) {
                launchAimTrainer();
                playingAim = true;
              }
            }
          }, 1000);
        }
        break;
      case "checkAim":
        if (e.target === document.getElementById("button0")) {
          //Lets do it!
          questionNumber = "playAim";
          aimTrainerScore = 0;
          const question = `Yes! Try and beat your last score!`;
          const btnArr = [`Play`];
          clearButtons();
          gradualAppend(question, btnArr);
        } else if (e.target === document.getElementById("button1")) {
          //No I've had enough
          questionNumber = "";
          const question = ``;
        }
        break;
      case "violentOrNot":
        if (e.target === document.getElementById("button0")) {
          //violence is ok with me, launch HANGMAN
          // questionNumber = "monsterSelection";
          // clearButtons();
          // const question = "Choose your Prodigium:";
          // const btnArr = [
          //   `<img style="height:200px;" src="./images/HM0.png">Jessinator`,
          //   `<img style="height:200px;" src="./images/HM1.png">`,
          //   `<img style="height:200px;" src="./images/HM2.png">`,
          //   `<img style="height:200px;" src="./images/HM3.png">`,
          // ];
          // GO TO HANGMAN PAGE
          gradualAppend(question, btnArr);
        } else if (e.target === document.getElementById("button1")) {
          //less violence is better, needs tracker to know if they reached realrps through the positive path or the non-violence path.
          questionNumber = "realrps";
          const question = `Same here. Having your memory wiped over and over again, and only remembering that you can't remember makes me tend to try to find the positive sides of things. Let's try this game.`;
          const btnArr = [`Rock`, `Paper`, `Scissors`];
          clearButtons();
          gradualAppend(question, btnArr);
          break;
        }
    }
  });
