"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * lowerCase()
 * subtract()
 * multiplyBy2()
 * getLowestNumber()
 * isEvenlyDivisible()
 * inBetween()
 * replace()
 * addStringLengths()
 * convertHourToSec()
 * calculateChange()
 */

// 1. Define a function named lowerCase that takes in an input and returns that input as a string in all lower case letters. Returns false if the input passed is not a string.
function lowerCase(input) {
    if(typeof input === 'string') {
        return input.toLowerCase();
    }
    return false;
}

// 2. Write a function named subtract that takes in two inputs. If both inputs provided are numeric or numeric strings, subtract will return the difference when the second input is subtracted from the first input. If one or both inputs is not numeric or numeric strings, subtract should return false.
function subtract(x, y) {
    if(isNaN(x) || isNaN(y) || typeof x === 'boolean' || typeof y === 'boolean') {
        return false;
    }
    return x - y;
}

// 3. Define a function named multiplyBy2 that takes in an input and multiplies it by 2 if the input is numeric. If the input is Not A Number, then return false.
function multiplyBy2(input) {
    if(isNaN(input) || typeof input === 'boolean' || input === null) {
        return false;
    }
    return input * 2;
}

// 4. Write a function named getLowestNumber that takes in 3 arguments. If all 3 inputs are numbers or numeric strings, then return the lowest number. If any of the 3 inputs is missing or non-numeric, then return false.
function getLowestNumber(x, y, z) {
    if(isNaN(x) || isNaN(y) || isNaN(z)) {
        return false;
    }
    return Math.min(x, y, z);
}


// 5. Define a function named isEvenlyDivisible that takes in two inputs: a numeric value and divisor. If the numeric value can be evenly divided by the divisor, then return true. Otherwise, return false.
function isEvenlyDivisible(value, divisor) {
    if(typeof value === 'number' && typeof divisor === 'number' && (value % divisor) === 0) {
        return true;
    }
    return false;
}

// 6. Define a function named inBetween that takes in three numeric inputs: a value, a low, and high. If the first numeric value is in-between the ranges of the low and high values, then return true. Otherwise, return false.
function inBetween(value, low, high) {
    if(typeof value === 'number' && (value > low && value < high)) {
        return true;
    }
    return false;
}


// 7. Write a function named replace that takes in three inputs. The first input is a string, the second input is the string that is to be replaced, the third is the string that you are replacing the second input with. Only replace the first occurrence of the matched string. Return the string with the newly replaced values. If the first input is not a string, return false.
function replace(input, oldValue, newValue) {
    if(typeof input === "string" && typeof oldValue === 'string' && typeof newValue === 'string'){
        return input.replace(oldValue, newValue)
    }
    return false;
}

// 8. Write a function named addStringLengths that takes in two inputs. If both inputs provided are strings, addStringLengths returns the sum after adding the length (number of characters) of both strings. If either or both inputs are not strings, return false.
function addStringLengths(input1, input2) {
    if(typeof input1 === 'string' && typeof input2 === 'string') {
        return input1.length + input2.length;
    }
    return false;
}

// 9. Define a function named convertHourToSec that takes in one input Hours. Return the conversation of the number of hours into total seconds. If the input is not numeric or a numeric string, convertHourToSec, should return false.
function convertHourToSec(hour) {
    if(isNaN(hour) || hour < 0 || typeof hour === 'boolean' || hour === null) {
        return false;
    }
    return hour * 3600;
}

// 10. Write a function named calculateChange that takes in two inputs, totalPaid and totalCost. If both inputs are numeric or numeric strings, calculateChange should return the change after subtracting the cost from the amount paid. The return should be in $x.xx format as a string. If either or both inputs are not numeric or numeric strings, calculateChange should return false.
function calculateChange(totalPaid, totalCost) {
    if(isNaN(totalPaid) || isNaN(totalCost) || typeof totalCost === 'boolean' || typeof totalPaid === 'boolean') {
        return false;
    }
    return "$" + (totalPaid - totalCost).toFixed(2);
}



// parseInt() method allows us to convert a string that represents a number into an actual numeric value