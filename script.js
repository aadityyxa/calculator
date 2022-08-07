const displayBottom = document.querySelector('.display-bottom');
const buttons = document.querySelectorAll('button');
const displayTop = document.querySelector('.display-top');
const backSpace = document.querySelector('.backspace');

buttons.onclick = displayValue();

function add(a, b) {

    let num1 = parseFloat(a);
    let num2 = parseFloat(b);

    let sum =  (num1 + num2)//adds two numbers

    if(sum % 1 != 0) {
        return sum.toFixed(1)
    }else return sum;

}


function subtract(a, b) {

    let num1 = parseFloat(a);
    let num2 = parseFloat(b);

        let sum =  (num1 - num2);

    if(sum % 1 != 0) {
        return sum.toFixed(1)
    }else return sum; //subtracts two numbers
}

function multiply(a, b) {   

    let num1 = parseFloat(a);
    let num2 = parseFloat(b);

    let sum =  (num1 * num2);

    if(sum % 1 != 0) {
        return sum.toFixed(1)
    }else return sum; //multiplies two numbers
}

function divide(a, b) {

    let num1 = parseFloat(a);
    let num2 = parseFloat(b);

        let sum =  (num1 / num2);

    if(sum % 1 != 0) {
        return sum.toFixed(1)
    }else return sum; //divides two numbers
}

function factorial(a) {

    let factorial = 1;
    
    let num = parseInt(a);

    for(i = num; i > 0; i--) {
        factorial *= i;
    }

    return factorial;
}

function power(a,b) {
    return a**b;
}

function allClear() {

    const displayBottom = document.querySelector('.display-bottom');
    const displayTop = document.querySelector('.display-top');
    const backSpace = document.querySelector('.backspace');
    displayBottom.textContent = '';
    displayTop.textContent = '';
}

function operate(operator, a, b) {

    if(operator == "add") {
        return add(a,b);
    }else if(operator == "subtract") {
        return subtract(a,b);
    }else if(operator == "multiply") {
        return multiply(a,b);
    }else if(operator == "divide") {
        return divide(a,b);
    }else if(operator == "factorial") {
        return factorial(a);
    }else if(operator == "power") {
        return power(a,b);
    }
     //takes two numbers and performs one of of the operations listed above.
}



function displayValue() {
    const displayBottom = document.querySelector('.display-bottom');
    const displayTop = document.querySelector('.display-top');
    const buttons = document.querySelectorAll('button');
    let firstValue;
    let operation;

    buttons.forEach((button) => button.addEventListener('click',() => {

        if(button.className === 'number') {
            displayBottom.textContent += button.id;

        }else if(button.className === 'operator') {
                if(firstValue) {
                    displayBottom.textContent = operate(operation, firstValue, displayBottom.textContent);
                    displayTop.textContent = '';
                }
            
            firstValue = displayBottom.textContent;
            operation = button.id;
            displayTop.textContent += `${firstValue} ${button.value}`
            displayBottom.textContent = '';
            
        }else if(button.className === 'equals') {
            displayBottom.textContent = operate(operation, firstValue, displayBottom.textContent);
            displayTop.textContent = '';
            firstValue = '';
            
            
        }else if(button.id === 'clear') {
            allClear();
        }else if(button.id === 'decimal') {
            displayBottom.textContent += button.value;
        }

    }))

}

backSpace.addEventListener('click',() => {

    displayBottom.textContent = displayBottom.textContent.substring(0 , displayBottom.textContent.length - 1);

})




