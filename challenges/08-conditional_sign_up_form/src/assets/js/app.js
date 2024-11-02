/**
 * This function manages the process of 'sign-up'.
 * From getting number value from the user to displaying the final result to the user.
 */
function signupHandler(){
    // Get user inputs
    const age = document.getElementById('user-input').value

    // Validation user inputs
    if (!isValidNumber(age)){
        return

    }

    // Convert string value to number
    const convertToNumber = Number(age)

    // Checking for age
    if (age >= 18){
        showResult('Success Sign-up')

    } else {
        showResult('Fail Sign-up')

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
 * - Not less and equal then 0
 * - Not Float
 */
function isValidNumber(number){
    if(isNaN(Number(number))){
        showResult('⚠️ Not a Number')
        return false

    } else if (number <= 0){
        showResult('⚠️ Invalid Age')
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
document.getElementById('user-submit').addEventListener('click', signupHandler)