const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }

    ];
// TODO: Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

//     let threeLanguages = users.filter(function(language){
//         return users.language.length >= 3
//     })
// console.log(threeLanguages);

// TODO: Use .map to create an array of strings where each element is a user's email address

    let usersEmail = users.map (users => users.email)
    console.log(usersEmail);

    // TODO: Use .reduce to get the longest email from the list of users.

    let longEmail = users.reduce((longest, user) => {
        return user.email.length > longest.length ? user.email : longest} , ' ');
    console.log(longEmail);


let numbers = [1, 2, 3, 4, 5];

let squaredNumbers = numbers.map(num => num ** 2);

console.log([parseInt]);
