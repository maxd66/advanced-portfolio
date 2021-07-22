import GenHtml from '/js/lib/GenHtml.js'
const genHtml = new GenHtml;

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

export default QandA;