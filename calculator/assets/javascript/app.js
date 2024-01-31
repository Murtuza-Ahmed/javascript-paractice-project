"use strict";
let displayNumber = document.getElementById("number");
let buttons = document.querySelectorAll("button");
let string = "";
let arrayButton = Array.from(buttons);
arrayButton.forEach((button) => {
    button.addEventListener("click", (element) => {
        if (element.target.innerText === "+") {
            string = eval(string);
            displayNumber.value = string;
        } else if (element.target.innerText === "AC") {
            string = "";
            displayNumber.value = string;
        } else if (element.target.innerText === "DE") {
            string = string.substring(0, string.length - 1);
            displayNumber.value = string;
        }
        else {
            string += element.target.innerText;
            displayNumber.value = string;
        }
    })
})