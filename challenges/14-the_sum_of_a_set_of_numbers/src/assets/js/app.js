/**
 * This function takes a larger number than an input.
 * which returns the sum of the number one to the input number in the output
 * @param {number} number The desired number.
 * @returns The sum of numbers from 1 to the input number of the function.
 */
function numberAdder(number){
    // The formula mentioned in the challenge text
    return number * (number + 1) / 2

}

/**
 * This function manages the process of numberAdder.
 * From getting number value from the user to displaying the final result to the user.
 */
function numberAdderHandler(){
    // Get user input
    const number = document.getElementById('user-input').value

    // If is valid number, (NaN) && > 0
    if (!isValidNumber(number)){
        return

    } 

    // Convert string value to number
    const convertToNumber = Number(number)
    
    // Call the main function
    const sumOf_aSetOfNumbers = numberAdder(convertToNumber)

    // Finally show the result to the user
    showResult(sumOf_aSetOfNumbers)
}

/**
 * This function manages the display of output to the user.
 * @param {*} text Text to display on HTML.
 */
function showResult(text){
    document.getElementById('result').textContent = text

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

    } else if (number <= 0){
        showResult('⚠️ Invalid Number')
        return false

    } else if (number === 'Infinity'){
        showResult('⚠️ Infinity !!!')
        return false

    } else if (Number(number) % 1 !== 0){
        showResult('⚠️ Float is invalid')
        return false

    }

    return true
}

// Active submit listener
document.getElementById('user-submit').addEventListener('click', numberAdderHandler)