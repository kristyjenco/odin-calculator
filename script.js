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
let toCalculate = "";
let operate = function() {
    buttons.forEach(button => {
        button.addEventListener("click", event =>{
            let value = event.target.value;
            currentInput = currentInput + value;
            if(value != "+" && value != "-" && value != "*" && value != "/")
            {
                textBox.value = currentInput;
            }
            else {
                textBox.value = value;
                toCalculate = currentInput;
                currentInput = "";
                
            }
        })
    })
}
operate();
