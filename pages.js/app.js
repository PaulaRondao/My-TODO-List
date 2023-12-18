let taskList = document.querySelector(".taskList");

function editTask(task) {
    let taskElement = task.firstChild;
    let taskText = taskElement.textContent;

    let newTaskText = prompt('Modifier la tâche:', taskText);
    if (newTaskText === "" || newTaskText === null) {
        return;
    }
    taskElement.textContent = newTaskText
}

function doneTask(task) {
    taskList.s
}

function deleteTask(task) {
    taskList.removeChild(task);
}



function addTask() {
    let buttonAdd = document.querySelector('#buttonAdd');
    let inputEcriture = document.querySelector('#inputEcriture');

    buttonAdd.addEventListener('click', function (event) {
        event.preventDefault();

        if (inputEcriture.value == "") {
            alert("veuillez remplir ce formulaire")

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

            inputEcriture.value = "";

        }
    })
};

// function displayElement(title) {
//     title.remove();
//     let title = document.querySelector("#title");
//     let ol = document.querySelector("ol");
//     if (ol.innerHTML == "") {
//         title.style.display = "block";
//     }

// }


// displayElement();
addTask();




