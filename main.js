let screen = document.querySelector('.screen')
let num1 = "";  //operand 1
let operator = "";  
let num2 = "";    //operand 2
let result = "";

function handleClick(button){

    if (button >= '0' && button <= '9'){ // If the button is numerical, and operator is an empty value, keep concatenating:
        if (operator = ""){
            num1 += button   // the numerical string values will concatenate, so we can have double/triple digits.
        }else {
            num2 += button  //else if operator is not empty, we move to num2(operand 2)
        }

    }else if (button === '+' || button === '-' || button === 'x' || button === '÷'){ // if the button is an operator, assign the clicked operator button to the operator variable:
        operator = button
    }
    
    screen.textContent = num1 + operator + num2
}

