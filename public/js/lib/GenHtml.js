class GenHtml {
    genButtonsHtml(ansArr) {
        const buttonsHTML = `<div class="button-element-container">
<section id="button-box1" class="text-center mx-xl-2 p-3">
<button id="button0" class="p-4">${ansArr[0]}</button>
</section>
</div>
<div class="button-element-container">
<section id="button-box2" class="text-center my-2 mx-xl-2 p-3">
<button id="button1" class="p-4">${ansArr[1]}</button>
</section>
</div>
<div class="button-element-container">
<section id="button-box3" class="text-center mx-xl-2 p-3">
<button id="button2" class="p-4">${ansArr[2]}</button>
</section>
</div>
<div class="button-element-container">
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

    genMessageList(arr) {
        let liHtml = ``;
        for(const value of arr) {
            const templiHtml = `<li class="custom-line-height-close custom-bg-li mt-1">
    <p class="normal-line-height">${value.message}</p>
    <p class="text-muted normal-line-height">-${value.first_name}</p>
    </li>` 
            liHtml += templiHtml
        }
        return liHtml
    }
}

export default GenHtml;