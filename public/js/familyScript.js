import 'regenerator-runtime/runtime';
import axios from 'axios';

const getMessages = async () => {
    try {
        const response = await axios.get('/api/family')
        
    } catch(err) {console.log(err)}
}