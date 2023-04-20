"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 */
// Define a function named isANumber that takes in a value and returns true if the input is numeric, or false if the input is not numeric. Numeric strings should not be considered as numbers in this function, and should return false.

//good
function isANumber (x) {
    return typeof x === 'number'
}


// Define a function named increment that takes in an input and adds 1 to it if the input is numeric. If the input is not numeric, then return false.

//good
function increment(input) {
    if (input == parseFloat(input)) {
        return Number(input) + 1;
    } else {
        return false;
    }
}




// Define a function named decrement. If the provided input is numeric, the function should subtract 1 and return the result. If the input is not numeric, decrement should return false.


//good
function decrement(input) {
    if (input == parseFloat(input)) {
        return Number(input) - 1;
    } else {
        return false;
    }
}



// Write a function named getHighestNumber that takes in 3 arguments. If all 3 inputs are numbers or numeric strings, then return the highest number. If any of the 3 inputs is missing or non-numeric, then return false.

function getHighestNumber(a, b, c) {
    if(typeof a === 'number' && typeof b === 'number' && typeof c === 'number') {
        return Math.max(a, b, c)
    } else {
        return false
    }
}



// Define a function named parseNumber that parses (converts) a numeric String and returns its value as a number, the function should be able to decide if it should be parsing an Integer or a Float value.

function parseNumber(string) {
    return parseFloat (string);
}



// Write a function named add that takes in two inputs. If both inputs provided are numeric, add will return the sum of both inputs. If one or both inputs is not numeric, add should return false.
function add (x, y) {
    if (isNaN(x) || isNaN(parseInt(y))) {
        return false
    } else {
        return (Number(x) + Number(y))
    }
}





// Write a function named multiply that takes in two inputs. If both inputs provided are numeric, multiply returns the product of the first input multiplied by the second. If either or both inputs are not numeric, multiply should return false.

function multiply(x, y) {
    if (isNaN(parseInt(x)) || isNaN(parseInt(y))) {
        return false
    } else {
        return (Number(x) * Number(y))
    }
}



// Define a function named square. If the provided input is numeric, square should return the number multiplied by itself. If the input is not numeric, square, should return false.
function square (input1) {
    if (typeof input1 == 'number') {
        return input1 * input1
    } else {
        return false
    }
}




// Write a function named sumOfSquares that takes in two inputs. If both inputs are numeric, sumOfSquares should square each input and return the sum of them added together. For example, if we pass a and b then we should square a and add it to the square of b. If either or both inputs are not numeric, sumOfSquares should return false.

function sumOfSquares(input1,input2) {
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        return (input1 * input1) + (input2 * input2)
    } else {
        return false
    }
}



// Write a function named isPalindrome that takes in a single input. If the input is a numeric string, then return false. If the input is a string, then return true if the string is the same forwards as it is backwards. Return false if the string is different forwards from backwards. Ignore capitalization.

//good
function isPalindrome (input) {
    if (typeof input === 'string') {
        return (input.toLowerCase() === input.split('').reverse().join('').toLowerCase())
    } else {
        return false
    }
}