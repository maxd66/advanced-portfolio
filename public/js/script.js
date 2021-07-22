// ========================== GenHtml class ===================================
class GenHtml {
    genButtonsHtml(ansArr) {
        const buttonsHTML = `<div id="button-element-container">
<section id="button-box1" class="text-center mx-xl-2 p-3">
<button id="button0" class="p-4">${ansArr[0]}</button>
</section>
</div>
<div id="button-element-container">
<section id="button-box2" class="text-center my-2 mx-xl-2 p-3">
<button id="button1" class="p-4">${ansArr[1]}</button>
</section>
</div>
<div id="button-element-container">
<section id="button-box3" class="text-center mx-xl-2 p-3">
<button id="button2" class="p-4">${ansArr[2]}</button>
</section>
</div>
<div id="button-element-container">
<section id="button-box4" class="text-center my-2 mx-xl-2 p-3">
<button id="button3" class="p-4">${ansArr[3]}</button>
</section>
</div>`
        return buttonsHTML
    }

    genQuestionHtml(question) {
        const questionHTML = `<h2 class="question">${question}</h2>`
        return questionHTML
    }

    genMessageList(name, message) {
      const liHtml = `<li class="custom-line-height-close custom-bg-li mt-1">
<p class="normal-line-height">${message}</p>
<p class="text-muted normal-line-height">${name}</p>
</li>` 
      return liHtml
  }
}

const genHtml = new GenHtml;

// =========================== Q and A Class ===================================
class QandA {
    constructor(question, buttons, name, message) {
      this.questionHtml = genHtml.genQuestionHtml(question);
      this.buttonsHtml = genHtml.genButtonsHtml(buttons);
      this.liHtml = genHtml.genMessageList(name, message);
    }

    appendQuestion() {
      document.getElementById('inner-question-box').innerHTML = this.questionHtml;
    }

    appendButtons() {
      document.getElementById('button-element-container').innerHTML = this.buttonsHtml;
    }

    appendList() {
      document.getElementById('message-list').innerHTML = this.liHtml;
    }
}


// ============================ Script specific for this index.html ===================================
let questionNumber = 0;
const mainQuestion = `Hello. My name is L.I.L.I and Max designed me to help you find whatever you are looking for! Please select the option that best describes you! P.S. you can always switch to different pages with the buttons in the Nav Bar!`
const mainButtons = ['I am a possible future employer.', 'I am a curious family member or friend.', 'I am a fellow developer looking for inspiration.', 'Where am I? How did I get here? Is this a game?']

const qAndA = new QandA(mainQuestion, mainButtons);

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
