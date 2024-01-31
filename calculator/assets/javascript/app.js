"use strict";
let displayNumber = document.getElementById("number");
let buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", (element) => {
        console.log(element)
    })
})
console.log(buttons)