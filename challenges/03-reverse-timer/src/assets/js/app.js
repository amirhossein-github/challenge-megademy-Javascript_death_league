/**
 * To store timer counter
 */
let counter = 0

/**
 * To store interval timer
 */
let timer

/**
 * This function start the timer
 */
function setTimer(){
    timer = setInterval(function(){
        // Counting
        counter -= 1

        // If timer is equal to user input value
        if (counter === 0){
            timerRestart()

        }

        // Show counting to user
        showResult(counter)

    }, 1000)
}

/**
 * this function managing play the timer
 */
function timerStart(){
    // Get user inputs
    const number = document.getElementById('user-input').value

    // Validation user inputs
    if (!isValidNumber(number)){
        return

    }

    // Convert string value to number
    const convertToNumber = Number(number)

    // Set counter stop number
    counter = convertToNumber

    // Start the timer
    setTimer()
}

/**
 * This function stop the timer
 */
function timerStop(){
    clearInterval(timer)

}

/**
 * This function managing process of reset the timer
 */
function timerRestart(){
    timerStop()
    counter = 0
    showResult(counter)
    timer = undefined

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

// Active listeners
document.getElementById('user-start').addEventListener('click', timerStart)
document.getElementById('user-stop').addEventListener('click', timerStop)
document.getElementById('user-restart').addEventListener('click', timerRestart)