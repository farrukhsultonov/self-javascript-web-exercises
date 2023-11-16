const newContent = document.querySelector("#newContent")

// creating an element
// To create elements in JavaScript, use document.createElement(<element tag name>).
// Set content and attributes separately.
const myNewP = document.createElement("p");
myNewP.innerText = "I'm a new paragraph!";
myNewP.id = "myNewP";
myNewP.classList.add("fs-2", "fw-bold", "text-center");
console.log(myNewP);

// Adding Elements to the Page:
//
// Use appendChild() to add an element to the DOM.
newContent.appendChild(myNewP);


//  Removing Elements:
// Use removeChild() to remove an element from the DOM.
const myOtherP = document.createElement("p");
myOtherP.innerText = "I'm a paragraph too!";
myOtherP.classList.add("text-center");
document.querySelector("#newContent").appendChild(myOtherP);

// document.querySelector("#newContent").removeChild(myOtherP)

const thatOtherP = document.querySelector("#newContent").removeChild(myOtherP);
document.querySelector("#newContent").appendChild(thatOtherP);


// Alternatively, use remove() for simpler removal:
const sweetP = document.createElement("h2");
sweetP.innerText = "h2 in the game";
sweetP.classList.add("text-center");
document.querySelector("#newContent").appendChild(sweetP)

sweetP.remove()

// Replacing one Element with another element

// replace myNewP with myAwesomeP
const myAwesomeP = document.createElement("p");
myAwesomeP.innerText = "I'm an EVEN BETTER paragraph";
myAwesomeP.classList.add("fs-1", "text-center");
newContent.replaceChild(myAwesomeP, myNewP);


// adding elements at specific places in the DOM
const three = document.querySelector("#three");

const twoAndAHalf = document.createElement("li");
twoAndAHalf.innerText = "Two and a half";
three.before(twoAndAHalf);

// Avoiding innerHTML +=:
// It is not a best practice for adding elements due to potential issues.
// Rewriting innerHTML can lead to loss of event handlers.
// Prefer creating elements and using DOM methods for manipulation.



// Use preventDefault() to stop the default behavior of form submission.
// get references to the to-do input and its parent form
const toDoInput = document.querySelector("#to-do");
const toDoForm = toDoInput.parentElement;

// declare a callback to handle the user input
const handleUserInput = (event) => {
    event.preventDefault()
    console.log(toDoInput.value);
    // toDoInput.value = '';
}

// output user input to the DOM
toDoForm.addEventListener('submit', handleUserInput);


// adding event listeners to dynamically created elements
// obtain reference to the button that will trigger div creation
const createButton = document.querySelector("#create-a-div");
// function to create new divs
// within each div there is a button with the class `event-trigger`
const createDiv = () => {
    const newDiv = document.createElement("div");
    newDiv.classList.add("dynamic-div");
    newDiv.innerHTML = "<p>I'm a new div!</p>" +
        "<button class='event-trigger'>Click Me!</button>";
    document.querySelector("#new-div-section").appendChild(newDiv);

    // newDiv.lastChild.addEventListener('click', () => console.log('Clicked!'));
}
// add the click handler to the button
createButton.addEventListener('click', createDiv);

const newDivSection = document.querySelector("#new-div-section");
//  The event object (e) is passed to the function, representing information about the click event.
// The e is just a helper that gives you information about the click event, like what exactly was clicked.
// The (e) part is just saying, "I want to use the event object and call it e."
newDivSection.addEventListener('click', (e)=>{
    if (e.target.classList.contains('event-trigger')){
        console.log('Clicked!');
    }
});