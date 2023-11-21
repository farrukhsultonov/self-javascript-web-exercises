// ===============     Write your solutions here   ================== //

// ------------------ 1 -----------------------------------
let heading = document.querySelector("#change-heading");
let h1Content = document.querySelector("#main-heading");
heading.addEventListener("click", (e) => {
    h1Content.innerHTML = "I control the DOM"
});

// ------------------ 2 -----------------------------------
let btnGetInput = document.querySelector("#getInput");
let textInput = document.querySelector(`#userInput`);
let showInput = document.querySelector("#showInput");
btnGetInput.addEventListener("click", () => {
    showInput.innerText = textInput.value;
});

// ------------------ 3 -----------------------------------
let hotPink = document.querySelector("#changes");
hotPink.addEventListener("mouseenter", () => {
    hotPink.style.color = "hotpink";
})

hotPink.addEventListener("mouseleave", () => {
    hotPink.style.color = "";
})

// ------------------ 4 -----------------------------------
let serifSection = document.querySelector("#serifChanger");

serifSection.addEventListener("mouseenter", () => {
    serifSection.classList.add("sans-serif")
})

serifSection.addEventListener("mouseleave", () => {
    serifSection.classList.remove("sans-serif");
})

// ------------------ 5 -----------------------------------
let newParaBtn = document.querySelector(`#newParagraph`);
let parent = document.querySelector('#moreParagraphs');
newParaBtn.addEventListener('click', () => {
    const pData = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda enim hic illum impedit ipsa iure mollitia nam possimus quae qui? Atque dolores laudantium, minus officiis pariatur quo repellendus soluta ullam.";
    const newP = document.createElement("p");
    newP.innerHTML = pData;
    parent.appendChild(newP)
});

// ------------------ 6 -----------------------------------
let bigSmallSection = document.querySelector("#big-and-small");
bigSmallSection.addEventListener("mouseenter", (e) => {
    bigSmallSection.classList.toggle("go-big");
});

// ------------------ 7 -----------------------------------
setTimeout(() => {
    let mainHeading = document.querySelector("header");
    let newPara = document.createElement("p");
    newPara.innerText = "Document Object Model";
    mainHeading.appendChild(newPara);
}, 3000);

// ------------------ 8 -----------------------------------
let codeupLogo = document.querySelector('#image img');
codeupLogo.addEventListener('mouseenter', (e) => {
    codeupLogo.src = 'img/OfficialCodeupLogo.png';
});

// ------------------ 9 -----------------------------------
// Selects the last button in the first list item of a list
const lastButtonClickMe = document.querySelector('ul:first-child li:last-child button');
// Adds a click event listener to the selected button
lastButtonClickMe.addEventListener('click', (e) => {
    // Selects all h2 elements within section elements
    let h2Elements = document.querySelectorAll('section h2');
// Iterates over each h2 element in the NodeList
    h2Elements.forEach((h2) => {
        // Sets up an interval to toggle the display of each h2 element every 1000 milliseconds (1 second)
        setInterval(() => {
            if (h2.style.display === "none") {
                h2.style.display = "block";
            } else {
                h2.style.display = "none";
            }
        }, 1000);
    });
});

// ------------------ 10 -----------------------------------
const btnClickMes = document.querySelectorAll("ul li button");
const textClickMes = document.querySelectorAll("ul li p");


for (let i = 0; i < btnClickMes.length; i++) {
    btnClickMes[i].addEventListener("click", () => {
        textClickMes[i].innerText = "You changed me!";
    });
}