let perplexed; // perplexed is undefined (no value is assigned)
let perplexed2 = perplexed + 2;
console.log(perplexed2);

let price = 2.7;
let priceFixed = parseFloat(price).toFixed(2);
console.log(priceFixed);


// ********** question 2 *******************//

let sample = "Hello Codeup";

// Use .length to find the number of characters in the string.
let sampleLength = sample.length;
console.log(`sample length is: ${sampleLength}`);
// Try to make the sample string all upper or all lower case.
let sampleUpper = sample.toUpperCase();
console.log(`sample as uppercase: ${sampleUpper}`);
// Update (Re-assign) the variable sample via concatenation so that it contains "Hello Codeup Students".
sample += " Students";
console.log(`Reassigned sample is: ${sample}`);
// Replace "Students" with "Class".
sample = sample.replace("Students", "Class");
console.log(`sample with replace method: ${sample}`);

// Find the index of "c" using .indexOf(). What do you observe?
let indexOfLowercaseC = sample.indexOf("c");   // we get -1 because lowercase c doesn't exist.
console.log(`Lowercase "c" indexOf => ${indexOfLowercaseC}`);

// Find the index of "C" using .indexOf().
let indexOfUppercaseC = sample.indexOf("C");
console.log(`Uppercase 'C' indexOf => ${indexOfUppercaseC}`)

// Retrieve a substring that contains only the word "Codeup" by using indexOf() and substring().
let codeupLength = "Codeup".length;
// console.log(codeupLength)
let codeupEnd = indexOfUppercaseC + codeupLength;
console.log(codeupEnd)
let codeupWord = sample.substring(indexOfUppercaseC, codeupEnd);
console.log(codeupWord)

// another way to do it.
let substr = sample.substring(6, 12);
console.log(substr)


// ********** question 3 *******************//


// movies
const littleMermaidDays = 3;
const brotherBearDays = 5;
const herculesDays = 1;

const pricePerDay = 3;

const littleMermaidCost = littleMermaidDays * pricePerDay;
const brotherBearCost = brotherBearDays * pricePerDay;
const herculesCost = herculesDays * pricePerDay;

let totalCost = littleMermaidCost + brotherBearCost + herculesCost;
// totalCost = `$${totalCost.toFixed(2)}`; // we can do it this way
totalCost = totalCost.toLocaleString("en-US", { style: "currency", currency: "USD" });
console.log(`The total cost is: ${totalCost}`);


// 3 companies
const googlePerHour = 400;
const facebookPerHour = 350;
const amazonPerHour = 380;

const googleHoursWorked = 6;
const facebookHoursWorked = 10;
const amazonHoursWorked = 4;

let googlePay = googlePerHour * googleHoursWorked;
let facebookPay = facebookPerHour * facebookHoursWorked;
let amazonPay = amazonPerHour * amazonHoursWorked;

let totalPay = googlePay + facebookPay + amazonPay;
console.log("Total pay for this week is $" + totalPay.toFixed(2))

console.log(`The pay for this week is $ ${(googlePay + facebookPay+ amazonPay).toFixed(2)}`)

// ignore
// totalPay = totalPay.toLocaleString("en-US", { style: "currency", currency: "USD" });
// console.log(`The total pay was: ${totalPay}`);


// student enrolled

// Define variables to represent the conditions
const isClassFull = false; // Assume the class is not full
const doesClassConflict = false; // Assume there's no schedule conflict
const studentEnrollmentAllowed = !isClassFull && !doesClassConflict;

// Check if the student can be enrolled in the class
if (studentEnrollmentAllowed) {
    console.log("Student can be enrolled in the class.");
} else {
    console.log("Student cannot be enrolled in the class.");
}



// product offer
// Define variables to represent the conditions
const isPremiumMember = true; // Assume the person is a premium member
const numberOfItemsPurchased = 3; // Assume the person bought 3 items
const isOfferExpired = false; // Assume the offer has not expired

// Calculate whether the product offer can be applied
const isProductOfferApplicable = isPremiumMember || (numberOfItemsPurchased > 2 && !isOfferExpired);

// Use console.log to display the result
if (isProductOfferApplicable) {
    console.log("Product offer can be applied.");
} else {
    console.log("Product offer cannot be applied.");
}


// // ********** question 4 *******************//

const username = "Codeup";
const password = "notastrongpassword";

// the password must be at least 5 characters
const is5Chars = password.length >= 5;
// the password must not include the username
const passNotContainsUsername = !password.toLowerCase().includes(username.toLowerCase());
// the username must be no more than 20 characters
const userLengthValid = username.length <= 20;
//  neither the username or password can start or end with whitespace
const usernameNoWhitespace = username.trim() === username;
const passNoWhitespace = password.trim() === password;

const validPassword = is5Chars && passNotContainsUsername && passNoWhitespace;
console.log(`The password is valid: ${validPassword}`);
const validUsername = userLengthValid && usernameNoWhitespace;
console.log(`The username is valid: ${validUsername}`);