/**
 * This function generate new id with method "Date.now()".
 * @returns Random ID
 */
function idGenerator(){
    return Date.now()

}

/**
 * This function remove task with event lister click
 * @param {EventListener} e Default Event Listener
 */
function deleteTask(e){
    // Find id of task
    const taskID = e.target.parentNode.id

    // Select the task with ID and remove it
    document.getElementById(taskID).remove()
}

/**
 * This function toggle the task is done or in todo mode
 * @param {EventListener} e Default Event Listener
 */
function toggleTask(e){
    const task = e.target.parentNode
    if(task.className === 'todo'){
        task.className = 'done'

    } else {
        task.className = 'todo'

    }
}

/**
 * This function managing add new task to HTML content
 */
function addNewTask(){
    // Get user input text task
    const taskText = document.getElementById('user-input').value

    // Generate id
    const id = idGenerator()

    // Create template for task
    const div = document.createElement('div')
    div.id = id
    div.classList.add('todo')

    const span = document.createElement('span')
    span.textContent = taskText

    const inputDelete = document.createElement('input')
    inputDelete.classList.add('user-submit-task')
    inputDelete.id = 'task-remover'
    inputDelete.value = 'delete'
    inputDelete.type = 'submit'
    inputDelete.addEventListener('click', deleteTask)

    const inputTodo = document.createElement('input')
    inputTodo.classList.add('user-submit-task')
    inputTodo.id = 'task-todo'
    inputTodo.value = 'todo'
    inputTodo.type = 'submit'
    inputTodo.addEventListener('click', toggleTask)

    // Add task to HTML
    div.appendChild(span)
    div.appendChild(inputDelete)
    div.appendChild(inputTodo)
    document.getElementById('task-container').appendChild(div)
    
}

// Active submit listener
document.getElementById('user-submit').addEventListener('click', addNewTask)