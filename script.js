const displayBottom = document.querySelector('.display-bottom');
const buttons = document.querySelectorAll('button');
const displayTop = document.querySelector('.display-top');
const backSpace = document.querySelector('.backspace');


function add(a, b) {

    let num1 = parseFloat(a);
    let num2 = parseFloat(b);

    let sum =  (num1 + num2)//adds two numbers

    return sum;

}

function subtract(a, b) {

    let num1 = parseFloat(a);
    let num2 = parseFloat(b);

    let sum =  (num1 - num2); //subtracts two numbers
    
    return sum;
}

function multiply(a, b) {   

    let num1 = parseFloat(a);
    let num2 = parseFloat(b);

    let sum =  (num1 * num2);
    return sum; //multiplies two numbers
}

function divide(a, b) {

    let num1 = parseFloat(a);
    let num2 = parseFloat(b);

        let sum =  (num1 / num2);
    return sum; //divides two numbers
}

function factorial(a) {

    let factorial = 1;
    
    let num = parseInt(a);

    for(i = num; i > 0; i--) {
        factorial *= i; // returns the factorial of a number
    }

    return factorial;
}

function power(a,b) {
    return a**b; // calculates exponentials
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





