// function declaration

// start with the `function` keyword
// follow with the name of the function
// think of what  information you need in order to make the program work: these are the parameters
// you name the parameters and put them in a comma separated list inside the parentheses
// open up a pair of curly braces
// inside the curly braces you put the code that will actually run
// this is called the code block
// finally you create a return statement

// FUNCTION DECLARATION

function addTwoNumbers(num1, num2){
    return num1 + num2;
}

addTwoNumbers(5, 5);

// function timeIWouldSave(currentSpeed, plannedSpeed, distanceToTravel){
//     const timeAtCurrentSpeed = (distanceToTravel / currentSpeed) * 60;
//     const timeAtPlannedSpeed = (distanceToTravel / plannedSpeed) * 60;
//     return Math.floor(timeAtCurrentSpeed - timeAtPlannedSpeed);
// }


// ARROW FUNCTION

// Doesn't use the `function` keyword
// Define a variable with a variable name
// that variable name is how you call the function
// you put the parameters inside parentheses
// then you have an 'arrow' (angle bracket and equals sign)
// then you have the return value

// function addTwoNumbers(num1, num2){
//     return num1 + num2;
// }

// If I am just returning something in one line
// I don't need the `return` keyword
// It's understood that what comes after the arrow *is* the return

// const addTwoNumbers = (num1, num2) => num1 + num2;

// If I have multiple lines of logic inside my arrow function, I need curly braces
// If I have curly braces, I have to have a `return` keyword to define the return value

//function timeIWouldSave(currentSpeed, plannedSpeed, distanceToTravel){
//     const timeAtCurrentSpeed = (distanceToTravel / currentSpeed) * 60;
//     const timeAtPlannedSpeed = (distanceToTravel / plannedSpeed) * 60;
//     return Math.floor(timeAtCurrentSpeed - timeAtPlannedSpeed);
// }

const timeIWouldSave = (currentSpeed, plannedSpeed, distanceToTravel) => {
    const timeAtCurrentSpeed = (distanceToTravel / currentSpeed) * 60;
    const timeAtPlannedSpeed = (distanceToTravel / plannedSpeed) * 60;
    return Math.floor(timeAtCurrentSpeed - timeAtPlannedSpeed);
}

// FUNCTION EXPRESSION

// These have basically been replaced by arrow functions
// The value of this is that you have a variable name that is a reference to a function
// That is useful if you ever need to pass a function to another function, or return a function from a function

const add = function(num1, num2){
    return num1 + num2;
}



// let result = add(5, 5);
// console.log(result);

// console.log(add(5, 5));

// Don't forget to create some output
// for your function calls
add(5, 5);



// *************** important notes ***************//
// ${}  template literal treats anything within the curly brackets as JavaScript and anything outside the brackets as string.



// ************************* when in exercise time, go head 'yellow-cup' and when you're done go ahead and update your cup.   *****************//



// ********************************************************************** Jay's lecture notes for function ***********************************************
"use strict";

// Create a function named sum that takes in two numbers and returns the sum of the two numbers.

// Function Definition / Function Declaration
function sum(num1, num2) {
    return num1 + num2;
}

// Calling the function / Execute the function.
// console.log(sum(21,19));

// Mini-Exercise!

// Create a function named fullName that takes in two inputs, a first name and last name, and returns the first name and last name concatenated together.

// function fullName(firstName, lastName) {
//     return firstName + " " + lastName;
// }


// Refactor with Template Literals
// function fullName(firstName, lastName) {
//     return `${firstName} ${lastName}`
//     // this will never run due to our return statement being executed before the console.log()
//     // console.log('Function has finished!');
// }

// console.log(fullName("mordecai", "alexander"));

// console.log(`Hello ${ fullName('Jay', 'Arredondo') }, did you know that 5 + 5 = ${sum(5, 5)}`);


// Anonymous Function / Function Expression
const decrement = function(input) {
    return input - 1;
}

// console.log(decrement(5));

// Arrow Functions

// function declaration

// function fullName(firstName, lastName) {
//     return firstName + " " + lastName;
// }

// arrow functions

// longer arrow function

const fullName = (firstName, lastName) => {
    return firstName + " " + lastName;
}

// If an arrow function only has 1 parameter, parenthesis are optional!
// const myFullName = nameStr => nameStr;
// console.log(myFullName('Jay Arredondo'))

// shorter arrow function
// The return is implied, if no curly braces are present.
// const fullName = (firstName, lastName) => firstName + " " + lastName;

// console.log(fullName('Michael', 'Myers'));


// Create a function that takes in a string and transforms the string to lowercase.

let sampleString = "HoW oN eArTh doEs thIs wOrK?"

// Function Declaration

// function lowerCaseString(str) {
//     sampleString = str.toLowerCase();
// }
// console.log(sampleString);

// lowerCaseString(sampleString);

// console.log(sampleString);

// Arrow Function

// const lowerCaseString = (str) => {
//     sampleString = str.toLowerCase()
// };
//
// console.log(sampleString)
// lowerCaseString(sampleString);
// console.log(lowerCaseString(sampleString));
// console.log(sampleString);


// function increment(num) {
//     alert(num + 1);
// }
//

// Cannot log a value if nothing is returned, the result would be undefined.
// console.log(increment(5));

function greeting(greeting = 'Howdy!') {
    return greeting;
}

console.log(greeting());
console.log(greeting('Greetings!'));


let globalVar = "Hello! My name is Globie!"

function test() {
    let localVar = 'Hello, my name is Lola';
    console.log(localVar);
    {
        let innerVar = 'Nested Var!'
        console.log(innerVar);
        console.log(localVar);
    }
    console.log(globalVar);
}

// console.log(localVar)
test();

let x = 300;
let y = 100;

function scopeExample() {
    let x = 1;
    let y = 2;
    console.log(`x: ${x} y: ${y}`);
    return x + y;
}

console.log(`x: ${x} y: ${y}`);
let returnValue = scopeExample();
console.log(returnValue);