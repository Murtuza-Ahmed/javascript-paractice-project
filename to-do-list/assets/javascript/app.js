"use strict";
// ALL CONTENT LODE 
document.addEventListener("DOMContentLoaded", getLocalStroge);
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
        // INVOKE SAVE LOCAL STORAFE FUNCTION
        saveLocalStorage(inputElement);
        // editLocalTodo(inputElement);
        inputElement.value = "";
    } else {
        // CREATE ELEMENT P
        const li = document.createElement("li");
        const p = document.createElement("p");
        p.innerHTML = getInput;
        li.appendChild(p);
        toDoListOutPut.appendChild(li);
        // INVOKE SAVE LOCAL STORAGE FUNCTION
        saveLocalStorage(inputElement);
        // editLocalTodo(inputElement);
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
})
toDoListOutPut.addEventListener("click", (element) => {
    // console.log(element.target.parentElement)
    if (element.target.innerText === "Remove") {
        toDoListOutPut.removeChild(element.target.parentElement);
        deleteToDoList(element.target.parentElement)
    }
    if (element.target.innerText === "Edit") {
        inputElement.value = element.target.previousElementSibling.innerText;
        inputElement.focus();
        button.innerHTML = "Edit";
        editToDo = element;
    }
})
//  SAVE LOCALSTROGE FUNCTION
function saveLocalStorage(getToDo) {
    let existingToDoArray = JSON.parse(localStorage.getItem("todokey")) || [];
    let getValue = getToDo.value;
    existingToDoArray.push(getValue);
    let jsonConvertFile = JSON.stringify(existingToDoArray);
    localStorage.setItem("todokey", jsonConvertFile);
}
// FUNCTION CONTENT LODE
function getLocalStroge() {
    let existingToDoArray = JSON.parse(localStorage.getItem("todokey")) || [];
    existingToDoArray.map((getItem) => {
        const li = document.createElement("li");
        const p = document.createElement("p");
        p.innerHTML = getItem;
        li.appendChild(p);
        toDoListOutPut.appendChild(li);
        // CREATE ELEMENT EDIT BUTTON
        const editButton = document.createElement("button");
        editButton.innerText = "Edit";
        editButton.classList.add("edit", "btn");
        li.appendChild(editButton);
        // CREATE ELEMENT DELETE BUTTON
        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Remove";
        deleteButton.classList.add("delete", "btn");
        li.appendChild(deleteButton);
    })
}
function deleteToDoList(deleteItem) {
    let existingToDoArray = JSON.parse(localStorage.getItem("todokey")) || [];
    let jsonConvertFile = JSON.stringify(existingToDoArray);
    localStorage.setItem("todokey", jsonConvertFile);
    let parameter = deleteItem;
    let toDoIndex = parameter.children[0].innerText;
    let toDoArray = existingToDoArray.indexOf(toDoIndex);
    existingToDoArray.splice(toDoArray, 1);
    localStorage.setItem("todokey", JSON.stringify(existingToDoArray));
}
// function editLocalTodo(item) {
//     let getItem = JSON.parse(localStorage.getItem("todokey"));
//     let getIndex = getItem.indexOf(item.value);
//     getItem[getIndex] = inputElement.value;
//     localStorage.setItem("todokey", JSON.stringify(getItem));
// }