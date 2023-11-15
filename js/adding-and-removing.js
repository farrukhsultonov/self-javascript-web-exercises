const myNewP = document.createElement("p");
myNewP.innerText = "I'm a new paragraph!";
myNewP.id = "myNewP";
myNewP.classList.add("fs-2", "fw-bold", "text-center");
console.log(myNewP);

document.querySelector("#newContent").appendChild(myNewP);