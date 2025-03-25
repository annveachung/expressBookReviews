const axios = require('axios'); 

async function getBookByIsbn(isbn) {
    try {
        const response = await axios.get('http://localhost:5001/isbn/' + isbn);
        
        console.log(response.data); 
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

getBookByIsbn(1);
