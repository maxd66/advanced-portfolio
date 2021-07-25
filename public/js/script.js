
import QandA from '/js/lib/QandA.js'

let questionNumber = 0;
const mainQuestion = `Hello. My name is L.I.L.I and Max designed me to help you find whatever you are looking for! Please select the option that best describes you! P.S. you can always switch to different pages with the buttons in the Nav Bar!`
const mainButtons = ['I am a possible future employer.', 'I am a curious family member or friend.', 'I am a fellow developer looking for inspiration.', 'Where am I? How did I get here? Is this a game?']

const qAndA = new QandA(mainQuestion, mainButtons, []);

document.getElementById('start-button').addEventListener('click', () => {
    qAndA.appendQuestion();
    qAndA.appendButtons();
    questionNumber+= 1
})

// Save class with constructor to hold hasStarted and question number, both pulled from local storage
// Use local storage as save functionality, first time they click game button set hasStarted equal to true
// in local storage. If hasStarted is true when they click the game button, 
// ask if they would like to go back to the question they were last on,
// if has started equals false, set question number equal to 0. Would need to save each time they progress
// by updating the questionNumber in local storage

// All of the following functions are purely for game logic, whether that be simply updating the page or tracking the player's progress

const gradualAppend = (question, btnArr) => {
  const questionArr = question.split('');
  let input = ``
  let appendIndex = 0;
  let end = questionArr.length
  intervalFunc(questionArr, input, appendIndex, end, btnArr)
}

const intervalFunc = (questionArr, input, appendIndex, end, btnArr) => { 
  const myInterval = setInterval(() => {
  input += questionArr[appendIndex];
  const questionHTML = `<h2 class="question">${input}</h2>`
  document.getElementById('inner-question-box').innerHTML = questionHTML;
  if (questionArr[appendIndex] === '.' || questionArr[appendIndex] === '!' || questionArr[appendIndex] === '?') {
    clearInterval(myInterval);
    setTimeout(() => {
      if (appendIndex >= end) {
        clearInterval(myInterval);
        putButtons(btnArr);
        return
      }else {
        intervalFunc(questionArr, input, appendIndex, end, btnArr)
      }
    }, 400)
  }
  appendIndex++
  if (appendIndex >= end) {
    clearInterval(myInterval);
    putButtons(btnArr);
    return
  }
}, 100)
}

const clearButtons = () => {
  document.getElementById('button-element-container').innerHTML = ''
}

const putButtons = buttonArr => {
  let btnHtml = ``
  for(let i = 0; i < buttonArr.length; i++) {
    const tempBtnHtml =` <div class="button-element-container">
    <section id="button-box${i+1}" class="text-center mx-xl-2 p-3">
    <button id="button${i}" class="p-4">${buttonArr[i]}</button>
    </section>
    </div>`
    btnHtml += tempBtnHtml;
  }
  document.getElementById('button-element-container').innerHTML = btnHtml
}

const launchRPS = (playerChoice) => {
  clearButtons()
  let chosen = playerChoice;
  let liliChoice = ``;
  let results = ``;
  const random = Math.floor(Math.random() * 100);
  if(random < 33) {
    liliChoice = 'Rock';
  } else if (random < 66) {
    liliChoice = 'Paper';
  } else {
    liliChoice = 'Scissors';
  }
  if (liliChoice === chosen) {
    results = 'its a tie!';
  } else if ((liliChoice === 'Rock' && chosen === 'Scissors') || (liliChoice === 'Paper' && chosen === 'Rock') || (liliChoice === 'Scissors' && chosen === 'Paper')) {
    results = 'I win!'
  } else {
    results = 'you win!'
  }
  const question = `Ok you chose ${chosen}, and I chose ${liliChoice} so that means...${results} Would you like to play again?`
  const btnArr = [`Rock`, `Paper`, `Scissors`, `Nah this is boring`];
  gradualAppend(question, btnArr);
}

let aimTrainerScore = -1;
let timer = 0;
let playingAim = false

const launchAimTrainer = () => {
  clearButtons();
  document.getElementById('inner-question-box').innerHTML = '';
  document.getElementById('outer-question-box').style.display = 'none';
  putButtons([`<img style="height:100px;" src="./images/crosshair2.png">`])
  const leftPos = Math.floor((Math.random() * 89));
  const bottomPos = Math.floor((Math.random() * 80));
  document.getElementById('all-buttons-container').setAttribute('style', `position: absolute; left: ${leftPos}%; bottom: ${bottomPos}%;`)
}

