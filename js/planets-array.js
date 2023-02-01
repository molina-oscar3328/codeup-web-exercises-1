


(function(){
    "use strict";

    var planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];

    /**
     * TODO:
     * Read each console log below, and write some javascript code to perform
     * the step that it describes
     */

    console.log(planets);
    console.log('Adding "The Sun" to the beginning of the planets array.');
    planets.unshift("The Sun");
    console.log(planets);
    console.log("*********NEXT*********");

    console.log(planets);
    console.log('Adding "Pluto" to the end of the planets array.');
    planets.push("Pluto");
    console.log(planets);
    console.log("*********NEXT*********");

    console.log('Removing "The Sun" from the beginning of the planets array.');
    var removedItem = planets.shift();
    console.log(planets);
    console.log("*********NEXT*********");


    console.log('Removing "Pluto" from the end of the planets array.');
    var doneItem = planets.pop();
    console.log(planets);
    console.log("*********NEXT*********");

    console.log('Finding and logging the index of "Earth" in the planets array.');
    var index = planets.indexOf("Earth");
    console.log(index);
    console.log("*********NEXT*********");

    console.log("Reversing the order of the planets array.");
    planets.reverse();
    console.log(planets);
    console.log("*********NEXT*********");

    console.log("Sorting the planets array.");
    planets.sort();
    console.log(planets);
})();












// var num = "hello"
// console.log(num);
//
//
// var number = ['1', '2', '3', '4'];
// console.log(number);
// number.push('5');
// console.log(number);
// number.push('6', '7', '8');
// console.log(number);
// number.unshift('33', '22', '11', '00');
// console.log(number);
// console.log("______next example________"); //<-------------
//
//
// var number = ['1', '2', '3', '4'];
//
// number.shift();
// console.log(number);
// number.pop();
// console.log(number);
// console.log("______reverse examples________"); //<-------------
//
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
//
// console.log(colors);
//
// colors.reverse();
//
// console.log(colors);
//
// console.log("________sorting_______"); //<--------------
//
// console.log(colors);
//
// colors.sort();
//
// console.log(colors);
//
// console.log("_______splitting method________"); //<-------------
//
// var months = "jan,feb,mar,apr,may,jun,jul,aug"
// var arrayMonths = months.split(",");
// console.log(arrayMonths);
//
// var hornet = "Hornet the great";
// var hornetArray = hornet.split(" ");
// console.log(hornetArray);
//
// var sentence = "hello how are you doing?"
// var emptySplit = sentence.split();
// console.log(emptySplit);
//
// console.log("__________joining example_____________") // <-----------
//
// var elements = ['fire', 'air', 'water'];
// console.log(elements.join(","));
// console.log(elements.join(" + "));
// console.log(elements.join(" ? "));
// console.log(elements.join(" / "));
// console.log(elements.join(" ---- "));
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
