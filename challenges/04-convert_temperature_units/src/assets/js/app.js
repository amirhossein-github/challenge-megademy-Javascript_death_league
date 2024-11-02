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

    } else if (number === 'Infinity'){
        showResult('⚠️ Infinity !!!')
        return false

    }

    return true
}

/**
 * This function takes the temperature from Celsius and converts it to Fahrenheit
 */
function toFarenhaight(){
    // Get user input
    const temp = document.getElementById('user-input').value

    // Convert temperature to farenhaight with formula
    const tempToFarenhaight = temp * 9/5 + 32

    // show to result to user
    showResult(`temperature: ${tempToFarenhaight} f`)
}

/**
 * This function takes the temperature from Fahrenheit and converts it to Celsius
 */
function toCelsius(){
    // Get user input
    const temp = document.getElementById('user-input').value

    // Convert temperature to farenhaight with formula
    const tempToCelsius = (temp - 32) * 5/9

    // show to result to user
    showResult(`temperature: ${tempToCelsius} c`)
}

// Active submit listener
document.getElementById('user-f').addEventListener('click', toFarenhaight)
document.getElementById('user-c').addEventListener('click', toCelsius)
