// Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.

let userInput = Number(prompt("Enter a number between 1 and 50?"))

while(true){

    if(userInput % 2 !== 0 && userInput <= 50 && userInput >= 1){ //If the user gives me an odd number AND it is below 50 AND it is above 1 . . let them out of the loop
        break;
    }

    userInput = prompt("Can you give me an odd number between 1 - 50?")

}



// do {
//     var number = prompt("enter a number between 1 and 50");
//     for(var i = 1; i <= 50; i++){
//         if(i % 2 !== 0 && i === Number(number)){
//             console.log(`Yikes! Skipping number: ${i}`)
//         }else if(i % 2 !== 0) {
//             console.log(`Here is an odd number: ${i}`)
//         }
//     }
// }while (isNaN(number) || number % 2 === 0 || number >= 50 || number < 1);