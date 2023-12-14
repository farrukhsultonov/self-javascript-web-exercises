// import {fullURL, getMovies, getMovie, createMovie, makeMovie, deleteMovie, editMovie} from "./movie-api.js";
//
// const moviesDiv = document.querySelector("#movies");
// const formInputs = document.querySelectorAll('form input[type="text"]');
// const form = document.querySelector("form");
// const addTitleInput = document.querySelector("#title");
// const addRatingInput = document.querySelector("#rating");
//
// let editMode = false;
//
// const outputLoadingMsg = () => {
//     const loadMsgDiv = document.querySelector("#loading");
//     const loadMsgP = document.createElement("p");
//     loadMsgP.innerText = "loading...";
//     loadMsgP.id = "loadingP";
//     loadMsgDiv.appendChild(loadMsgP);
// }
//
// const removeLoadingMsg = () => {
//     const loadMsgP = document.querySelector("#loadingP");
//     loadMsgP.remove();
// }
//
// const createMovieCard = movieObject => {
//     const movieCard = document.createElement("div");
//     movieCard.classList.add("movieCard");
//     let html = '<ul>';
//     html += `<li class="movieTitle">${movieObject.title}</li>`;
//     html += `<li class="movieRating">${movieObject.rating}</li>`;
//     html += `<li class="movieId">${movieObject.id}</li>`
//     html += '</ul>'
//     html += '<div class="edit-delete">'
//     html += '<button class="edit">Edit</button>';
//     html += '<button class="delete">Delete</button>';
//     html += '</div>'
//     movieCard.innerHTML = html;
//     return movieCard;
// }
//
//
// const outputMovies = (moviesArray, outputNode) => {
//     outputNode.innerHTML = '';
//     moviesArray.forEach(movie => {
//         const movieCard = createMovieCard(movie);
//         outputNode.appendChild(movieCard);
//     });
// }
//
// // On page load
//
// // output the loading message while api call goes out
// outputLoadingMsg();
//
// // clear form inputs
// formInputs.forEach(formInput => formInput.value = '');
//
// // get the movies list from the api
// // output the movies and remove loading message
// getMovies(fullURL)
//     .then(movies=>{
//         outputMovies(movies, moviesDiv);
//         removeLoadingMsg();
//     });
//
// // Make the add movie form appear and disappear
// // on clicking the plus sign
// document.querySelector("header a").addEventListener("click", event => {
//     document.querySelector("#addMovieForm").classList.toggle("seeIt");
// });
//
// // Add event listener for form submission
// // Creates new movie
// document.querySelector("form").addEventListener("submit", async event => {
//     // don't reload page on form submission
//     event.preventDefault();
//     // retrieve values of title and rating inputs
//     const title = addTitleInput.value;
//     const rating = addRatingInput.value;
//     // while API call goes out, show "loading" message
//     outputLoadingMsg();
//     // create movie, output movies list to page
//     await createMovie(makeMovie(title, rating), fullURL);
//     outputMovies(await getMovies(fullURL), moviesDiv);
//     // remove loading message
//     removeLoadingMsg();
//     // reset form inputs
//     addTitleInput.value = '';
//     addRatingInput.value = '';
//     // after submitting the form, hide it
//     document.querySelector("#addMovieForm").classList.toggle("seeIt");
// });
//
// // on user click in a movie card, check if it's
// // a delete or edit button click
// moviesDiv.addEventListener('click', async event => {
//     console.log(event.target);
//
//     // If it's delete
//     if (event.target.classList.contains('delete')) {
//         // get the movie id
//         const movieId = event.target.parentElement.parentElement.querySelector("ul").querySelector(".movieId").innerText;
//         // show loading message
//         // delete the movie and reload the page
//         // remove loading message
//         outputLoadingMsg();
//         await deleteMovie(movieId, fullURL);
//         await getMovies(fullURL).then(movies => outputMovies(movies, moviesDiv));
//         removeLoadingMsg();
//     }
//
//     // If it's edit
//     if (event.target.classList.contains('edit')){
//         // get a reference to the list of movie descriptive attributes
//         const movieDescription = event.target.parentElement.parentElement.querySelector("ul");
//         // get the title and rating
//         const titleLi =  movieDescription.querySelector(".movieTitle");
//         const ratingLi = movieDescription.querySelector(".movieRating");
//         // check the editMode flag. If we are not currently in edit mode, go into edit mode
//         if (!editMode){
//             // a click on the edit button when not in edit mode activates edit mode
//             editMode = true;
//             // get edited movie title and rating
//             const title = titleLi.innerText;
//             const rating = ratingLi.innerText;
//             // empty the list items that are showing the title and rating
//             // we do this because we are replacing the display with a form
//             titleLi.innerText = '';
//             ratingLi.innerText = '';
//             // create an input for the title to edit.
//             const editTitleInput = document.createElement("input");
//             editTitleInput.type = "text";
//             editTitleInput.classList.id = ("editTitleInput");
//             editTitleInput.value = title;
//             // create an input for the rating to edit
//             const editRatingInput = document.createElement("input");
//             editRatingInput.type = "text";
//             editRatingInput.classList.id = ("editRatingInput");
//             editRatingInput.value = rating;
//             // add the inputs to the page at the appropriate place.
//             // this replaces the display of the movie attributes with a
//             // pre-populated edit movie form
//             titleLi.appendChild(editTitleInput);
//             ratingLi.appendChild(editRatingInput);
//         } else if (editMode){
//             // if the edit button is clicked in edit mode, we are getting
//             // the data from the temporary inputs and making a movie object to submit
//             // first we make the movie object
//             const editedMovie = makeMovie(titleLi.querySelector("input").value, ratingLi.querySelector("input").value);
//             // then we retrieve the movie id and add it to the object
//             editedMovie.id = event.target.parentElement.parentElement.children[0].children[2].innerText;
//             // then output the loading message, edit the movie, reload the page, remove loading message
//             outputLoadingMsg();
//             await editMovie(editedMovie, fullURL);
//             await getMovies(fullURL).then(movies => outputMovies(movies, moviesDiv));
//             removeLoadingMsg();
//             // don't forget to go out of edit mode so the process can repeat.
//             editMode = false;
//         }
//     }
//
//
// });


