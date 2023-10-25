"use strict";

/**
 * Write your solutions here
 *x: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 */

// 1. isNegative
function isNegative(num){
    return num < 0;
}


// 2. isTen
function isTen(num){
    return num === 10;
}


// 3. double
function double(num){
    return num * 2;
}


// 4. remove9s
function remove9s(num){
    let cleanArray = [];
    num.forEach(function(el){
        if(el !== 9){
            cleanArray.push(el);
        }
    });
    return cleanArray;
}

// ********* another solution to number 4 ***************
function remove9s(numbers) {
    const resultArray = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] !== 9) {
            resultArray.push(numbers[i]);
        }
    }

    return resultArray;
}


// 5. average
function average(num){
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum += num[i];
    }

    return sum / num.length;
}


// 6. countOdds
function countOdds(num){
    let odds = 0;

    for (let i = 0; i < num.length; i++) {
        if (num[i] % 2 !== 0) {
            odds++;
        }
    }

    return odds;
}


// 7. averageSales
function averageSales(num){
    let totalSales = 0;

    for (let i = 0; i < people.length; i++) {
        if (typeof num[i].sales === 'number') {
            totalSales += num[i].sales;
        }
    }

    return totalSales / num.length;
}

// 8. convertNameToObject
function convertNameToObject(fullName){
    let names = fullName.split(" ");
    return {firstName: names[0], lastName: names[1]};
}


// 9. countVowels
function countVowels(str){
    let sum = 0;
    let vowels = ['a', 'e', 'i', 'u', 'o'];

    for (let i = 0; i < str.length; i++) {
        if (vowels.has(str[i])) {
            count++;
        }
    }

    return count;
}


// 10 analyzeWord
function analyzeWord(param){
    return {word: param, numberOfLetters: param.length, numberOfVowels: countVowels(param)};
}


// 11. capitalizeName
function capitalizeName(param){
    let names = param.split(" ");
    let firstCapital = names[0].charAt(0).toUpperCase();
    let secondCapital = names[1].charAt(0).toUpperCase();
    return firstCapital + names[0].split("").slice(1, names[0].length).join("")
        + ' ' +
        secondCapital + names[1].split("").slice(1, names[1].length).join("") ;
}