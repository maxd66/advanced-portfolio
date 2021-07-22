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
    try {

    } catch(err) {}
}

getMessages()



