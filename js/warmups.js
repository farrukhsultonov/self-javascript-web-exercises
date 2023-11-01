// In your warmUps.js file, create a function named “largestNum” that takes in three numbers as input and returns the largest of the three
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



function printEvenNumbersBetween1And100() {
    for (let i = 2; i <= 100; i += 2) {
        console.log(i);
    }
}

printEvenNumbersBetween1And100();




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