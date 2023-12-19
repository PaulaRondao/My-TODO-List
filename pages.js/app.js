let taskList = document.querySelector(".taskList");
let title = document.querySelector("#title");



function editTask(task) {
    let taskElement = task.firstChild;
    let taskText = taskElement.textContent;

    let newTaskText = prompt('Modifier la tâche:', taskText);
    if (newTaskText === "" || newTaskText === null) {
        return;
    }
    taskElement.textContent = newTaskText;

}


function doneTask(task) {
    let taskElement = task.firstChild;

    if (taskElement && taskElement.nodeType === 3) {

        let span = document.createElement('span');
        span.style.textDecoration = 'line-through';
        span.textContent = taskElement.textContent;

        task.replaceChild(span, taskElement);
    }
}



function deleteTask(task) {
    taskList.removeChild(task);

    if (taskList.childElementCount === 0) {
        return title.style.display = "block";
    }
}



function addTask() {
    let buttonAdd = document.querySelector('#buttonAdd');
    let inputEcriture = document.querySelector('#inputEcriture');

    buttonAdd.addEventListener('click', function (event) {
        event.preventDefault();

        if (inputEcriture.value == "") {
            alert("veuillez ecrire votre objectif")

        } else {
            const createList = document.createElement("li");
            createList.innerHTML = inputEcriture.value;

            let editButton = document.createElement("button");
            editButton.innerHTML = `<ion-icon name="pencil" class="edit"></ion-icon>`;

            editButton.onclick = function () {
                editTask(createList)
            };

            let doneButton = document.createElement("button");
            doneButton.innerHTML = `<ion-icon name="checkmark-done-outline" class="done"></ion-icon>`

            doneButton.onclick = function () {
                doneTask(createList)
            };

            let deleteButton = document.createElement("button");
            deleteButton.innerHTML = `<ion-icon name="trash-outline" class="delete"></ion-icon>`

            deleteButton.onclick = function () {
                deleteTask(createList)
            };

            createList.appendChild(editButton);
            createList.appendChild(doneButton);
            createList.appendChild(deleteButton);

            taskList.appendChild(createList);

            title.style.display = "none";

            inputEcriture.value = "";

        }
    })
};


function deleteAllTask() {
    let deleteAllButton = document.querySelector(".clearAll");
    deleteAllButton.addEventListener('click', function () {
        while (taskList.firstChild) {
            taskList.removeChild(taskList.firstChild);
        }
        title.style.display = "block";
    });
}



deleteAllTask();
addTask();




