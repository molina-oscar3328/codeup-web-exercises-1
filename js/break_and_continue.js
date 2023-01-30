// prompt("Pick an odd number between 1 and 50")


// let hour = 10;
// if (hour >= 6 && hour < 12) {
//     console.log("Good morning");}
// else if (hour >= 12 && hour < 18){
// console.log("Good afternoon!");}
// else
// console.log("Good evening");
// let myAge = 20;
// prompt("Hello how old are you?")
// if (myAge >= 15 && myAge < 25){
//     alert ("You are very young and strong aren't you?");
// }
// else if (myAge >= 25 && myAge < 30){
//     alert("Hey does your back hurt yet chief?")
// }



var userInput = "";
while(true){
   userInput = Number(prompt("enter an odd number between 1 and 50 chief"));
   if(userInput % 2 === 1 && userInput >= 1 && userInput <= 50){
       break;
   }
}

for(var i = 1; 1 <= 50; i += 2){
    console.log("here is the odd number")
}











