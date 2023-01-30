
// const number = parseInt(prompt('Enter an integer: '));
//
// for(var i = 1; i <= 10; i++) {
//
//     const result = i * number;
//
//     console.log(number * i);
// }

/* program to generate a multiplication table
upto a range */

// take number input from the user
// let number = parseInt(prompt('Enter an integer: '));
//
// // take range input from the user
// let range = parseInt(prompt('Enter a range: '));
//
// //creating a multiplication table
// for(let i = 1; i <= range; i++) {
//     let result = i * number;
//     console.log(`${number} * ${i} = ${result}`);
// }



let number = parseInt(prompt("Hello can you pick a number please"));
let range = parseInt(prompt("How many times would you like to multiply this by?"));

for(let i = 1; i <= range; i++){
    let result = i * number;
    console.log (`${number} * ${i} = ${result}`);
}

for(let i = 1; 1 <= 10; i++){
    let result = i * 1;
    console.log (`${1} * ${i} = ${result}`);
}


123 is odd
80 is even
24 is even
199 is odd
...


function oddNumber(input){
    console.log("This number should be skipped" + input);
    for (let i = 0; i < 50; i++){
        if ( i % 2 === 0){
        }
        else if ( i !== input){
            console.log("Here is an odd number!:" + 1);
        } else {
            console.log("Ewww skip that number :" + 1);
        }
    }
}


function shoMultiplicationTable(number){
    for(var i = 1; i <= 10; i++){
        console.log(number + " x " + i + "=" )
    }
}

for(var i = 0; i < 10; i++){
    var random = Math.floor((Math.random() * 180) + 20)
    if(random % 2 === 0){
        console.log(random + " is even!");
    }
}


for(var i = 1; i<= 9; i++){
    var iString = "";
    for(var n = 1, n <= i; n++){
        iString += i;
    }
    console.log(iString);
}



for(var i = 100; i >= 5; i = i - 5){
    console.log(i);
}












