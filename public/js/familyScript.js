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
        console.log(data);
        for(const value of data) {
            const qAndA = new QandA('', '', value.first_name, value.message);
            qAndA.appendList();
        }

    } catch(err) {console.log(err)}
}

getMessages()

