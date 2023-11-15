/**
 * Write your solutions here
 */


// 1. When the box with the class of dbl-click-box is double-clicked, an alert should pop up with the text 'BOX DOUBLE-CLICKED!'

    // Get the double-click-box element
let dblClickBox = document.querySelector(".dbl-click-box")

// Add a double-click event listener
dblClickBox.addEventListener('dblclick', function () {
    alert('BOX DOUBLE-CLICKED!');
});

// 2. Clicking on the button with an id of dark-mode-btn toggles dark mode on and off. HINT: changes should be applied to the body of the HTML.

// Get the dark mode button element
let darkModeBtn = document.getElementById('dark-mode-btn');

// Add a click event listener
darkModeBtn.addEventListener('click', function () {
    // Toggle the 'dark-mode' class on the body element
    document.body.classList.toggle('dark-mode');
});

// 3. When the cursor hovers over the span with the id of uppercase (<span id="uppercase">), take the text of that span and display it, in lowercase, in the span with the id of lowercase (<span id="lowercase">).

// Get the uppercase and lowercase span elements
let uppercaseSpan = document.getElementById('uppercase');
let lowercaseSpan = document.getElementById('lowercase');

// Add a mouseover event listener to the uppercase span
uppercaseSpan.addEventListener('mouseover', function () {
    // Convert the text to lowercase and update the lowercase span
    lowercaseSpan.textContent = uppercaseSpan.textContent.toLowerCase();
});

// Add a mouseout event listener to the uppercase span
uppercaseSpan.addEventListener('mouseout', function () {
    // Reset the text content of the lowercase span
    lowercaseSpan.textContent = '';
});

// 4. The span with an id of counter should increment by one every second.

// Get the counter span element
let counterSpan = document.getElementById('counter');

// Initialize the counter
let seconds = 0;

// Set up an interval to update the counter every second
let intervalId = setInterval(function () {
    // Increment the counter
    seconds++;

    // Update the counter span with the new value
    counterSpan.textContent = seconds;
}, 1000); // 1000 milliseconds = 1 second


// 5. When the user clicks on the button (<button id="list-chars-btn">), take any text the user has typed in the input field (<input id="characters">), and output each individual character as a separate list item within the unordered list (<ul id="characters-list">). Clicking the button multiple times should not append additional list items.

// Get the button and characters input elements
let listCharsBtn = document.getElementById('list-chars-btn');
let charactersInput = document.getElementById('characters');

// Get the characters list element
let charactersList = document.getElementById('characters-list');

// Add a click event listener to the button
listCharsBtn.addEventListener('click', function (event) {
    event.preventDefault()
    // Clear existing list items
    charactersList.innerHTML = '';

    // Get the text from the input field
    let inputText = charactersInput.value;

    // Output each character as a separate list item
    for (let i = 0; i < inputText.length; i++) {
        let listItem = document.createElement('li');
        listItem.textContent = inputText[i];
        charactersList.appendChild(listItem);
    }
});

// 6. When the user clicks on the button (<button id="clean-animal-list-btn">), the text of each list item that has a class (<li class="animal-list-item">) should be concatenated to the list item that immediately follows it.


const button = document.querySelector("#clean-animal-list-btn");
button.addEventListener("click", concatenateListItems);

function concatenateListItems() {
    const listItems = document.querySelectorAll(".animal-list-item");
    for (let i = 0; i < listItems.length; i++) {
        const nextListItem = listItems[i].nextElementSibling;
        if (nextListItem) {
            nextListItem.textContent = nextListItem.textContent + " " + listItems[i].textContent;
            listItems[i].remove();
        }
    }
}


// 7. When hovering over the divs within the div with a class of hidden-letters, a letter will become visible in a span within the div being hovered over.

document.querySelectorAll('.hidden-letters div').forEach(function (letterDiv) {
    letterDiv.addEventListener('mouseenter', function () {
        let letterSpan = letterDiv.querySelector('span');
        if (letterSpan) {
            letterSpan.style.visibility = 'visible';
        }
    });

    letterDiv.addEventListener('mouseleave', function () {
        let letterSpan = letterDiv.querySelector('span');
        if (letterSpan) {
            letterSpan.style.visibility = 'hidden';
        }
    });
});



