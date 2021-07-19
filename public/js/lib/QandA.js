const GenHtml = require('../lib/GenHtml')
const genHtml = new GenHtml;

class QandA {
    constructor(question, buttons) {
      this.questionHtml = genHtml.genQuestionHtml(question);
      this.buttonsHtml = genHtml.genButtonsHtml(buttons);
    }

    appendQuestion() {
      $('#inner-question-box').innerHTML = this.questionHtml;
    }

    appendButtons() {
      $('#button-element-container').innerHTML = this.buttonsHtml;
    }
}

module.exports= QandA;