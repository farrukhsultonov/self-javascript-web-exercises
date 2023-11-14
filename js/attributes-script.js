'use strict'

setTimeout(function () {
    document.querySelector("#profile-pic").src = "../images/head.jpg"
}, 2000)

setTimeout(function () {
    document.querySelector("#profile-name").innerHTML = "Codey the Duck"
}, 4000)

setTimeout(function () {
    document.querySelector("#profile-desc").classList.add("profile-desc-font")
}, 6000)

setInterval(function () {
    document.querySelector("#profile-card").classList.toggle("toggle-color")
}, 2000)

//<<----Bonus---->>
// function changesJS() {
//     setTimeout(function () {
//         document.querySelector("#profile-pic").src = "../images/head.jpg";
//     }, 2000);
//
//
//     setTimeout(function () {
//         document.querySelector("#profile-name").innerHTML = "Codey the Duck"
//     }, 4000)
//
//     setTimeout(function () {
//         document.querySelector("#profile-desc").classList.add("profile-desc-font")
//     }, 6000)
//
//     setInterval(function () {
//         const colors = ["red", "orange", "yellow", "green", "blue", "violet"]
//         let random = Math.floor(Math.random() * (colors.length - 1) + 1);
//         document.querySelector("#profile-card").style.backgroundColor = colors[random];
//     }, 2000)
// }
// changesJS();