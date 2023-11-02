"use strict";

/**
 * Write your solutions here
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 */


// 1. checkForNumber
function checkForNumber(input) {
    if (typeof input === 'number' && !isNaN(input)) {
        return 'number';
    } else {
        return 'not a number';
    }
}

// 2. evenOrOdd
function evenOrOdd(number) {
    if (number % 2 === 0) {
        return 'even';
    } else {
        return 'odd';
    }
}

// 3. doubleTheElements
function doubleTheElements(inputArray) {
    const doubledArray = [];

    for (let i = 0; i < inputArray.length; i++) {
        doubledArray.push(inputArray[i] * 2);
    }

    return doubledArray;
}

// 4. sumOfElements
function sumOfElements(inputArray) {
    let sum = 0;

    for (let i = 0; i < inputArray.length; i++) {
        sum += inputArray[i];
    }

    return sum;
}

// 5. totalPrice
function totalPrice(products) {
    let total = 0;

    for (let i = 0; i < products.length; i++) {
        if (typeof products[i] === 'object' && 'price' in products[i]) {
            total += products[i].price;
        }
    }

    return total;
}

// 6. findHighestPrice
function findHighestPrice(products) {
    if (products.length === 0) {
        return null; // Return null for an empty array
    }

    let highestPrice = products[0].price;

    for (let i = 1; i < products.length; i++) {
        if (products[i].price > highestPrice) {
            highestPrice = products[i].price;
        }
    }

    return highestPrice;
}

// 7. discountCheck
function discountCheck(transaction) {
    const { customerName, items, clubMember } = transaction;
    const total = totalPrice(items);

    return total >= 150 || clubMember;
}

// 8. newProduct
function newProduct(name, price) {
    return {
        name: name,
        price: price
    };
}

// 9. countWords
function countWords(inputString) {
    let wordCount = 0;

    for (let i = 0; i < inputString.length; i++) {
        if (inputString[i] !== ' ' && (i === 0 || inputString[i - 1] === ' ')) {
            wordCount++;
        }
    }

    return wordCount;
}

// 10.describeNumber
function describeNumber(input) {
    const numberValue = Number(input);

    if (typeof numberValue !== 'number' || isNaN(numberValue) || !Number.isInteger(numberValue)) {
        return "Input is not an integer.";
    }

    return {
        value: numberValue,
        evenOrOdd: numberValue % 2 === 0 ? 'even' : 'odd',
        numberOfDigits: Math.abs(numberValue).toString().length
    };
}

// 11. screamingSnakeCase
function screamingSnakeCase(inputString) {
    let result = '';
    let currentWord = '';

    for (let i = 0; i < inputString.length; i++) {
        const char = inputString[i];
        if (char === ' ') {
            if (currentWord) {
                if (result) {
                    result += '_';
                }
                result += currentWord.toUpperCase();
                currentWord = '';
            }
        } else {
            currentWord += char;
        }
    }

    if (currentWord) {
        if (result) {
            result += '_';
        }
        result += currentWord.toUpperCase();
    }

    return result;
}

// ********************* another solution
// function screamingSnakeCase(inputString) {
//     const words = inputString.split(' ');
//     const screamingSnakeCaseString = words.map(word => word.toUpperCase()).join('_');
//     return screamingSnakeCaseString;
// }