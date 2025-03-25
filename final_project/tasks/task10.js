const axios = require('axios'); 

async function getBooks() {
    try {
        const response = await axios.get('http://localhost:5001/');
        
        console.log(response.data); 
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

getBooks();
