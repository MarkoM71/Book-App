//API FETCH CODE NOT OPERATIONAL, LEFT HERE FOR POSSIBLE FUTURE USE

const apiKey = 'https://www.googleapis.com/auth/books';
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
        console.log(data);
    })
    .catch(error => {
        console.error('Fetching error:', error);
    });
