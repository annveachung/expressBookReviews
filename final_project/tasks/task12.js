const axios = require('axios'); 

async function getBookByAuthor(author) {
    try {
        const response = await axios.get('http://localhost:5001/author/' + author);
        
        console.log(response.data); 
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

const args = process.argv.slice(2);
const author = args.join(" ");
getBookByAuthor(author);
