// alert("Welcome to my Website!");

// let userResponse = prompt("What's your favorite color?");
// alert("Great, " + userResponse + " is my favorite color too!");

// let mermaid = Number(prompt("How many days did you rent The Little Mermaid?"));
// let brotherBear = Number(prompt("How many days did you rent Brother Bear?"));
// let hercules = Number(prompt("How many days did you rent Hercules?"));
//
// let pricePerDay = 3;
//
// let totalPrice = ((mermaid + brotherBear + hercules) * 3);
// alert(totalPrice)



// // Google/Amazon/Facebook pay
// let googlePay = prompt("How much does Google pay you per hour?");
// let amazonPay = prompt("How much does Amazon pay you per hour?");
// let facebookPay = prompt("How much does Facebook pay you per hour?");
//
// //Google/Amazon/Facebook hours
// let googleHours = prompt("How many hours did you work at Google?");
// let amazonHours = prompt("How many hours did you work at Amazon?");
// let facebookHours = prompt("How many hours did you work at Facebook?");
//
// let payment = (googlePay * googleHours) + (amazonPay * amazonHours) + (facebookHours * facebookPay);
// alert("Your payment is: " + payment);



// Class Schedule
// let isFull = confirm("Is the class full?");
// let hasConflict = confirm("Do you have a conflict with your schedule?")
// alert(!isFull && !hasConflict);

// Discount Offer
let itemsBought = prompt("How many items did you buy?");
let offer = confirm("Has the offer expired?");
let isPremium = confirm("Are you a premium member?");

alert(((itemsBought) > 2 || isPremium) && !offer);