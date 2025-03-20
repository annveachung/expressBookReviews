async function postData() {
    try {
        const newPost = {
            title: 'New Post Title',
            body: 'Content of the post',
            userId: 1
        };

        // Send POST request and wait for the response
        const response = await axios.post('http://localhost:5001/', newPost);

        // Log the created post data
        console.log(response.data); // This will log the created post
    } catch (error) {
        console.error('Error posting data:', error);
    }
}

postData();
