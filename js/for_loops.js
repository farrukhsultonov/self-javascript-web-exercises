// 2.
function showMultiplicationTable(num){
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`)
    }
}
showMultiplicationTable(7);


//3. Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. For example:
for(let i = 0; i < 10; i++){
    let random = Math.floor(Math.random() * ((200-20)+1) + 20);
    if(random % 2 === 0){
        console.log(`${random} is even`);
    }else{
        console.log(random + " is odd")
    }
}

// 4.
// for(let i = 1; i <= 9; i++){
//     console.log(i.toString().repeat(i));
// }

// for (let i = 1; i < 10; i++){
//     let num = ""
//     for(let j = 0; j < i; j++){
//         num += i;
//     }
//     console.log(num);
// }



// 5.
//     for(let i = 100; i >= 5; i -= 5){
//         console.log(i)
//     }