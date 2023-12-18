function addTask() {
    let buttonAdd = document.querySelector('#buttonAdd');
    let inputEcriture = document.querySelector('#inputEcriture');

    buttonAdd.addEventListener('click', function (event) {
        event.preventDefault();

        if (inputEcriture.value == "") {
            alert ("veuillez remplir ce formulaire")
        } else {
            const createList = document.createElement("li");
            createList.innerHTML = inputEcriture.value;
            let ol = document.querySelector("ol");
            ol.appendChild(createList);
            inputEcriture.value = "";
        }
        

    })
    
};

function displayElement(title) {
    title.remove();
    let title = document.querySelector("#title");
    let ol = document.querySelector("ol");
    if (ol.innerHTML == "") {
        title.style.display = "block";
    }
    
}


displayElement();
addTask();




