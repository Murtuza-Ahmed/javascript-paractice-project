"use strict";
let displayNumber = document.getElementById("number");
let buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let buttonValue = button.innerText;
        displayNumber.value += buttonValue;
        if (buttonValue === "AC") {
            displayNumber.value = "";
        } else if (buttonValue === "DEL") {
            displayNumber.value = displayNumber.value.slice(0, -1);
        }
    })
})
console.log(displayNumber)