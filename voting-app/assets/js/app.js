let votes = {};

const voteButton = document.querySelector(".voteButton");
const optionButton = document.querySelector(".optionButton");

voteButton.addEventListener("click", () => {
    const selectOption = document.querySelector("input[name='option']:checked");
    if (!selectOption) {
        alert("please select an option to vote");
        return;
    }
    const option = selectOption.value;
    votes[option] = (votes[option] || 0) + 1;
    displayResult();
})
function displayResult() {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";

    for (let option in votes) {
        const result = document.createElement("p");
        result.textContent = `${option}: ${votes[option]};`
        resultDiv.appendChild(result);
    }
}

optionButton.addEventListener("click", () => {
    const customOptionInput = document.getElementById("custom-option");
    const customOptionValue = customOptionInput.value.trim();

    if (!customOptionValue) {
        alert("please enter a valid option");
        return;
    }
    const optionList = document.getElementById("option");
    const createLi = document.createElement("li");
    const radio = document.createElement("input");
    radio.type = "radio"
    radio.name = "option"
    radio.value = customOptionValue;

    createLi.appendChild(radio);
    createLi.appendChild(document.createTextNode(customOptionValue));
    optionList.appendChild(createLi);

    customOptionValue = "";
})