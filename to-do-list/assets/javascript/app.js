"use strict";
const inputElement = document.getElementById("inputBox");
const toDoListOutPut = document.querySelector(".todolist");
const button = document.querySelector("button");
let editToDo;
button.addEventListener("click", () => {
    const getInput = inputElement.value;
    if (getInput === "") {
        alert("You Must Write SomeThing in your To-Do")
    } else if (button.innerHTML === "Edit") {
        editToDo.target.previousElementSibling.innerText = inputElement.value;
        button.innerHTML = "ADD";
        inputElement.value = "";
    } else {
        // CREATE ELEMENT P
        const li = document.createElement("li");
        const p = document.createElement("p");
        p.innerHTML = getInput;
        li.appendChild(p);
        toDoListOutPut.appendChild(li);
        inputElement.value = "";
        // CREATE ELEMENT EDIT
        const editButton = document.createElement("button");
        editButton.innerText = "Edit";
        editButton.classList.add("edit", "btn");
        li.appendChild(editButton);
        // CREATE ELEMENT DELETE
        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Remove";
        deleteButton.classList.add("delete", "btn");
        li.appendChild(deleteButton);
    }
    // INVOKE SAVE LOCAL STORAGE FUNCTION
    saveLocalStorage(inputElement);
})
toDoListOutPut.addEventListener("click", (element) => {
    if (element.target.innerText === "Remove") {
        toDoListOutPut.removeChild(element.target.parentElement);
    }
    if (element.target.innerText === "Edit") {
        inputElement.value = element.target.previousElementSibling.innerText;
        inputElement.focus();
        button.innerHTML = "Edit";
        editToDo = element;
    }
})
function saveLocalStorage(getToDo) {
    // let emptyToDoArray = [];
    // emptyToDoArray.push(item)
    console.log(getToDo)
}