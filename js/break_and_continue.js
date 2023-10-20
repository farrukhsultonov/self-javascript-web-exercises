// Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.

// let userInput = Number(prompt("Enter an odd number between 1 and 50?"))
// //
// while(userInput){
//
//     if(userInput % 2 !== 0 && userInput <= 50 && userInput >= 1){ //If the user gives me an odd number AND it is below 50 AND it is above 1 . . let them out of the loop
//         break;
//     }
//
//     userInput = prompt("Can you give me an odd number between 1 - 50?")
//
// }
//
//
//
// do {
//     let number = prompt("enter a number between 1 and 50");
//     for(let i = 1; i <= 50; i++){
//         if(i % 2 !== 0 && i === Number(number)){
//             console.log(`Yikes! Skipping number: ${i}`)
//         }else if(i % 2 !== 0) {
//             console.log(`Here is an odd number: ${i}`)
//         }
//     }
// }while (isNaN(number) || number % 2 === 0 || number >= 50 || number < 1);



// let userInput = parseInt(prompt("Please enter an odd number between 1 and 50:"));
//
// if (!isNaN(userInput) && userInput >= 1 && userInput <= 50 && userInput % 2 === 1) {
//     for (let i = 1; i <= 50; i++) {
//         if (i === userInput) {
//             console.log(`Yikes: Skipping number: ${userInput}`)
//             continue; // Skip the user's input
//         }
//
//         if (i % 2 === 1) {
//             console.log(`Here is an odd number: ${i}`);
//         }
//     }
// } else {
//     console.log("Invalid input. Please enter a valid odd number between 1 and 50.");
// }




// while (true) {
//     let userNumber = parseInt(prompt("Please enter an odd number between 1 and 50:"));
//
//     if (userNumber >= 1 && userNumber <= 50 && userNumber % 2 !== 0) {
//         console.log(`Number entered: ${userNumber}`);
//         console.log("");
//
//         for (let i = 1; i <= 50; i += 2) {
//             if (i === userNumber) {
//                 console.log(`Yikes, skipping number: ${userNumber}`);
//                 continue;
//             }
//
//             console.log(`Here is an odd number: ${i}`);
//         }
//
//         break;
//     } else {
//         alert("Invalid input. Please enter a valid odd number between 1 and 50.");
//     }
// }




while (true) {
    let userNumber = parseInt(prompt("Please enter an odd number between 1 and 50:"));

    if (userNumber >= 1 && userNumber <= 50 && userNumber % 2 === 1) {
        console.log(`Number entered: ${userNumber}`);

        for (let i = 1; i <= 50; i += 2) {
            if (i === userNumber) {
                console.log(`Yikes, skipping number: ${userNumber}`);
                continue;
            }
            console.log(`Here is an odd number: ${i}`);
        }
        break;
    } else {
        alert("Invalid input. Please enter a valid odd number between 1 and 50.");
    }
}







