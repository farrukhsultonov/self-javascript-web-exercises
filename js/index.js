fetch('http://localhost:3000/authors')
    .then(response => response.json())
    .then(books => console.log(books))
    .catch(error => console.error(error));