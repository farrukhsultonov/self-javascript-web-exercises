"use strict";

/**
 * Write your solutions here
 *
 */

// 1. isNumber
function isNumber(value) {
    return typeof value === 'number' || !isNaN(parseFloat(value));
}

console.log(isNumber(5)); // true
console.log(isNumber("bob")) // false
console.log(isNumber(true)) // false
console.log(isNumber("7"))

// 2. sumOfStringLengths
// step 1. write function named sumOfgStringLengths
// step 2. set a parameter
// step 3. iterate over the array of strings using the .length and return the sum

function sumOfStringLengths (stringArr) {
//     create a variable called sum that will hold the sum of arrays length
    let sum = 0;
    for(let i = 0; i < stringArr.length; i++) {
        // checks for string data type at every index of the array
        if (typeof stringArr[i] === "string") {
            // re-assings sum to add stringArr length
            sum += stringArr[i].length
        }
    }
    // return the sum of the array
    return sum;
}

console.log(sumOfStringLengths(""));
console.log(sumOfStringLengths(["the", "big", "pizza"])); // outputs 11


// 3. findTheFirstNumber
function findTheFirstNumber(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(isNumber(arr[i])) {
            return i;
        }
    }
    return -1;
}
console.log(findTheFirstNumber(["the", "big", 3, "pizza"])); // outputs 2
console.log(findTheFirstNumber(["the", "big", "pizza"])); // outputs -1
console.log(findTheFirstNumber([1, "x", 2, "y"])); // outputs 0

// 4. makePerson
//  step 1. function makePerson, needs the parameters of firstname, lastname, age
// step 2. return object with firstname, lastname, age
function makePerson(firstname, lastname, age) {
    return {
        firstname: firstname,
        lastname: lastname,
        age: age
    };
}
console.log(makePerson("bob", "smith", 42));
// outputs { firstname: 'bob', lastname: 'smith', age: 42 }

// 5. getFullName
function getFullName(input) {
    return  ` ${input.firstname} ${input.lastname}`
}

console.log(getFullName({
    firstname: "Bob",
    lastname: "smith"
})); // outputs Bob smith

console.log(getFullName({
    firstname: "RAGNAR",
    lastname: "Jonez",
    age: 42
})); // outputs RAGNAR Jonez

// 6. getAverageAge
function getAverageAge(input) {
    let sum = 0;
    for(let i = 0; i < input.length; i++) {
        sum = sum + input[i].age;
    }
    return sum / input.length
}
console.log(getAverageAge([
    {
        age: 20
    },
    {
        firstname: "bob",
        age: 42
    }
])); // outputs 31

// 7. findShortestFullName
// step 1. create function findShortestFullName that accept an array
// step 2.create a variable that will hold shortestFullName
// step 3. Use for loop to get the length of the array
// step 4. another variable for fullName that will store the current full name
// step 5. use an if statement to compare the shortest name
// step 6. return the result shortestFullName

function findShortestFullName(input) {

    // Initialize the shortest full name with the first element in the array
    let shortestFullName = getFullName(input[0]);
    for (let i = 1; i < input.length; i++) { // iterate over the array
        // stores each fullName at the current index
        let fullName = getFullName(input[i])
        if (fullName.length < shortestFullName.length) {
            shortestFullName = fullName; // re-assigning shortestFullName to the next shortest interation of full name
        }
    }
    return shortestFullName;
}

console.log(findShortestFullName([
    {
        firstname: "ragnar",
        lastname: "smith",
        age: 42
    },
    {
        firstname: "tom",
        lastname: "cat"
    },
    {
        firstname: "sue",
        lastname: "xyz"
    }
])); // outputs tom cat


// 8. getLengthOfWords
function getLengthOfWords(inputString) {
//     Split the inputString into words using whitespace as the delimeter
    let words = inputString.split(' ');
//     use the sumOFStringLengths function to calculate the total length of the words
    return sumOfStringLengths(words);
}
console.log(getLengthOfWords("the quick brown fox")); // outputs 16
console.log(getLengthOfWords("1 fish 2 fish red fish blue fish")); // outputs 25