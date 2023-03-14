let display = document.querySelector('.display-div')
const acButton = document.querySelector('.btn-ac')
const equalButton = document.querySelector('.btn-equal')
const buttons = Array.from(document.querySelectorAll('.btn'))

buttons.forEach(function(button){
    button.addEventListener('click',function(e){
        let num = e.target.dataset.val
        display.textContent += num
    })
})



