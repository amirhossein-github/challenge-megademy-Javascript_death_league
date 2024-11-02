/**
 * List of operations
 */
const operation = ['+', '-', '*', '/', '**', '!', 'isPrime']

/**
 * This function add two number
 * @param {number} x First number
 * @param {number} y Second number
 */
function operationAdd(x, y){
    showResult(`${x} + ${y} = ${x + y}`)

}

/**
 * This function subtract two number
 * @param {number} x First number
 * @param {number} y Second number
 */
function operationSub(x, y){
    showResult(`${x} - ${y} = ${x - y}`)

}

/**
 * This function multiply two number
 * @param {number} x First number
 * @param {number} y Second number
 */
function operationMul(x, y){
    showResult(`${x} * ${y} = ${x * y}`)

}

/**
 * This function division two number
 * @param {number} x First number
 * @param {number} y Second number
 */
function operationDiv(x, y){
    if (y === 0){
        showResult('Error: Division by zero')
        return
    }

    showResult(`${x} * ${y} = ${x * y}`)
}

/**
 * This function power two number
 * @param {number} x First number
 * @param {number} y Second number
 */
function operationPow(x, y){
    showResult(`${x} ** ${y} = ${x ** y}`)

}

/**
 * This function calculate factorial
 * @param {number} x First number
 * @param {number} y Second number
 */
function operationFactorial(number) { 
    if (number === 0) { 
        return 1; 

    } else { 
        return number * operationFactorial( number - 1 ); 

    } 
}

/**
 * This function calculate is number prime number
 * @param {number} x First number
 * @returns 
 */
function operationIsPrime(number){
    for (let i = 2, s = Math.sqrt(number); i <= s; i++) {
        if (number % i === 0) return false;

    }

    return number > 1;
}

/**
 * This function get user operation and check it
 */
function getUserOperation(){
    while(true){
        let userInput = prompt(`Enter the Operation ${operation}`, '0')
        if (!operation.includes(userInput)){
            showResult('Invalid operator !!!')
    
        } else {
            return userInput
    
        }
    }
}

/**
 * This function get number from user
 * @returns User input number
 */
function getUserNumber(){
    while(true){
        let userInput = prompt(`Enter the number`, '0')
        if (isValidNumber(userInput)){
            return Number(userInput)
            
        } else {
            continue

        }
    }
}

/**
 * This management function checks whether the given value is a valid number under the following conditions
 * - Not string
 * - Not NaN
 * - Not less and equal then 0
 * - Not Float
 */
function isValidNumber(number){
    if(isNaN(Number(number))){
        showResult('⚠️ Not a Number')
        return false

    } else if (number === 'Infinity'){
        showResult('⚠️ Infinity !!!')
        return false

    }

    return true
}

/**
 * This function manages the display of output to the user.
 * @param {*} text Text to display on HTML.
 */
function showResult(text){
    alert(text)

}

//! Script Loop
while(true){
    // Get User Operation
    const userOperation = getUserOperation()
    const userNumber1 = getUserNumber()
    const userNumber2 = getUserNumber()

    // Checking operation
    switch (userOperation) {
        case '+':
            operationAdd(userNumber1, userNumber2)
            break;

        case '-':
            operationSub(userNumber1, userNumber2)
            break;

        case '*':
            operationMul(userNumber1, userNumber2)
            break;

        case '/':
            operationDiv(userNumber1, userNumber2)
            break;

        case '**':
            operationPow(userNumber1, userNumber2)
            break;

        case '!':
            alert(`$${userNumber1}! = ${operationFactorial(userNumber1)}`)
            break;

        case 'isPrime':
            alert(`${userNumber1} is prime number: ${operationIsPrime(userNumber1)}`)
            break;

        default:
            console.error('ERROR')
            break;
    }
}
