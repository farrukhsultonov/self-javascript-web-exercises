function getLastCommit(username)  {
    fetch(`https://api.github.com/users/${username}/events/public`, {
            headers:
                {
                    "Authorization": "token" + GITHUB_API_KEY
                }
    })
        .then(response => {
            return response.json();
        }).then(data => {
        console.log(data[0].created_at);
    });
}

getLastCommit("farrukhsultonov");