// console.log("Testing");
//
// // lets say we have some variable age > 16, what if I want to have one outcome if its true or sorry your not old enough "false". that's where we use if condition.;,.l,

let age = 14;
if(age < 16) {
    console.log("Grow up!")
}

if(age >= 16) {
    console.log("Happy driving")
}

//
//
// // IF/ELSE
//
// if(typeof true === 'boolean' && typeof false === 'string') {
//     console.log("The condition evaluates to true!");
// } else {
//     console.log("The condition evaluates to false!");
// }
//
//
let currentDay = prompt("What's the day today?").toLowerCase()

if(currentDay === 'monday' || currentDay === 'tuesday' || currentDay === 'wednesday') {
    console.log("I love " + currentDay)
} else {
    console.log(currentDay + " is not a valid day")
}
//
//
let letsPlay = confirm("Do you want to play")

if (letsPlay) {
    console.log("Great lets play xyz")
} else {
    console.log("Maybe next time")
}



// if/else if/else
const username = "user";
const password = "password";

const userUsername = prompt("Please enter a username");
const userPassword = prompt('Please enter a password');

if(username === userUsername && password === userPassword) {
    alert("You're logged in");
} else if (username !== userUsername && password !== userPassword){
    alert("Incorrect username and password");
} else if(username !== userUsername) {
    alert("Incorrect username")
} else if(password !== userPassword) {
    alert("Incorrect password")
} else {
    alert("unexpected error")
}


// NESTED CONDITIONALS
if(username === userUsername){
    if(password === userPassword) {
        console.log("Logged in");
    }else {
        console.log("Incorrect password");
    }
} else {
    console.log('Invalid username')
}


// TERNARY OPERATOR
// shorthand way of writing if/else statement

// condition is the expression that will be evaluated. Its any expression that returns true or false.
// value1 is the value that will be returned if the confition is true
// value2 is the value that will be returned if the condition is false
// condition ? value1 : value2;


let name = "Bob";
// if name is equal to "Bob", assign the greeting variable "Hello, " + name, if myName is not equal, assign the greeting variable "Hello, stranger!"
let greeting = name ==="Bob" ? "Hello, " + name : "Hello stranger!";
console.log(greeting);

// if/else way
if(name === "Bob") {
    console.log("Hello, " + name)
} else {
    console.log("Hello stranger!")
}


let currentCurrentDay = (currentDay.toLowerCase() === 'monday' || currentDay.toLowerCase() === 'tuesday') ? 'I love ' + currentDay : currentDay + " is not a valid day";
//
console.log(currentCurrentDay);




// let grade = "B";

// switch (grade) {
//     case "A":
//         console.log("Way to go!");
//         break;
//     case "B":
//         console.log("Good Work!");
//         break;
//     case "C":
//         console.log("Not bad!");
//         break;
//     case "D":
//         console.log("You can do better!");
//         break;
//     case "F":
//         console.log("Oh-oh");
//         break;
//     default:
//         console.log(grade + " is not a valid letter grade");
// }


// SWITCH STATEMENTS
let dayOfWeek = "Saturday";

switch (dayOfWeek) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
        console.log("It's a weekday.");
        break;
    case "Saturday":
    case "Sunday":
        console.log("It's a weekend day.");
        break;
    default:
        console.log("Invalid day of the week.");
}




// using function and if/else
function sayHello(name){
    if (name.length < 20){
        return `Hello, ${name}`;
    } else {
        return "That is way too long."
    }
}
alert(sayHello("Lasso"));