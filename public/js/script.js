
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

// ======= The event listener and switch case below is going to be running most of the game =========
document.getElementById('all-buttons-container').addEventListener('click', (e) => {
  switch(questionNumber) {
    case 1:
      if(e.target === document.getElementById('button0')) {
        window.location = '/employer'
      } else if (e.target === document.getElementById('button1')) {
        window.location = '/family'
      } else if (e.target === document.getElementById('button2')) {

      } else if (e.target === document.getElementById('button3')) {

      }
      break
    case 2:
      break
  }
})
