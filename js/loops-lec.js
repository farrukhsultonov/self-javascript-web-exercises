//--------------------------------------While loop example-------------------------------------
// let i = 0;

// while(i < 10){
//     console.log(i);
//     i++;
// }
// console.log("broken out of while loop");


// -------------------------------------do While example-----------------------------------------
// do{
//     console.log(i);
//     i++;
// }while(i < 10)
// console.log("broken out of do-while")



//stuck in loop(will cause you headache)
// do{
//     console.log(i);
//     i++;
//     console.log(i);
// }while(i > -1)

// to exit out of an infinite loop
// command + option + esc
// or
// force quit the application


// -------------------------------------mini exercise:------------------------------------------
// Create a variable called num that is equal to 0.
// Write a while loop that increments "num" by 5 so long as num is less than 100.
// Do the same thing with a do-while.


// let num = 0;
// while(num < 100){
//     console.log(num);
//     num += 5;
// }

// do{
//     console.log(num);
//     num += 5;
// }while(num < 100)

//---------------------------------------for loop ex-----------------------------------------

// for(let i = 0; i < 10; i++){
//     console.log(i);
// }
// console.log("broken out of for loop")

// for(let num = 0; num < 100; num += 5){
//     console.log(num);
// }

// let hello = "hello";
// for(let i = 0; i < hello.length; i++){
    // console.log(hello.charAt(i))
    // console.log(hello[i])
// }



//  It doesn't continue to negative numbers
//  because the loop is designed to run as long as i is less than 10,
//  and it stops once i becomes 10 or greater.

// for (let i = 0, j = 9; i < 10; i++, j--) {
//     console.log('for loop iteration #' + i + ', j = ' + j);
// }


//----------------------breaks and continues--------------------------------

// for(let i = 0; i < 100; i += 5){
//     console.log(i);
//     break;
//     console.log("snippet never reached")
// }

// for(let i = 0; i < 100; i += 5){
//     console.log(i);
//     if(i === 50){
//         break;
//     }
// }
// console.log("I broke out my loop!");


// *********** Continue ********************

// for (let i = 1; i <= 5; i++) {
//     if(i === 3) {
//         continue;
//     }
//     console.log(i);
// }


// for (let i = 1; i < 100; i++) {
//
//     if (i % 2 !== 0) {
//         // number isn't even
//         // odd numbers aren't as cool
//         // skip the rest of the loop and continue with the next iteration
//         continue;
//     }
//
//     console.log('Here is a lovely even number: ' + i);
// }