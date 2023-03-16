let screen = document.querySelector('.screen-div')
const acButton = document.querySelector('.btn-ac')
const backspaceButton = document.querySelector('.btn-del')
const equalButton = document.querySelector('.btn-equal')
const buttons = Array.from(document.querySelectorAll('.btn'))

let numArray = [];
let operator = null;
let lastChar = screen.textContent.slice(-1); // last character of the array


buttons.forEach(function(button){
    button.addEventListener('click',function(e){ 
        let value = e.target.dataset.val // check which button has been clicked on then display its value on screen
        screen.textContent += value

        if (!isNaN(parseFloat(value))){ // if the clicked button is a number, add it to the array
            numArray.push(value)
        }else if (value === '+' || value === '-' || value === '&#215;' || value === '&#247;'){
            operator = value
        }

    })
})


acButton.addEventListener('click', function(e){
    screen.textContent = screen.textContent = ''
    numArray = []
    operator = null
})


backspaceButton.addEventListener('click', function(e){
    if (!isNaN(parseFloat(lastChar))){ // if the last entered character is a number, remove it from the array
        numArray.pop()
    }else if (lastChar === '+' || lastChar === '-' || lastChar === '&#215;' || lastChar === '&#247;'){ 
        operator = null;
    }

    screen.textContent = screen.textContent.slice(0,-1);  // also remove text from screen
})


equalButton.addEventListener('click', function(e){
    if (screen.textContent === ''){  // if the screen if empty and you press = sign dont display anything.
        screen.textContent = ''
    }else{
       
    }
})





//------------------------------------------------------------
//NaN is short for "Not-a-Number". The isNaN() method returns true if a value is NaN. The isNaN() method converts the value to a number before testing it.
// parseInt is for converting a non integer number to an int and parseFloat is for converting a non float (with out a decimal) to a float (with a decimal).
