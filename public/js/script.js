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
}


const genHtml = new GenHtml;

class QandA {
    constructor(question, buttons) {
      this.questionHtml = genHtml.genQuestionHtml(question);
      this.buttonsHtml = genHtml.genButtonsHtml(buttons);
    }

    appendQuestion() {
      document.getElementById('inner-question-box').innerHTML = this.questionHtml;
    }

    appendButtons() {
      document.getElementById('button-element-container').innerHTML = this.buttonsHtml;
    }
}

const mainQuestion = `My name is L.I.L.I and I was designed to help you find whatever you are looking for! Please select the option that best describes you! P.S. you can always switch to different pages with the buttons in the Nav Bar!`
const mainButtons = ['I am a possible future employer.', 'I am a curious family member or friend.', 'I am a fellow developer looking for inspiration.', 'Where am I? How did I get here?']

const qAndA = new QandA(mainQuestion, mainButtons);

document.getElementById('start-button').addEventListener('click', () => {
    qAndA.appendQuestion();
    qAndA.appendButtons();
})