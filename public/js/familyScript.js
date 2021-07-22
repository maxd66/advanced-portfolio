
const getMessages = async () => {
    try {
        const response = await fetch('/api/tables', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        console.log(response);
        const jsonRes = response => {response.json()};
        console.log(jsonRes);
        

        
    } catch(err) {console.log(err)}
}