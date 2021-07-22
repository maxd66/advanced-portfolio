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

module.exports = GenHtml;