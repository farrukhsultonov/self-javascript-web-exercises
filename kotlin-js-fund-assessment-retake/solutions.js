"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 */



// 1. Define a function named isGreaterThan that takes in two values and returns a true if the first argument is greater than the second argument otherwise it should return false. If either argument is not a number, return false;
function isGreaterThan(num1, num2) {
    if (isNaN(num1) || isNaN(num2) || num1 === null || num2 === null) {
        return false;
    }
    return num1 > num2;
}

// 2. Define a function named isLessThan that takes in two values and returns a true if the first argument is less than the second argument otherwise it should return false. If either argument is not a number, return false;
function isLessThan(num1, num2) {
    if (isNaN(num1) || isNaN(num2) || num1 === null || num2 === null) {
        return false;
    }
    return num1 < num2;
}

// 3. Define a function named isEqualNumber that takes in two values and returns a true if the first argument is equal to the second argument, otherwise it should return false. If either argument is not a number return false;
function isEqualNumber(num1, num2) {
    if (isNaN(num1) || isNaN(num2) || num1 === null || num2 === null) {
        return false;
    }
    return num1 === num2;
}

// 4. Define a function named isEqual that takes in two values and returns a true if the first argument has the same value and type as the second argument, otherwise it should return false.
function isEqual(num1, num2) {
    return num1 === num2;
}

// 5. Define a function named isNot that accepts a boolean argument and returns the opposite value of the argument. It should return false if the argument is null or not a boolean.
function isNot(input) {
    if (typeof input !== 'boolean' || input === null) {
        return false;
    }
    return !input;
}

// 6. Define a function named calcAbs that accepts a number argument and returns the absolute value of the argument. It should return O (zero) if the arguments is null or not a number.
function calcAbs(num) {
    if (num === null || isNaN(num)) {
        return 0;
    } else if (num < 0) {
        return num * -1;
    }
    return num;
}

// 7. Define a function named calcCube that accepts a number argument and returns the cubed value of the argument. It should return O (zero) if the arguments is null or not a number.
function calcCube(num) {
    if (num === null || isNaN(num)) {
        return 0;
    }
    return num * num * num;
}

// 8. Define a function named isTypeMatch that accepts two arguments and returns true if the types of the arguments match. It should return false if either arguments is null.
function isTypeMatch(input1, input2) {
    if (input1 === null || input2 === null) {
        return false;
    }
    return (typeof input1 === typeof input2);
}

// 9. Define a function named findLongestString that accepts two string arguments and returns the string with the greatest length. If only one argument is a string, return that argument. If neither arguments are strings, return and empty string.
// function findLongestString(input1, input2) {
//     if (input1 === null || typeof input1 !== 'string') {
//         if (input2 === null || typeof input2 !== 'string') {
//             return "";
//         }
//         return input2;
//     }
//
//     if (input2 === null || typeof input2 !== 'string') {
//         if (input1 === null || typeof input1 !== 'string') {
//             return "";
//         }
//         return input1;
//     }
//
//     if (input1.length > input2.length) {
//         return input1;
//     }
//     return input2;
// }


// another solution

function findLongestString(a, b){
    if(typeof a === "string" && typeof b === "string"){
        if (a.length > b.length){
            return a;
        }else{
            return b;
        }
    }
    else if(typeof a === "string"){
        return a;
    }else if (typeof b === "string"){
        return b;
    }else {
        return "";
    }
}



// 10. Define a function named isFactor that accepts two number arguments and returns true if the first argument is a factor of the second argument. It should return false if either argument is null or not a number. Also return false if the first argument is 0 (zero).
function isFactor(divisor, base){
    if (divisor === null || base === null || typeof divisor !== 'number' || typeof base !== 'number' || divisor === 0) {
        return false;
    }
    return ((base % divisor) === 0);
}