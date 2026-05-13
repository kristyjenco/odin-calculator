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
let parentContainer = document.getElementById("main");
let textBox = document.getElementById("text");
let buttons = document.querySelectorAll(".button");
let currentInput = "";
let firstInput = "";
let operator = "";
let operate = function() {
    buttons.forEach(button => {
        button.addEventListener("click", event =>{
            let value = event.target.value;
            if(value == "=") {
                firstInput = Number(firstInput);
                currentInput = Number(currentInput);
                if(operator == "+") {
                   textBox.value = addNumber(firstInput, currentInput);
                }
                else if(operator == "-") {
                    textBox.value = subtractNumber(firstInput, currentInput);
                }
                else if(operator == "*") {
                    textBox.value = multiplyNumber(firstInput, currentInput);
                }
                else if(operator == "/") {
                    textBox.value = divideNumber(firstInput, currentInput);
                }
            }
            else if(value != "+" && value != "-" && value != "*" && value != "/" && value != "=")
            {
                currentInput = currentInput + value;
                textBox.value = currentInput;
            }
            else if(value == "clear") {
                currentInput = "";
                firstInput = "";
                operator = "";
            }
            else {
                textBox.value = value;
                firstInput = currentInput;
                currentInput = "";
                operator = value;
            }
        })
    })
}
operate();
