// 1. Write a loop that prints every number divisible by 3 from 1-200
for(let i = 1; i < 200; i++) {
    if(i % 3 === 0) {
        console.log(i)
    }
}
//
//     2. FizzBuzz - Task” Write a program that prints the numbers form 1 to 100. But for multiples of three , print “Fizz” instead of the number, and for the multiples of five, print “Buzz”. For numbers that are multiples of both three and five, print “FizzBuzz”.
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