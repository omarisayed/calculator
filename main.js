let screen = document.querySelector('.screen-div')
const acButton = document.querySelector('.btn-ac')
const backspaceButton = document.querySelector('.btn-del')
const equalButton = document.querySelector('.btn-equal')
const buttons = Array.from(document.querySelectorAll('.btn'))

buttons.forEach(function(button){
    button.addEventListener('click',function(e){ 
        let value = e.target.dataset.val // check which button has been clicked on then display its value on screen
        screen.textContent += value
    })
})

acButton.addEventListener('click', function(e){
    screen.textContent = screen.textContent = ''
})

backspaceButton.addEventListener('click', function(e){
    screen.textContent = screen.textContent.slice(0,-1);
})

equalButton.addEventListener('click', function(e){
    if (screen.textContent === ''){  // if the screen if empty and you press = sign dont display anything.
        screen.textContent = ''
    }else{
       
    }
})



