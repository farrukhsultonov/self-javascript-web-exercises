/* DOM Traversal */
/* NODE METHODS & PROPERTIES FOR TRAVERSAL
 * - querySelector: crawl down the DOM tree, returns first match
 * - querySelectorAll: crawl down the DOM tree, returns all matches
 * - closest: crawl up the DOM tree, returns first match
 * - nextElementSibling: crawl sideways the DOM tree, returns following element
 * - previousElementSibling: crawl sideways the DOM tree, returns previous element
 * - parentElement: crawl up the DOM tree, returns parent element
 * - children: crawl down the DOM tree, returns all children elements
 * - firstElementChild: crawl down the DOM tree, returns first child element
 * - lastElementChild: crawl down the DOM tree, returns last child element
 */

const box2 = document.querySelector("#box2");
const parent = box2.parentElement;
console.log(parent)



const stateParksUL = document.querySelector("#state-parks-texas");
stateParksUL.parentElement.style.backgroundColor = "yellow";



const stateParksLIs = document.querySelector("#state-parks-texas").children;
for(let i = 0; i < stateParksLIs.length; i++) {
    stateParksLIs[i].style.fontWeight = "bold";
    stateParksLIs[3].style.backgroundColor = "black"
    stateParksLIs[3].style.color = "white";
    stateParksUL.firstElementChild.style.backgroundColor = 'red';
    stateParksUL.lastElementChild.style.backgroundColor = 'goldenrod';
}

const natlParksHeading = document.querySelector("#national-parks-heading");
natlParksHeading.nextElementSibling.style.backgroundColor = "salmon";