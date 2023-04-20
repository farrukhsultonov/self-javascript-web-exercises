// function showMultiplicationTable(num){
//         for(let i = 1; i <= 10; i++){
//             console.log(num + " x " + i + " = " + (num * i))
//         }
//     }
// showMultiplicationTable(7);

function showMultiplicationTable(x){
    for(let y = 1; y<10; y++)
        return(x + 'x' + y + '=' + (x*y))
}
console.log(showMultiplicationTable(7));


//3.
for(let i = 0; i < 10; i++){
    let random = Math.floor(Math.random() * ((200-20)+1) + 20);
    if(random % 2 === 0){
        console.log(`${random} is even`);
    }else{
        console.log(random + " is odd")
    }
}

//4.
// for(let i = 1; i <= 9; i++){
//     console.log(i.toString().repeat(i));
// }
//
// for (let i = 1; i < 10; i++){
//     let num = ""
//     for(let j = 0; j < i; j++){
//         num += i;
//     }
//     console.log(num);
// }



//5.
//     for(let i = 100; i >= 5; i -= 5){
//         console.log(i)
//     }