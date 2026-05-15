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
let textBox = document.getElementById("text");
let buttons = document.querySelectorAll(".button");
let currentInput = "";
let firstInput = "";
let operator = "";
let operate = function() {
    buttons.forEach(button => {
        button.addEventListener("click", event =>{
            let value = event.target.value;
            if(value == "clear") {
                currentInput = "";
                firstInput = "";
                operator = "";
                textBox.textContent = 0;
            }
            else if(value == "=") {
                firstInput = Number(firstInput);
                currentInput = Number(currentInput);
                if(operator == "+") {
                   textBox.textContent = addNumber(firstInput, currentInput);
                   firstInput = addNumber(firstInput, currentInput);
                }
                else if(operator == "-") {
                    textBox.textContent = subtractNumber(firstInput, currentInput);
                    firstInput = subtractNumber(firstInput, currentInput);
                }
                else if(operator == "*") {
                    textBox.textContent = multiplyNumber(firstInput, currentInput);
                    firstInput = multiplyNumber(firstInput, currentInput);
                }
                else if(operator == "/") {
                    textBox.textContent = divideNumber(firstInput, currentInput);
                    firstInput = divideNumber(firstInput, currentInput);
                }
            }
            else if(value != "+" && value != "-" && value != "*" && value != "/" && value != "=" && value != "clear")
            {
                currentInput = currentInput + value;
                textBox.textContent = currentInput;
            }
            else {
                textBox.textContent = value;
                firstInput = currentInput;
                currentInput = "";
                operator = value;
            }
        })
    })
}
operate();
