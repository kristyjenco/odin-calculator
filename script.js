const addNumber = function(firstNumber, secondNumber) {
    let result = firstNumber + secondNumber;
    return result;
} 
const subtractNumber = function(firstNumber, secondNumber) {
    let result = firstNumber - secondNumber;
    return result;
} 
const multiplyNumber = function(firstNumber, secondNumber) {
    let result = firstNumber * secondNumber;
    return result;
} 
const divideNumber = function(firstNumber, secondNumber) {
    let result = firstNumber / secondNumber;
    return result;
} 
let parentContainer = document.getElementById("main");
let buttons = document.querySelectorAll(".button");
let operate = function() {
    buttons.forEach(button => {
        button.addEventListener("click", event =>{
            let value = event.target.value;
        })
    })
}
/*
1. User presses first button -> button value is stored in variable
2. User presses second button -> button value is stored in variable
3. User presses third button -> button value is stored in variable
4. User presses '=' -> variable values are calculated and stored in textbox
*/