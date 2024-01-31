"use strict";
let displayNumber = document.getElementById("number");
let buttons = document.querySelectorAll("button");
let string = "";
let arrayButton = Array.from(buttons);
arrayButton.forEach((button) => {
    button.addEventListener("click", (element) => {
        if (element.target.innerText === "=") {
            console.log(true)
        } else {
            console.log(false)
        }
    })
})
console.log(string)