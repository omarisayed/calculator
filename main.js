let screen = document.querySelector('.screen')
let num1 = "";  //operand 1
let operator = "";  
let num2 = "";    //operand 2
let result = "";

function handleClick(button){

    if (button >= '0' && button <= '9'){ // If the button is numerical, and operator is an empty value, keep concatenating:
        if (operator === ""){
            if (!num1.includes(".") || num1.split(".")[1].length < 1){ // making sure if number has (.), numbers after decimal place do not exceed one. 
                num1 += button   //concat numbers (of type string) before decimal point.
        }
    
        }else {
            if (!num2.includes(".") || num2.split(".")[1].length < 1){
                num2 += button
        }
    }
    
    }else if (button === '.' && !((operator === "" && num1.includes(".")) || (operator !== "" && num2.includes(".")))){
        // Add decimal point only if the number being entered doesnt already have one
        if (operator === ""){
            num1 += button;
        }else{
            num2 += button;
        }
    }// if the button is an operator, assign the clicked operator button to the operator variable:
    else if (button === '+' || button === '-' || button === 'x' || button === '÷'){ 
        operator = button

    } // if button clicked is = :
    else if (button === "="){  
        if (operator === "+"){
            result = parseFloat(num1) + parseFloat(num2)
        }else if (operator === "-"){
            result = parseFloat(num1) - parseFloat(num2)
        }else if (operator === "x"){
            result = parseFloat(num1) * parseFloat(num2)
        }else if (operator === "÷"){
            result = parseFloat(num1) / parseFloat(num2)
        }

        if (Math.round(result) === result){
            result = result.toFixed(0); //display as integer
        }else{
            result = result.toFixed(1); // display with one decimal places
        }
        // Reset variables for the next calculation
        num1 = result.toString()
        num2 = "";
        operator = "";
        result = ""; 

    } // If the button clicked is AC:
    else if (button === 'AC'){
        num1 = "";
        num2 = "";
        operator = "";
        result = "";
    }

    screen.textContent = num1 + operator + num2 + result.toString();
    
}

