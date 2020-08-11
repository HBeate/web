
/***********************************
* TO-DO APP
***********************************/
isFiltered = false;
toDoArray = [];

var input = document.getElementById("newToDo");
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("submitBtn").click();
    }
});

function addToDo() {
    var newToDo = document.getElementById('newToDo').value;
    if (newToDo == "") {
        return;
    }

    if (toDoArray !== "") {
        clearTable();
    }

    toDoArray.push(newToDo);

    console.log("Array: " + toDoArray);
    document.getElementById('newToDo').value = "";

    for (let i = 0; i < toDoArray.length; i++) {

        var table = document.getElementById("myTable");
        var row = table.insertRow(i);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = toDoArray[i];
        var button = document.createElement("button");
        button.innerHTML = "X";

        button.onclick = function () {
            delete toDoArray[i];
            filterArray();
            console.log("Array after deleting a row: " + toDoArray);
            deleteRow(this);

            numberToDos();
        };
        cell2.appendChild(button);
        numberToDos();
    }
}


function filterArray() {
    var filtered = toDoArray.filter(function (el) {
        return el != null;
    });

    console.log(filtered);
    toDoArray = [];
    toDoArray = filtered;
    console.log("Array after filterArray: " + toDoArray);
}
function deleteRow(row) {
    var x = row.parentNode.parentNode.rowIndex;
    document.getElementById("myTable").deleteRow(x);
}
function clearTable() {

    for (let i = toDoArray.length - 1; i >= 0; i--) {
        document.getElementById("myTable").deleteRow(i);
    }
}

function deleteAllRows() {
    for (let i = toDoArray.length - 1; i >= 0; i--) {
        document.getElementById("myTable").deleteRow(i);
        toDoArray = [];
    }
}

function numberToDos() {
    var rowLength = document.getElementById("myTable").rows.length;
    document.getElementById("heading").innerHTML = "You have " + rowLength + " to-dos";
}

/* function clearTable() {
    var x = document.getElementById("myTable").rows.length;
    for (let i = x; i > 0; i--) {
        document.getElementById("myTable").deleteRow(i);
    }
}*/

/* function deleteAllRows() {
    var x = document.getElementById("myTable").rows.length;
    for (let i = x; i > 0; i--) {
        document.getElementById("myTable").deleteRow(i);
        toDoArray = [];
    }
}*/