"use strict";

// Loads The Function
function loadMovies() {
    document.getElementById("loader").style.display = "block"; //loading sign
    fetch("http://localhost:3000/movies")
        .then(response => response.json())
        .then(movies => {
            let htmlString = "";
            for (let movie of movies) {
                htmlString += "<div class='container'>"
                htmlString += "<div class='card' style='width: 18rem' class='scrolling-wrapper-flexbox'>";
                htmlString += "<div class='card-body'>";
                htmlString += " <h2 class='card-text' class='text'>" + `${movie.title}` + "</h2>";
                htmlString += "<p class='card-text' class='text'>" + ` Movie Rating: ${movie.rating}` + "</p>";
                htmlString += "<button class='card-textm delete-button' class='text' data-id='" + `${movie.id}` + "'>" + "Delete" + "</button>";
                htmlString += "<button class='card-textm edit-button' class='text' data-id='" + `${movie.id}` + "'>" + "Edit" + "</button>";

                htmlString += "</div>";
                htmlString += "</div>";
                htmlString += "</div>";

            }
            htmlString = "<div class='card-container'>" + htmlString + "</div>";


            document.getElementById("container").innerHTML = htmlString;
            document.getElementById("loader").style.display = "none"; //removes loading sign

            // Delete button event listener
            const deleteButtons = document.getElementsByClassName('delete-button');
            for (let button of deleteButtons) {
                button.addEventListener('click', function () {
                    const id = this.getAttribute('data-id');
                    deleteMovie(id);

                });
            }

            // Edit button event listener
            const editButtons = document.getElementsByClassName('edit-button');
            for (let button of editButtons) {
                button.addEventListener('click', function () {
                    const id = this.getAttribute('data-id');
                    editMovie(id);
                })
            }
        })
        .catch(error => console.error(error));
}

//Search Button Function
document.getElementById('submitButton').addEventListener('click', function (e) {
    e.preventDefault();

    const titleInput = document.getElementById('searchBar').value;

    fetch("http://localhost:3000/movies")
        .then(response => response.json())
        .then(movies => {
            let filteredMovies = movies.filter(function (movie) {
                return movie.title.toLowerCase().includes(titleInput.toLowerCase());
            });

            let htmlString = "";
            for (let movie of filteredMovies) {
                htmlString += "<div class='card' style='width: 18rem'>";
                htmlString += "<div class='card-body'>";
                htmlString += " <h2 class='card-text' class='text'>" + `${movie.title}` + "</h2>";
                htmlString += "<p class='card-text' class='text'>" + ` Movie Rating: ${movie.rating}` + "</p>";
                htmlString += "<button class='card-text delete-button' class='text' data-id='" + `${movie.id}` + "'>" + "Delete" + "</button>";
                htmlString += "<button class='card-text edit-button' class='text' data-id='" + `${movie.id}` + "'>" + "Edit" + "</button>";
                htmlString += "</div>";
                htmlString += "</div>";
            }
            htmlString = "<div class='card-container'>" + htmlString + "</div>";


            document.getElementById("container").innerHTML = htmlString;

        })
        .catch(error => console.error(error));
});
//Add a movie functionality
document.getElementById("addMovieForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form values
    let title = document.getElementById("title").value;
    let rating = document.getElementById("rating").value;


    // Create movie object
    let movie = {
        title: title,
        rating: rating
    };

    // Call API to add movie
    fetch("http://localhost:3000/movies", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(movie)
    })
        .then(response => response.json())
        .then(movies => {
            // Reload movie list
            loadMovies();
            // Clear form fields
            document.getElementById("title").value = "";
            document.getElementById("rating").value = "";

        })
        .catch(error => console.error(error));
});

// Delete
function deleteMovie(id) {
    fetch(`http://localhost:3000/movies/${id}`, {
        method: 'DELETE',
    })
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
            const deletedElement = document.querySelector(`.card[data-id="${id}"]`);
            deletedElement.remove();
        })
        .catch(error => console.error(error));

}

// Edit movie function
function editMovie(id) {
    const title = prompt("Enter new movie title:");
    const rating = prompt("Enter new movie rating:");

    const movieData = {
        title: title,
        rating: rating
    };

    fetch(`http://localhost:3000/movies/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(movieData)
    })
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
            loadMovies(); // Reload movies after editing
        })
        .catch(error => console.error(error));
}

// Call loadMovies on page load
window.onload = loadMovies;

document.getElementById('submitButton').addEventListener('click', function (e) {
    e.preventDefault();
    const searchBar = document.getElementById('searchBar');
    const searchValue = searchBar.value;
    searchMovies(searchValue);
});

