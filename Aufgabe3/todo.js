
/***********************************
* TO-DO APP 
***********************************/

/*
https://www.google.com/search?q=create+javascript+object+from+input&oq=create+javascript+object+from+input&aqs=chrome..69i57j0l2.8348j0j4&sourceid=chrome&ie=UTF-8#kpvalbx=_c4E0X8WgOsa4kwWm8IWABQ25
*/
let tasks = [];
var isActive = false;
var rowLength = "";

const addTask = (ev) => {
    ev.preventDefault();  // to stop the form submitting
    if (document.getElementById("newToDo").value === "") {
        return;
    } 

    if (tasks !== "") {
        clearTable();
    }
    
    let task = {
        id: Date.now(),
        name: document.getElementById("newToDo").id,
        toDo: document.getElementById("newToDo").value,
    }

        tasks.push(task)
        document.getElementById('newToDo').value = ""; 

    for (let i = 0; i < tasks.length; i++) {

        var table = document.getElementById("myTable");
        var row = table.insertRow(i);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);

        var myCheckbox = document.createElement("INPUT");
        myCheckbox.setAttribute("type", "checkbox");
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


function emptyToDo() {

}

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
    for (let i = tasks.length - 1; i >= 0; i--) {
        document.getElementById("myTable").deleteRow(i);
    }
}

function deleteRow(row) {
    var x = row.parentNode.parentNode.rowIndex;
    document.getElementById("myTable").deleteRow(x);
    rowLength = document.getElementById("myTable").rows.length;
    if (rowLength == 1 & x == 0) {
        tasks = [];
    }
}

function numberToDos() {
    rowLength = document.getElementById("myTable").rows.length;
    document.getElementById("heading").innerHTML = "You have " + rowLength + " to-dos";
}

function deleteAllRows() {
    for (let i = tasks.length - 1; i >= 0; i--) {
        document.getElementById("myTable").deleteRow(i);
        tasks = [];
        numberToDos();
    }
}

