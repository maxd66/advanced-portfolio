import QandA from '/js/lib/QandA.js'

const getMessages = async () => {
    try {
        const response = await fetch('/api/visitors', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const data = await response.json()
        const qAndA = new QandA('', '', data)
        qAndA.appendList()
    } catch(err) {console.log(err)}
}

const submitMessage = async () => {
    let name = document.getElementById('userName').value.trim();
    let message = document.getElementById('userMessage').value.trim();
    let messageObj = {
        first_name: name,
        message: message,
    }
    if(!name) {
        return
    }
    if(!message) {
        return
    }

    try {
        const response = await fetch('/api/visitors', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify(messageObj),
        })

        const data = response.json()
        getMessages()
        document.getElementById('userName').value = '';
        document.getElementById('userMessage').value = '';
        alert('Thank you! Your message has been posted!')
    } catch(err) {console.log('error')}
}

document.getElementById('submit-button').addEventListener('click', (e) => {
    e.preventDefault();
    submitMessage();
})

getMessages()