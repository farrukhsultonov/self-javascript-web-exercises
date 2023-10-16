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
//     // console.log(hello.charAt(i))
//     // console.log(hello[i])
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

for(let i = 0; i < 50; i++){
    if(i % 2 === 0){
        console.log(i + " is an even number")
        continue;
    }

    console.log(i);

}