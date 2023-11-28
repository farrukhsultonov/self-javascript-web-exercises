function getLastCommit(username, token)  {
    return fetch(`https://api.github.com/users/${username}/events/public`, {
            headers:
                {
                    "Authorization": "token" + token
                }
    })
        .then(response => response.json());
}

getLastCommit("sevbautista", GITHUB_API_KEY)
    .then(data => {
    console.log(data);
    let commits = data.filter(event => event.type === "PushEvent");
    console.log(commits)
    console.log(new Date(commits[0].created_at));
});