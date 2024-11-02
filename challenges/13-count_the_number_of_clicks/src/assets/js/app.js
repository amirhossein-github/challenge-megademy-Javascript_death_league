/**
 * Store number of clicks.
 */
let clickCounts = 0

/**
 * This function managing the precess of the counting clicks.
 * From counting to display click counts on screen.
 */
function clickCounter(){
    // 1) Counting
    clickCounts += 1

    // 2) Display number of clicks
    document.getElementById('click-number').textContent = clickCounts

    // 2) If: 10, 20, 30, ....
    if (clickCounts % 10 === 0){
        showResult('به حد نصاب رسید')

    } else {
        showResult('')

    }
}

/**
 * This function manages the display of output to the user.
 * @param {*} text Text to display on HTML.
 */
function showResult(text){
    document.getElementById('result').textContent = text

}

// Active submit listener.
document.getElementById('user-submit').addEventListener('click', clickCounter)