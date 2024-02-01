const inputElement = document.getElementById("inputBox");
const toDoListOutPut = document.querySelector(".todolist");
const button = document.querySelector("button");
button.addEventListener("click", () => {
    const getInput = inputElement.value.trim();
    if (getInput === "") {
        alert("You Must Write SomeThing in your To-Do")
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
})
toDoListOutPut.addEventListener("click", (element) => {
    if (element.target.innerText === "Remove") {
        toDoListOutPut.removeChild(element.target.parentElement);
    }
})