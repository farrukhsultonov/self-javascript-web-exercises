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
