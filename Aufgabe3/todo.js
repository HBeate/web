
/***********************************
* TO-DO APP 
***********************************/

let tasks = [];
var isChecked = false;
var rowLength = "";
var id = 1;
var myCheckbox = "";

const addTask = (event) => {
    event.preventDefault();  // to stop the form submitting
    if (document.getElementById("newToDo").value === "") {
        return;
    }

    if (tasks !== "") {
        clearTable();
    }

    let task = {
        id: id,
        name: document.getElementById("newToDo").id,
        toDo: document.getElementById("newToDo").value,
        isChecked: false
    }

    id = id + 1;
    tasks.push(task)
    document.getElementById('newToDo').value = "";

    //  for display purposes only
    console.warn('added', { tasks });
    let pre = document.querySelector('#msg pre');
    pre.textContent = '\n' + JSON.stringify(tasks, '\t', 2);

    for (let i = 0; i < tasks.length; i++) {

        var table = document.getElementById("myTable");
        var row = table.insertRow(i);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);

        myCheckbox = document.createElement("INPUT");
        myCheckbox.setAttribute("type", "checkbox");
        myCheckbox.id = task.id;

        myCheckbox.onclick = function () {
            //        HIER BEKOMME ICH DIE FEHLERMELDUNG: Cannot read property 'checked' of undefined
            var x = document.getElementById("myTable").myCheckbox.checked;
            console.log("the checkbox " + tasks[i].id + " is " + tasks[i].isChecked)
        }
        console.log("Checkbox ID: " + myCheckbox.id);
        cell1.appendChild(myCheckbox);
        cell2.innerHTML = tasks[i].toDo;
        var xButton = document.createElement("button");
        xButton.innerHTML = "X";

        xButton.onclick = function () {
            delete tasks[i];
            filterArray();
            console.log("Array after deleting a row: " + tasks);
            deleteRow(this);

            numberToDos();
        };
        cell3.appendChild(xButton);
        numberToDos();
    }

}
document.addEventListener('DOMContentLoaded', () => { // calls the event when the button is clicked
    document.getElementById('submitBtn').addEventListener('click', addTask);
});
var input = document.getElementById("newToDo"); // ENTER key also calls the 
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("submitBtn").click();

    }
});

function filterArray() {
    var filtered = tasks.filter(function (newToDo) {
        return newToDo != null;
    });

    console.log(filtered);
    tasks = [];
    tasks = filtered;
    console.log("Array after filterArray: " + tasks);
}

function clearTable() {
    for (let i = rowLength - 1; i >= 0; i--) {
        document.getElementById("myTable").deleteRow(i);
    }
}

function numberToDos() {
    rowLength = document.getElementById("myTable").rows.length;
    document.getElementById("heading").innerHTML = "You have " + rowLength + " to-dos";
}

function deleteRow(row) {
    var x = row.parentNode.parentNode.rowIndex;
    document.getElementById("myTable").deleteRow(x);
    rowLength = document.getElementById("myTable").rows.length;
    if (rowLength == 1 & x == 0) {
        tasks = [];
        id = 1;
    }
}

function deleteAllRows() {
    for (let i = tasks.length - 1; i >= 0; i--) {
        document.getElementById("myTable").deleteRow(i);
        tasks = [];
        numberToDos();
        id = 1;
    }
}


