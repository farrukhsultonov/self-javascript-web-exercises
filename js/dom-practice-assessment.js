// You should not modify the HTML attributes or structure, but you can include jQuery in the project to help you solve the problems below. A video documenting the expected output of each problem can be viewed here.

/**
 * Write your solutions here
 */

// 1. When the box with the id of dbl-click-box is double-clicked, an alert should pop up with the text 'BOX DOUBLE-CLICKED!'

$('.dbl-click-box').on('dblclick', function () {
    alert('BOX DOUBLE-CLICKED!')
})

// 2. // Clicking on the button with an id of dark-mode-btn toggles dark mode on and off. HINT: changes should be applied to the body of the HTML.

$('#dark-mode-btn').click(function() {
    $('body').toggleClass('dark-mode');
})

// 3. When the cursor hovers over the span with the id of uppercase (<span id="uppercase">), take the text of that span and display it, in lowercase, in the span with the id of lowercase (<span id="lowercase">).
$('#uppercase').hover(function() {
    let uppercaseText = $(this).text();
    let lowercaseText = uppercaseText.toLowerCase()
    $('#lowercase').text(lowercaseText)
})

// 4. The span with an id of counter should increment by one every second.
let counter = 0;
setInterval(function() {
    counter++;
    document.getElementById("counter").innerText = counter;
},1000)

// 5. When the user clicks on the button (<button id="list-chars-btn">), take any text the user has typed in the input field (<input id="characters">), and output each individual character as a separate list item within the unordered list (<ul id="characters-list">). Clicking the button multiple times should not append additional list items.
$('#list-chars-btn').click(function(event) {
    event.preventDefault();
    let inputVal = $('#characters').val();
    $('#characters-list').empty(); // clear any existing list items
    for (let i = 0; i < inputVal.length; i++) {
        let char = inputVal.charAt(i);
        let listItem = $('<li>').text(char);
        $('#characters-list').append(listItem);
    }
});

// 6. When the user clicks on the button (<button id="clean-animal-list-btn">), the text of each list item that has a class (<li class="animal-list-item">) should be concatenated to the list item that immediately follows it.
// Add click event listener to the "Clean up animal list" button




// 7. When hovering over the divs within the div with a class of hidden-letters, a letter will become visible in a span within the div being hovered over.
$('.hidden-letters div').hover(function() {
    $(this).children('span').css('visibility', 'visible');
}, function() {
    $(this).children('span').css('visibility', 'hidden');
});