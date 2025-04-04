const axios = require('axios'); 

async function getBookByTitle(title) {
    try {
        const response = await axios.get('http://localhost:5001/title/' + title);
        
        console.log(response.data); 
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

const args = process.argv.slice(2);
const title = args.join(" ");
getBookByTitle(title);
