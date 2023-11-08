// Technical interview questions
//
// ***************************** HTML technical questions ****************************************
// 1. What is the role of the head tag in an HTML document?
// Ans: head tag contains machine-readable metadata about the page and typical sub elements including the title, meta tags, and stylesheet.
//
// -----------------------------------------------------------------------------
//
// 2. What is an element in HTML?
// Ans: An element in HTML is a set of tags that define a specific part of a web page. It consists of a start tag, content, and an end tag.
//
//
// ***************************** CSS technical questions ****************************************
//
// 1. Can you describe the CSS box model?
// Ans: The CSS Box model is used for the purpose of affecting the layout of a page through properties that wrap around the content of each element including its margin, border, and padding.
//
//
// ***************************** JavaScript technical questions ****************************************
//
// 1. What are the basic data types of JavaScript?
// Ans: There are total 7 basic data-types supported by JavaScript
// Boolean - represents true and false
// Null - represents empty, nothing and unknowing type
// Number - represents both integer and both floating- point values
// Objects - user for collecting data or more complex entities
// String - represents single character, multi character, and alphanumeric character
// Symbol - used for unique identifier for objects
// Undefined - represents value not assigned. If variable only declared and not assigned in JS it represents undefined data types
//
// -----------------------------------------------------------------------------
//
// 2. What is the significance of the "use strict" directive in JavaScript?

// "use strict" enforces a stricter set of rules for JavaScript. It catches common coding mistakes, disables features that are error-prone, and helps improve code quality and maintainability.
//
// -----------------------------------------------------------------------------
//
// 3. What is the difference between "let" and "const"?

// The main difference between "let" and "const" is that "let" allows the variable to be reassigned, while "const" creates a read-only reference to a value that cannot be reassigned.
//
// -----------------------------------------------------------------------------
//
// 4. "What is the difference between "==" and "===" in JavaScript?"
//
// "== (called loose equal) is used to compare two variables regardless of the variable's data type.
// === (called strict equal) is used to compare two variables, but this will check strict type, which means it will check the data type and compare two values."

// “==” checks only for equality in value, whereas “===” is a stricter equality test and returns false if either the value or the type of the two variables are different.
//
// -----------------------------------------------------------------------------
//
// 5. How do you check the data type of a variable in JavaScript?
//
// Answer: You can use the 'typeof' operator. For example: 'typeof variableName'
//
// -----------------------------------------------------------------------------
//
// 6. What is NaN property in JavaScript?
// NaN property represents the “Not-a-Number” value. It indicates a value that is not a legal number.
// typeof of NaN will return a Number.
// To check if a value is NaN, we use the isNaN() function,
//
// isNaN("Hello") // Returns true
// isNaN(345) // Returns false
//
// -----------------------------------------------------------------------------
//
// 7. What is the difference between a for and while loop?
//
// Ans: The main difference between for and while loop is that for loops is used when the number of iteration is knowm
// While loop iterates until statement is wrong
//
// -------------------------------------------------------------------------
//
// 8. Explain the purpose of the try...catch statement in JavaScript and how it works.
//
// Answer: The try...catch statement is used to handle exceptions (runtime errors) in JavaScript. Code inside the try block is executed, and if an error occurs, the code in the catch block is executed to handle the error.
//
// -----------------------------------------------------------------------------
//
// 9. What is the difference between a function declaration and a function expression in JavaScript?
// Answer:
// * 		A function declaration is defined with the function keyword and is hoisted, meaning it can be used before its declaration in the code.
// * 		A function expression is created by assigning a function to a variable and is not hoisted.
//
// -----------------------------------------------------------------------------
//
// 10. What do you mean by BOM?
// Browser Object Model is known as BOM. It allows users to interact with the browser. A browser's initial object is a window. As a result, you may call all of the window's functions directly or by referencing the window. The document, history, screen, navigator, location, and other attributes are available in the window object.
//
// -----------------------------------------------------------------------------
//
// 11 .What is the scope in JavaScript, and how does it affect variable accessibility?
//
// *********************************************************************************************************************
//
//
// 1. Write a loop that prints every number divisible by 3 from 1-200
// for(let i = 1; i < 200; i++) {
//     if(i % 3 === 0) {
//         console.log(i)
//     }
// }
//
// *********************************************************************************************************************
//
//     2. FizzBuzz- Task” Write a program that prints the numbers form 1 to 100. But for multiples of three , print “Fizz” instead of the number, and for the multiples of five, print “Buzz”. For numbers that are multiples of both three and five, print “FizzBuzz”.
//     for(let i = 1; i <= 100; i++) {
//         if((i % 5 === 0) && (i % 3 === 0)) {
//             console.log("FizzBuzz");
//         } else if(i % 5 === 0) {
//             console.log("Buzz");
//         } else if (i % 3 === 0) {
//             console.log("Fizz");
//         } else {
//             console.log(i);
//         }
//     }
//
// *********************************************************************************************************************
//
// Create a function named “largestNum” that takes in three numbers as input and returns the largest of the three
//
// Example Output:
//     findLargestNumber(5, 10, 15) // returns 15
// findLargestNumber(1, 2, 3) // returns 3


