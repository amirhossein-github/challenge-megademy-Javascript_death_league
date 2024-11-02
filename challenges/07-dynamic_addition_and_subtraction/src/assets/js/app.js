let counter = 0

/**
 * This function manages the process of set new counter.
 * From getting number value from the user to displaying the final result to the user.
 */
function setCounter(){
    // Get user inputs
    const number = document.getElementById('user-input').value

    // Validation user inputs
    if (!isValidNumber(number)){
        return

    }

    // Convert string to number
    counter = Number(number)

    // Show the result on screen
    showResult(counter)
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
 * This function adds one unit to the counter
 */
function addCounter(){
    counter += 1
    showResult(counter)

}

/**
 * This function subtracts one unit from the counter
 */
function subCounter(){
    counter -= 1
    showResult(counter)
    
}

// Active submit listener
document.getElementById('user-new').addEventListener('click', setCounter)
document.getElementById('user-add').addEventListener('click', addCounter)
document.getElementById('user-sub').addEventListener('click', subCounter)