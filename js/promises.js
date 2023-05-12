// fetch(url, {headers: {'Authorization': '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'}})
function getLastCommitDate(username) {
    return new Promise((resolve, reject) => {
        fetch(`https://api.github.com/users/${username}/events`)
            .then(response => response.json())
            .then(events => {
                const lastCommitEvent = events.find(event => event.type === 'PushEvent');
                if (lastCommitEvent) {
                    resolve(new Date(lastCommitEvent.created_at));
                } else {
                    reject(new Error(`No commit found for user ${username}`));
                }
            })
            .catch(error => reject(error));
    });
}
