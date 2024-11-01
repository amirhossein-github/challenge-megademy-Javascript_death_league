/**
 * If the user selects one of the values, exit the program.
 */
const exitValues = ['exit', 'Exit']

/**
 * This function takes a string text and returns the number of words
 * @param {string} statement The text whose words are supposed to be counted
 * @returns Number of words
 */
function wordCounter(statement){
    // 1) Separate entire statement using spaces between words
    const toSeparate = statement.split(' ')

    // 2) Remove empty-space, Trimming
    let toRemoveSpace = []
    toSeparate.forEach(function(element){
        if (element !== ''){
            toRemoveSpace.push(element)

        }
    });

    // 3) The output of the previous operation is an array of words
    // It is enough to read the index number of this array to count the number of words in the entire sentence
    const wordCounts = toRemoveSpace.length

    // 4) Return final output
    return wordCounts
}

/**
 * This function call when user cancelling prompt.
 */
function cancelPrompt(){
    alert('!!! Cancel :(')

}

/**
 * This function manages the display of output to the user.
 * @param {number} wordCounts The number of words in the sentence
 */
function showResult(wordCounts){
    alert(`The total number of words in the given sentence: ${wordCounts}`)

}

// Script Loop
while(true){
    /**
     * To store user input value
     */
    const userInput = prompt('Enter the sentence you want.\nTo exit the program, write the word exit.', 'This is a test text.')

    // If User "Cancel" the prompt.
    if (!userInput){
        // Show the message to user
        cancelPrompt()

        // And back to the first of loop
        continue
    }

    // If User wants to exit the loop
    if (exitValues.includes(userInput)){
        break

    }

    // Do operation of counting the words
    const wordCounts = wordCounter(userInput)

    // Finally show the result to the user
    showResult(wordCounts)
}