let textBox = document.getElementById("text");
let currentInput = "";
let firstInput = "";
let operator = "";
const addNumber = function(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
} 
const subtractNumber = function(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
} 
const multiplyNumber = function(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
} 
const divideNumber = function(firstNumber, secondNumber) {
    return firstNumber / secondNumber;
} 
const clearTextbox = function() {
    currentInput = "";
    firstInput = "";
    operator = "";
    textBox.textContent = 0;
}
let operate = function() {
    document.querySelectorAll(".button").forEach(button => {
        button.addEventListener("click", event =>{
            let buttonPress = event.target.value;
            if(buttonPress === "clear") {
                clearTextbox();
            }
            else if(buttonPress === "=") {
                firstInput = Number(firstInput);
                currentInput = Number(currentInput);
                switch (operator) {
                    case "+":
                        textBox.textContent = addNumber(firstInput, currentInput);
                        firstInput = addNumber(firstInput, currentInput);
                        break;
                    case "-":
                        textBox.textContent = subtractNumber(firstInput, currentInput);
                        firstInput = subtractNumber(firstInput, currentInput);
                        break;
                    case "*":
                        textBox.textContent = multiplyNumber(firstInput, currentInput);
                        firstInput = multiplyNumber(firstInput, currentInput);
                        break;
                    case "/":
                        textBox.textContent = divideNumber(firstInput, currentInput);
                        firstInput = divideNumber(firstInput, currentInput);
                        break;
                }
            }
            else if(!isNaN(buttonPress))
            {
                currentInput = currentInput + buttonPress;
                textBox.textContent = currentInput;
            }
            else {
                textBox.textContent = buttonPress;
                firstInput = currentInput;
                currentInput = "";
                operator = buttonPress;
            }
        })
    })
}
operate();
