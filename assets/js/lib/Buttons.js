class Buttons {

    nextQuestion(question) {
        const questionHTML = ``
    }

    nextButtons(ansArr) {
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
    }
}

module.exports= Buttons;