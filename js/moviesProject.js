// "use strict";
//
// ////////////////////// Loading Function///////////////////
// function onReady(callback) {
//     let intervalId = window.setInterval(function () {
//         if (document.getElementsByTagName('html')[0] !== undefined) {
//             window.clearInterval(intervalId);
//             callback.call(this);
//         }
//     }, 3000);
// }
//
// function setVisible(selector, visible) {
//     document.querySelector(selector).style.display = visible ? 'block' : 'none';
// }
//
// onReady(function () {
//     setVisible('.page', true);
//     setVisible('#loading', false);
// })
//
//
// //This promise below takes in a js object store it in a variable and returns function. This allows AJAX to talk to Glitch DB
// function getMovies() {
//     return fetch('https://autumn-daffodil-ink.glitch.me/movies')
//         .then(response => response.json())
// }
//
// getMovies().then(movies => {
//     movies.forEach(title => {
//         console.log(title)
//     })
// }).catch(error => console.log(error));
// //-------------------------------------------------------------grabs movies from db.json -----------------------------------------------------------------------//
// setTimeout(() => {
//     let html = ""
//     fetch('https://autumn-daffodil-ink.glitch.me/movies').then((data) => {
//         return data.json();
//     }).then((data) => {
//         for (let movies of data) {
//             $(".movie-list-container").append(
//                 `<div class="movie-list-wrapper">
//     <div class="movie-list">
//         <div class="movie-list-item">
//             <img class="movie-list-item-img" src="${movies.poster}" alt=""/>
//             <div class="movieInfo" id="movieInfo">
//             <span class="movie-list-item-title">Title: ${movies.title}</span>
//             <p class="movie-list-item-desc">Genre: ${movies.genre}</p>
//             <p class="movie-list-item-desc">Rating: ${movies.rating}</p>
//             <p class="movie-list-item-desc">Plot: ${movies.plot}</p>
//             </div>
//              <a href="#" type="button"  id="movieInfo" class="btn btn-dark" data-bs-toggle="popover" data-bs-title="Transformers" data-bs-content="">Movie Info</a>
//             <a href="#" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#editBtn">Edit</a>
//         <a href="#" class="btn btn-danger">Delete</a>
//             </div>
//     </div>
//     </div>
// </div>`
//             )
//         }
//     });
// });
// const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
// const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
//
//
// /////////////////////////////////////Event Listeners///////////////////////////////////////////////////
// $('.btn-dark').click(function (event) {
//     event.preventDefault();
//     console.log("This should work");
//
// });





const moviesContainer = document.getElementById("movies-container");
const addMovieForm = document.getElementById("add-movie-form");

// display loading message
moviesContainer.innerHTML = "<p>Loading...</p>";

// make AJAX request to get all movies
fetch("http://localhost:3000/movies")
    .then(response => response.json())
    .then(data => {
        // remove loading message
        moviesContainer.innerHTML = "";

        // generate HTML from response data
        data.forEach(movie => {
            const movieDiv = document.createElement("div");
            movieDiv.innerHTML = `
        <h3>${movie.title}</h3>
        <p>Rating: ${movie.rating}</p>
        <button class="edit-movie" data-id="${movie.id}">Edit</button>
        <button class="delete-movie" data-id="${movie.id}">Delete</button>
      `;
            moviesContainer.appendChild(movieDiv);
        });
    })
    .catch(error => console.error(error));

// add event listener for form submission
addMovieForm.addEventListener("submit", event => {
    event.preventDefault();
    const title = event.target.title.value;
    const rating = event.target.rating.value;
    const movieData = { title, rating };
    fetch("http://localhost:3000/movies", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(movieData)
    })
        .then(response => response.json())
        .then(data => {
            const movieDiv = document.createElement("div");
            movieDiv.innerHTML = `
        <h3>${data.title}</h3>
        <p>Rating: ${data.rating}</p>
        <button class="edit-movie" data-id="${data.id}">Edit</button>
        <button class="delete-movie" data-id="${data.id}">Delete</button>
      `;
            moviesContainer.appendChild(movieDiv);
        })
        .catch(error => console.error(error));
});

// add event listener for edit button clicks
// moviesContainer.addEventListener("click", event => {
//     if (event.target.classList.contains("edit-movie")) {
//         const id = event.target.dataset.id;
//         const movieDiv = event.target.parentElement;
//         const title = movieDiv.querySelector("h3").textContent;
//         const rating = movieDiv.querySelector("p").textContent.split(" ")[1];
//         const editMovieForm = document.createElement("form");
//         editMovieForm.innerHTML = `
//       <label for="title">Title:</label>
//       <input type="text" id="title" name="title" value="${title}" required>
//       <label for="rating">Rating:</label>
//       <input type="number" id="rating"