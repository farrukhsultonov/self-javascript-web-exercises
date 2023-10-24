"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 */

// 1. isGreaterThan
function isGreaterThan(input1, input2) {
    return input1 > input2;
}


// 2. isLessThan
function isLessThan(lessInput1, lessInput2){
    return parseFloat(lessInput1) < parseFloat(lessInput2);
}


// 3. isEqualNumber
function isEqualNumber(equalNumInput1, equalNumInput2){
    return parseFloat(equalNumInput1) === parseFloat(equalNumInput2);
}


//  4. isEqual
function isEqual(input1, input2) {
    return input1 === input2
}


// 5. isNot
function isNot(notInput) {
    if (notInput === null){
        return false
    } else {
        return !notInput;
    }
}


// 6. calcAbs
function calcAbs(absInput){
    if (typeof absInput == 'string'){
        return 0
    } else {
        return Math.abs(absInput);
    }
}


// 7. calcCube
function calcCube(cubeInput) {
    if (typeof cubeInput == 'string') {
        return 0
    } else {
        return cubeInput * cubeInput * cubeInput;
    }
}


// 8. isTypeMatch
function isTypeMatch(typeMatchInput1, typeMatchInput2){
    return typeof typeMatchInput1 === typeof typeMatchInput2;
}


// 9. fundLongestString
function findLongestString(longestInput1, longestInput2){
    if (typeof longestInput1 === 'string' && typeof longestInput2 !== 'string') {
        return longestInput1;
    } else if(typeof longestInput2 === 'string' && typeof longestInput1 !== 'string') {
        return longestInput2;
    } else if(typeof longestInput2 !== 'string' && typeof longestInput1 !== 'string') {
        return "";
    } else if (longestInput1.length > longestInput2.length) {
        return longestInput1;
    } else {
        return longestInput2;
    }
}


// 10. isFactor
function isFactor (input1, input2) {
    if (typeof input1 !== 'number' || typeof input2 !== 'number' || input1 === 0) { // no need to check for null (input1 === null || input2 === null) because 0 is one of the falsy value that represents null in javascript
        return false
    } else {
        return input2 % input1 === 0;
    }
}