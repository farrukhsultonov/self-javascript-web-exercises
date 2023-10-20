// let num = 1;
// while(num <= 65536){
//     num *= 2;
//     console.log(num);
// }


// let initial = 100;
// while(initial > 0) {
//     console.log(initial)
//     initial -= 5;
//
// }


// Declare a variable named (num) with a value of 100. Using a while loop decrement num by 5 till you reach 0 and console.log("even") for every even number.


let num = 100;

while (num >= 0) {
    if (num % 2 === 0) {
        console.log(num + " (even)");
    } else {
        console.log(num);
    }
    num -= 5;
}






// do while loop problem
// 1.  generate a random number between 50 and 100 representing the amount of cones
// 2.  sell cones inside loop
// 3.  inside loop generate number between 1 and 5(this is the amount of cones being bought)
// 4.  in a do while console.log the amount of cones sold to each person

// This is how you get a random number between 50 and 100
// let allCones = Math.floor(Math.random() * 50) + 50;
// do {
//     // This expression will generate a random number between 1 and 5
//     let soldCones = Math.floor(Math.random() * 5) + 1;
//     // console.log(allCones)
//     if(soldCones <= allCones){
//         console.log(`${soldCones} cones sold...`)
//         allCones -= soldCones
//     }else if(soldCones > allCones){
//         console.log(`Cannot sell you ${soldCones} cones I only have ${allCones}...`)
//     }
//     // console.log(allCones)
// }while(allCones !== 0);
// console.log("Yay! I sold them all!")