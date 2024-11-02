/**
 * Saves all the symbols that are considered
 */
const symbolList = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]

/**
 * This function looks for characters in the input text that are given as an array.
 * @param {string} text The text to be checked
 * @param {Array} items List of items to be checked
 * @returns Number of items found
 */
function isCharInText(text, items){
    // 0) Make filed to store number of items found
    let counter = 0

    // 1) Convert text to array of characters
    const characters = text.split('')

    // 2) Check each character
    characters.forEach(character => {
        if(items.includes(character)){
            counter += 1

        }
    });

    // 3) Return final result
    return counter
}

/**
 * This function manages the process of counting the number of symbols.
 * From getting the amount of text from the user to displaying the final result to the user.
 */
function symbolCounterHandler(){
    // Get user input
    const text = document.getElementById('user-input').value
    
    // Call the main function
    const numberOfSymbols = isCharInText(text, symbolList)

    // Finally show the result to the user
    showResult(numberOfSymbols)
}

/**
 * This function manages the display of output to the user
 * @param {number} numberOfSymbols Number of symbols
 */
function showResult(numberOfSymbols){
    document.getElementById('result').textContent = numberOfSymbols

}

// Active submit listener
document.getElementById('user-submit').addEventListener('click', symbolCounterHandler)