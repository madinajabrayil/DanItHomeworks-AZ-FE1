function calculate(firstNumber, secondNumber, symbol) {
    firstNumber = +prompt("Enter first number:");
    secondNumber = +prompt("Enter second number:");
    symbol = prompt("Enter symbol:");

    while (true) {
        if (firstNumber % 1 != 0 || secondNumber % 1 != 0 || firstNumber == " " || secondNumber == " " || symbol == " ") {
            alert("Enter correctly data! Not empty and string!")
            firstNumber = +prompt("Enter first number: ");
            secondNumber = +prompt("Enter second number:");
            symbol = prompt("Enter symbol:");


        } else if (symbol == '+') {

            return firstNumber + secondNumber;
    
        } else if (symbol == '-') {
    
            return firstNumber - secondNumber;
    
        } else if (symbol == '*') {
    
            return firstNumber * secondNumber;
    
        } else if (symbol == '/') {
    
            return firstNumber / secondNumber;
        }
    }
    

}

console.log(calculate());