fetch('http://localhost:3000/books')
    .then(response => response.json())
    .then(books => console.log(books))
    .catch(error => console.error(error));