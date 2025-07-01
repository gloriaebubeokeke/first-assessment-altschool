// const input = document.querySelector('.input')
// const buttons= document.querySelectorAll('button')

// let presentInput ='0'
// let operator= null
// let pastInput =null
// let shouldResetInputValue= false


// function updateDisplayInput(){
//     input.value = presentInput
// }

// function clear(){
//     presentInput='0'
//     operator=null
//     pastInput=null
//     shouldResetInputValue=false
//     updateDisplayInput()
// }
// function clearAll(){
//     clear()
// }

// function inputValue(number){
//     if(shouldResetInputValue){
//         presentInput=number
//         shouldResetInputValue=false
//     } else{
//         presentInput= presentInput==='0'?number: presentInput +number
//     }
//     updateDisplayInput()
// }

// function inputOperator(nxtOperator){
// const inputValue=parseFloat(presentInput)

// if (pastInput ===null){
//     pastInput= inputValue
// }
// else if(operator){
//     const result=calculate()
//     presentInput= String(result)
//     pastInput= result
//     updateDisplayInput()
// }


// shouldResetInputValue=true
// operator=nxtOperator
// }

// function calculate(){
//     const past=parseFloat(pastInput)
//     const present=parseFloat(presentInput)

// if(isNaN(past) || isNaN(present)) return

// let result=0
// switch(operator){
//     case '+':
//         result= past+present
//         break;

//         case '-':
//         result =past-present
//         break;

//         case 'x':
//             result =past*present
//             break;

//             case '÷':
//                 if (current === 0){
//                     alert('Cannot divide')
//                     return past;
//                 }
//                 result= past/present;
//                 break;

//                 case '%':
//                     result =past%present
//                     break;
                    
//                     case '^':
//                         result= Math.pow(past, present)
//                         break;
//                         default:
//                             return;
// }
// return result;
// }


// function equals(){
//     if(operator===null || shouldResetInputValue){
//         return;
//     }
//     const result= calculate()
//     presentInput=String(result)
//     operator= ''
//     pastInput=''
//     shouldResetInputValue= true
//     updateDisplayInput()}

// function decimalValue(){
//     if(shouldResetInputValue){
//         presentInput ='0.'
//         shouldResetInputValue=false
//     } else if(presentInput.indexOf('.') === -1){
//         presentInput += '.'
//     }
//     updateDisplayInput()
// }

// function backDelete(){
//     if(shouldResetInputValue) return

//     if(presentInput.length > 1){
//         presentInput =presentInput.slice(0, -1)
//     } else{
//         presentInput ='0'
//     }
//     updateDisplayInput()
// }

// buttons.forEach(button => {
//     button.addEventListener('click', ()=>{
//         const buttonValue = button.textContent.trim()

//         if(buttonValue >= '0' && buttonValue <='9'){
//             inputValue(buttonValue)
//         } else if(['+', '-', 'x', '÷', '%', '^'].includes(buttonValue)){
//             inputOperator(buttonValue)
//         }else if(buttonValue === '='){
// equals()
//         } else if( buttonValue=== '.'){
//             decimalValue()
//         } else if(button.querySelector('#btn-img')){
//             backDelete()
//         }
//         else if(buttonValue === 'AC'){
//             clearAll()
//         }
//     })
// });

// updateDisplayInput();

// document.addEventListener('keydown', (e)=>{
//     const key=e.key

//     if (key>='0' && key <='9'){
//         inputValue(key)
//     } else if(key === '+' || key ==='-'){
//         inputOperator(key)
//     } else if (key ==='*'){
//         inputOperator('x')
//     } else if(key === '/'){
//         event.preventDefault()
//         inputOperator('÷')
//     } else if(key ==='%'){
//         inputOperator('%')
//     } else if(key ==='^'){
//         inputOperator('^')
//     } else if(key === '=' || key ==='Enter'){
//         equals()
//     }else if (key ==='.'){
//         decimalValue()
//     } else if (key==='Backspace'){
//         backDelete()
//     }else if (key==='Escape'){
//         clear()
//     } 
// })

const input = document.querySelector('.input');
const history = document.querySelector('.history');
let display=''

window.displayNumber = function(num){
    if(input.value ==='0' || input.value==='Error'){
        display=''
    }
    display +=num
    input.value= display
}

window.displayOperator = function(operator){
if (display==='' || /[+\-*/]$/.test(display)) return;
display += operator
input.value=display

}

window.calculator = function(){
    try{
        const result=eval(display)
        history.value += `${display} =${result}\n`
        display=result.toString()
        input.value= display
    }
    catch{
        input.value="Error"
        display=''
    }
}

window.clearInput = function(){
    display=''
    input.value='0'
}

window.deleteInput = function(){
    display=display.slice(0, -1)
    input.value=display|| '0'

}

document.addEventListener('keydown', (e) => {
  if ((e.key >= '0' && e.key <= '9') || e.key === '.') {
    displayNumber(e.key);
  } else if (['+', '-', '*', '/'].includes(e.key)) {
    displayOperator(e.key);
  } else if (e.key === 'Enter') {
    calculator();
  } else if (e.key === 'Backspace') {
    deleteInput();
  } else if (e.key === 'Escape') {
    clearInput();
  }
});