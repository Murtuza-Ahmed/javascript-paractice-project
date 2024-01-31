"use strict";
let displayInput = document.getElementById("number");
let buttons = document.querySelectorAll("button");
let string = "";
buttons.forEach((button) => {
    button.addEventListener("click", (element) => {
        if (element.target.innerText === "=") {
            string = eval(string);
            displayInput.value = string;
        } else if (element.target.innerText === "AC") {
            string = "";
            displayInput.value = string;
        } else if (element.target.innerText === "DEL") {
            string = string.substring(0, string.length - 1);
            displayInput.value = string;
        } else {
            string += element.target.innerText;
            displayInput.value = string;
        }
    })
})