// Selectors
let secondTitle = document.querySelector("#title");
let buttonAdd = document.querySelector('#buttonAdd');
let inputEcriture = document.querySelector('#inputEcriture');
let taskList = document.querySelector(".taskList");



// Function

// Add tasks
function addTask() {
    buttonAdd.addEventListener('click', function (event) {
        // Prevents form from relaoding;
        event.preventDefault();

        if (inputEcriture.value == "") {
            alert("Tu dois écrire une tâche ou un objectif si tu préfère")

        } else {
            // Create a li
            const createList = document.createElement("li");
            createList.innerHTML = inputEcriture.value;

            // Clearing the input
            inputEcriture.value = "";

            // Create the button edit
            let editButton = document.createElement("button");
            editButton.innerHTML = '<i class="icons8-edit"></i>';
            editButton.classList.add('edit');
            
            editButton.onclick = function () {
                editTask(createList)
            };

            // Create the button done
            let doneButton = document.createElement("button");
            doneButton.innerHTML = '<i class="icons8-done"></i>';
            doneButton.classList.add('done');

            doneButton.onclick = function () {
                doneTask(createList)
            };

            // Create the button delete
            let deleteButton = document.createElement("button");
            deleteButton.innerHTML = '<i class="icons8-delete"></i>';
            deleteButton.classList.add('delete');            

            deleteButton.onclick = function () {
                deleteTask(createList)
            };

            // Create a task and display it in the list
            taskList.appendChild(createList);

            // Display all the button when a task is create
            createList.appendChild(editButton);
            createList.appendChild(doneButton);
            createList.appendChild(deleteButton);

            // Don't display the second title
            secondTitle.style.display = "none";
        }
    })
};


// Change your task 
function editTask(task) {
    let taskElement = task.firstChild;
    let taskText = taskElement.textContent;

    // Replace by your new tasks
    let newTaskText = prompt('Tu peux modifier ta tâche :', taskText);
    if (newTaskText === "" || newTaskText === null) {
        return;
    }
    taskElement.textContent = newTaskText;

}

// Strike your task when it's done
function doneTask(task) {
    let taskElement = task.firstChild;

    // Check first if it's a text 
    if (taskElement && taskElement.nodeType === 3) {

        // Then create a style 
        let span = document.createElement('span');
        span.style.textDecoration = 'line-through';
        span.textContent = taskElement.textContent;

        // and replace it as strikeout text
        task.replaceChild(span, taskElement);
    }
}


// Delete a task
function deleteTask(task) {
    taskList.removeChild(task);

    // Let appear the second title when the list of task is empty
    if (taskList.childElementCount === 0) {
        return secondTitle.style.display = "block";
    }
}

// Delete all the tasks
function deleteAllTask() {
    let deleteAllButton = document.querySelector(".clearAll");
    deleteAllButton.addEventListener('click', function () {
        // While there are some tasks delete it
        while (taskList.firstChild) {
            taskList.removeChild(taskList.firstChild);
        }
        // Display the second when it's done
        secondTitle.style.display = "block";
    });
}



deleteAllTask();
addTask();




