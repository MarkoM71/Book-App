// Replace 'YOUR_API_KEY' with your actual Google Books API key
const apiKey = 'https://www.googleapis.com/auth/books';
// Replace 'search+terms' with your actual search query
const query = 'search+terms';

const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&key=${apiKey}`;

fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Process and display the data
        console.log(data);
    })
    .catch(error => {
        console.error('Fetching error:', error);
    });
