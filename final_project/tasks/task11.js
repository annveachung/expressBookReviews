const axios = require('axios'); 

async function getBookByIsbn(isbn) {
    try {
        const response = await axios.get('http://localhost:5001/isbn/' + isbn);
        
        console.log(response.data); 
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

const args = process.argv.slice(2);
const isbn = args.join(" ");
getBookByIsbn(isbn);