// Write a function that takes three numbers as input and returns the largest of the three.
// function findLargestNumber(num1, num2, num3) {
//     if (num1 >= num2 && num1 >= num3) {
//         return num1;
//     } else if (num2 >= num1 && num2 >= num3) {
//         return num2;
//     } else {
//         return num3;
//     }
// }

// console.log(findLargestNumber(15, 10, 5))
//
//
// let x = 5;
// let y = 10;
// let z = 15;
// console.log(Math.max(x, y, z) + " is the largest number")

// *********************************************************************************************************************
//
// Write a function that reverses a given string. For example. if the input is "hello", the function should return a "olleh"

// function reverseString(inputString) {
//     // Convert the string to an array of characters
//     const stringArray = inputString.split('');
//
//     // Reverse the array
//     const reversedArray = stringArray.reverse();
//
//     // Convert the reversed array back to a string
//     const reversedString = reversedArray.join('');
//
//     return reversedString;
// }
//
// const input = "hello";
// const reversed = reverseString(input);
// console.log(reversed);


// // ************ Same solution using for loop ************************
// function reverseString(inputString) {
//     let reversedString = '';
//
//     for (let i = inputString.length - 1; i >= 0; i--) {
//         reversedString += inputString[i];
//     }
//
//     return reversedString;
// }
//
// const input = "hello";
// const reversed = reverseString(input);
// console.log(reversed); // Output: "olleh"

// *********************************************************************************************************************

// Objective: Create a function that takes in an array and returns an array of the names of people who know JavaScript.

// Data Structure/Example Input:
// let developers = [
//     {
//         name: "Jonathan",
//         languages: {
//             frontend: ["HTML", "JavaScript", "CSS"],
//             backend: ["Java"]
//         }
//     },
//     {
//         name: "Bonnie",
//         languages: {
//             frontend: ["JavaScript"],
//             backend: []
//         }
//     },
//     {
//         name: "Raj",
//         languages: {
//             frontend: [],
//             backend: ["C#", "Java", "Python"]
//         }
//     },
//     {
//         name: "Carmen",
//         languages: {
//             frontend: ["JavaScript", "HTML", "CSS", "React"],
//             backend: ["C#", "Java", "Python", "TypeScript"]
//         }
//     },
// ]



// function knowsJavaScript(developers) {
//     let javaScriptDevelopers = []
//     for (let i = 0; i < developers.length; i++) {
//         if (developers[i].languages.frontend.includes("JavaScript")) {
//             javaScriptDevelopers.push(developers[i].name)
//         }
//     }
//     return javaScriptDevelopers
// }


// Example input
let developers = [
    {
        name: "Jonathan",
        languages: {
            frontend: ["HTML", "JavaScript", "CSS"],
            backend: ["Java"],
        },
    },
    {
        name: "Bonnie",
        languages: {
            frontend: ["JavaScript"],
            backend: [],
        },
    },
    {
        name: "Raj",
        languages: {
            frontend: [],
            backend: ["C#", "Java", "Python"],
        },
    },
    {
        name: "Carmen",
        languages: {
            frontend: ["JavaScript", "HTML", "CSS", "React"],
            backend: ["C#", "Java", "Python", "TypeScript"],
        },
    },
];

// Call the function and log the result
// const javascriptDevelopers = knowsJavaScript(developers);
// console.log(javascriptDevelopers);


// ************ Same solution using arrow function ************************
const knowsJavaScript = (arr) => {
    let javaScriptDevs = [];
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].languages.frontend.length; j++) {
            if(arr[i].languages.frontend[j] === "JavaScript") {
                javaScriptDevs.push(arr[i].name);
            }
        }
    }
    return javaScriptDevs;
}

console.log(knowsJavaScript(developers))