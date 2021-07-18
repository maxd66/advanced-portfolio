const { expect } = require('@jest/globals');
const GenHtml = require('../lib/GenHtml');

describe('GenHtml', () => {
    describe('genQuestionHtml', () => {
        it('Returns proper html snippet with input question', () => {
            const questionArr = ['What is love', "baby don't hurt me", 'no more.'];
            const genHtml = new GenHtml;
            expect(genHtml.genQuestionHtml(questionArr[1])).toBe(`<h2 class="question">baby don't hurt me</h2>`)
        })
    })
    describe('genButtonsHtml', () => {
        it('Returns proper html snippet with next set of buttons', () => {
            const buttonArr = ['And what do we say', "to the god of death?", 'Not', 'Today'];
            const genHtml = new GenHtml;
            expect(genHtml.genButtonsHtml(buttonArr)).toBe(`<div id="button-element-container">
<section id="button-box1" class="text-center mx-xl-2 p-3">
<button id="button0" class="p-4">And what do we say</button>
</section>
</div>
<div id="button-element-container">
<section id="button-box2" class="text-center my-2 mx-xl-2 p-3">
<button id="button1" class="p-4">to the god of death?</button>
</section>
</div>
<div id="button-element-container">
<section id="button-box3" class="text-center mx-xl-2 p-3">
<button id="button2" class="p-4">Not</button>
</section>
</div>
<div id="button-element-container">
<section id="button-box4" class="text-center my-2 mx-xl-2 p-3">
<button id="button3" class="p-4">Today</button>
</section>
</div>`)
        })
    })
})