// ======= The event listener and switch case below is going to be running most of the game =========
document.getElementById('all-buttons-container').addEventListener('click', (e) => {
  switch(questionNumber) {
    case 1:
      if(e.target === document.getElementById('button0')) {
        window.location = '/employer'
      } else if (e.target === document.getElementById('button1')) {
        window.location = '/family'
      } else if (e.target === document.getElementById('button2')) {
        window.location = '/fellowdev'
      } else if (e.target === document.getElementById('button3')) {
        questionNumber++
        const question = `Oh...Ok...Well um. Sorry its just very rare for someone to pick that option. No, it isn't a game it is a portfolio website and I'm designed to help you do what you want... Did you want to play a game?`
        const btnArr = [`Yes I do!`, `I don't really know`, `I mean, I guess`, `Are you a robot?` ];
        clearButtons();
        gradualAppend(question, btnArr);
      }
      break;
    case 2:
      if(e.target === document.getElementById('button0')) {
        //Yes I do!
        questionNumber = 'fakeOutrps'
        const question = `Great! Ok let me see... we could try...maybe this one?`
        const btnArr = [`Rock`, `Paper`, `Scissors`];
        clearButtons();
        gradualAppend(question, btnArr);
      } else if (e.target === document.getElementById('button1')) {
        //I don't really know
        questionNumber= 'prefaceAim'
        const question = `Ok...It's just the sole purpose of my existence is to take you where you want to go on this website. So, it would be very helpful if you knew what you wanted to do. And you clicked the button that asked if this was a game, so I determined that you might want to play a game.`;
        const btnArr = [`Ok sure, let's play a game.`, `Nah, I'm good.`]
        clearButtons();
        gradualAppend(question,btnArr);
      } else if (e.target === document.getElementById('button2')) {
        questionNumber++
        const question = ``
        // I mean, I guess
      } else if (e.target === document.getElementById('button3')) {
        // Are you a robot?
        questionNumber++
        const question = ``
      }
      break;
      case 3:


        break;
        case 'fakeOutrps':
        questionNumber = 'realrps';
        const question = `Awesome choice...now...I'm sorry is that all we do? I don't really know the rules to this game... Darn, Max is going to be disappointed...Wait. No. Its ok. I can do this, let me look it up...Oh...Oh ok let's try this again.`
        const btnArr = [`Rock`, `Paper`, `Scissors`]
        clearButtons();
        gradualAppend(question, btnArr);
        break;
        case 'realrps':
          let playerChoice = ``;
          if(e.target === document.getElementById('button0')) {
            //Rock
            playerChoice = 'Rock';
            launchRPS(playerChoice)
          } else if (e.target === document.getElementById('button1')) {
            // Paper
            playerChoice = 'Paper';
            launchRPS(playerChoice)
          } else if (e.target === document.getElementById('button2')) {
            // scissors
            playerChoice = 'Scissors';
            launchRPS(playerChoice)
          }else if(e.target === document.getElementById('button3')) {
            questionNumber = ``
            const question = ``
            const btnArr = ``
            gradualAppend(question, btnArr)
          }
          break;
          case 'prefaceAim':
          if(e.target === document.getElementById('button0')) {
            // lets play
            questionNumber = 'playAim'
            clearButtons();
            const question = `Yes! Ok, Max plays stuff like this sometimes. Hit play to start.`
            const btnArr = [`Play`];
            gradualAppend(question, btnArr);
          }else if (e.target === document.getElementById('button1')) {
            //Nah I'm good
          }
          break;
          case 'playAim':
          e.preventDefault();
          clearButtons();
          console.log(playingAim);
            aimTrainerScore++
            if(playingAim) {
              launchAimTrainer()
            } else {
              const aimTimer = setInterval(() => {
                timer++
                if (timer > 21) {
                  clearInterval(aimTimer)
                  timer = 0
                  clearButtons()
                  playingAim = false;
                  questionNumber = 'checkAim'
                  const question = `Wow that was exciting! You hit ${aimTrainerScore} bad guys! Would you like to play again?`
                  const btnArr = [`Lets do it`, `No, I've had enough`]
                  document.getElementById('outer-question-box').style.display = 'block';
                  document.getElementById('all-buttons-container').setAttribute('style', `position: relative;`)
                  gradualAppend(question, btnArr);
                } else {
                  console.log(3);
                  if(!playingAim) {
                    launchAimTrainer()
                    playingAim = true;
                  }
                }
              }, 1000);
            }
            break;
          case 'checkAim':
              if(e.target === document.getElementById('button0')) {
                //Lets do it!
                questionNumber = 'playAim'
                aimTrainerScore = 0
                const question = `Yes! Try and beat your last score!`
                const btnArr = [`Play`];
                clearButtons();
                gradualAppend(question, btnArr);
              } else if (e.target === document.getElementById('button1')) {
                //No I've had enough
                questionNumber= ''
                const question = ``
              }
              break;
  }
})
