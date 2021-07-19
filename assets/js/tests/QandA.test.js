const { expect } = require('@jest/globals');
const QandA = require('../lib/QandA');


describe('QandA', () => {
    describe('constructor', () => {
        it('generates a constructor that contains the question html snippet and the buttons html snippet', () => {
            const question = 'What are you?'
            const buttons = ["I'm batman", "I'm Iron Man", "I'm pet- I mean Spider-Man", "I am vengeance"]
            const qAndA = new QandA(question, buttons);

            expect(qAndA.questionHtml).toBe(`<h2 class="question">What are you?</h2>`)
        })
        it('generates a constructor that contains the question html snippet and the buttons html snippet', () => {
            const question = 'What are you?'
            const buttons = ["I'm batman", "I'm Iron Man", "I'm pet- I mean Spider-Man", "I am vengeance"]
            const qAndA = new QandA(question, buttons);

            expect(qAndA.buttonsHtml).toBeDefined()
        })
    })
})