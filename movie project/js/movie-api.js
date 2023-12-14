const baseURL = "http://localhost:3000";
const endPoint = "movies";
export const fullURL = `${baseURL}/${endPoint}`;

export const createMovie = async (movie, apiURL) => {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(movie)
    }
    const resp = await fetch(apiURL, options);
    return await resp.json();
}

export const getMovies = async (apiURL) => {
    const resp = await fetch(apiURL);
    return await resp.json();
}

export const getMovie = async (movieId, apiURL) => {
    const resp = await fetch(`${apiURL}/${movieId}`);
    return await resp.json();
}

export const makeMovie = (title, rating) =>{
    return {
        title: title,
        rating: rating
    }
}

export const deleteMovie = async (movieId, apiURL) => {
    const options = {
        method: 'DELETE'
    }
    const resp = await fetch(`${apiURL}/${movieId}`, options);
    return await resp.json()
}

export const editMovie = async (movieObject, apiURL) => {
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(movieObject)
    }
    const resp = await fetch(`${apiURL}/${movieObject.id}`, options);
    return await resp.json();
}