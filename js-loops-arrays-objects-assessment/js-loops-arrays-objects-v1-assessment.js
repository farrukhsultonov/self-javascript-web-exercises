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
function remove9s(numbers) {
    const resultArray = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] !== 9) {
            resultArray.push(numbers[i]);
        }
    }
    return resultArray;
}

// ********* another solution to number 4 ***************
// function remove9s(num){
//     let cleanArray = [];
//     num.forEach(function(el){
//         if(el !== 9){
//             cleanArray.push(el);
//         }
//     });
//     return cleanArray;
// }


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

    for (let i = 0; i < num.length; i++) {
        totalSales += num[i].sales;
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

    for (let i = 0; i < str.length; i++) {
        //check if any of the characters in string are a vowel
        if (str.charAt(i) === 'a'|| str.charAt(i) === 'e' ||
            str.charAt(i) === 'i'|| str.charAt(i) === 'o' ||
            str.charAt(i) ==='u') {
            sum++
        }
    }
    return sum;
}


// 10 analyzeWord
function analyzeWord(string){
    return {
        word: string,
        numberOfLetters: string.length,
        numberOfVowels: countVowels(string)
    }
}


// 11. capitalizeName
function capitalizeName(string){
    //turn the one string into two separate names
    let stringArr = string.split(' ');
    //capitalize the first Letter of each word in array and concatenate the ending substring
    for (let i = 0; i < stringArr.length; i++) {
        // The substring() method extracts characters
        stringArr[i] = stringArr[i][0].toUpperCase() + stringArr[i].substring(1);
        //turn the array back into a string
    } return stringArr.join(' ')
}