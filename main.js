let screen = document.querySelector('.screen')
let num1 = "";  //operand 1
let operator = "";  
let num2 = "";    //operand 2
let result = "";

function handleClick(button){

    if (button >= '0' && button <= '9'){ // If the button is numerical, and operator is an empty value, keep concatenating:
        if (operator === ""){
            num1 += button   // the numerical string values will concatenate, so we can have double/triple digits.
        }else {
            num2 += button  //else if operator is not empty, we move to num2(operand 2)
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
            result = result.toFixed(2); // display with two decimal places
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

