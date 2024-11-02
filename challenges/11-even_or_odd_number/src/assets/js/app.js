/**
 * This function manages the process of 'even or odd'.
 * From getting number value from the user to displaying the final result to the user.
 */
function evenOrOddHandler(){
    // Get user inputs
    const number = document.getElementById('user-input').value

    // Validation user inputs
    if (!isValidNumber(number)){
        return

    }

    // Convert string value to number
    const convertToNumber = Number(number)

    // Checking for event ot odd
    if (convertToNumber % 2 === 0){
        showResult('Even')

    } else {
        showResult('Odd')

    }
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
 * - Not Float
 */
function isValidNumber(number){
   if(isNaN(Number(number))){
       showResult('⚠️ Not a Number')
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
document.getElementById('user-submit').addEventListener('click', evenOrOddHandler)