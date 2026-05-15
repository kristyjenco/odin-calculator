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
let lastOperator = "";
let lastSecondInput = "";
let shouldResetDisplay = false;
let calculate = function(firstNumber, secondNumber, operator) {
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);
    if(operator == "+") {
        return addNumber(firstNumber, secondNumber);
    }
    else if(operator == "-") {
        return subtractNumber(firstNumber, secondNumber);
    }
    else if(operator == "*") {
        return multiplyNumber(firstNumber, secondNumber);
    }
    else if(operator == "/") {
        return divideNumber(firstNumber, secondNumber);
    }  
}
function isOperator(value) {
    return value == "+" || value == "-" || value == "*" || value == "/";
}
let operate = function() {
    buttons.forEach(button => {
        button.addEventListener("click", event =>{
            let value = event.target.value;
            if(value == "clear") {
            currentInput = "";
            firstInput = "";
            operator = "";
            lastOperator = "";
            lastSecondInput = "";
            shouldResetDisplay = false;
            textBox.textContent = "0";
        }
            else if(value == "=") {
                if(operator !== "" && currentInput !== "") {
                    firstInput = Number(firstInput);
                    currentInput = Number(currentInput);
                    let result = calculate(firstInput, currentInput, operator);
                    textBox.textContent = result;
                    lastOperator = operator;
                    lastSecondInput = currentInput;
                    firstInput = result;
                    currentInput = "";
                    operator = "";
                }
                else if(lastOperator !== "" && lastSecondInput !== "") {
                    let result = calculate(firstInput, lastSecondInput, lastOperator);
                    textBox.textContent = result;
                    firstInput = result;
                    shouldResetDisplay = true;
                }
            }
            else if(isOperator(value)) {
            if(firstInput == "") {
                firstInput = currentInput;
            }
            else if(currentInput !== "") {
                let result = calculate(firstInput, currentInput, operator);
                firstInput = result;
                textBox.textContent = result;
            }
            operator = value;
            currentInput = "";
        }
        else {
            currentInput += value;
            textBox.textContent = currentInput;
        }
        })
    })
}
operate();
