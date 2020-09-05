/***********************************
* TO-DO APP - without Array
***********************************/

var rowLength = "";
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

    document.getElementById('newToDo').value = "";

        var table = document.getElementById("myTable");
        rowLength = document.getElementById("myTable").rows.length;
        var row = table.insertRow(rowLength);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);

        var myCheckbox = document.createElement("INPUT");
        myCheckbox.setAttribute("type", "checkbox");
        cell1.appendChild(myCheckbox);

        cell2.innerHTML = newToDo;
        var button = document.createElement("button");
        button.innerHTML = "X";

        button.onclick = function () {
            deleteRow(this);
            numberToDos();
        };
        cell3.appendChild(button);
        numberToDos();
}


function deleteRow(row) {
    var x = row.parentNode.parentNode.rowIndex;
    document.getElementById("myTable").deleteRow(x);
    rowLength = document.getElementById("myTable").rows.length;
    if (rowLength == 1 & x == 0) {
        toDoArray = [];
    }
}

function clearTable() {
myTable.innerHTML = "";
numberToDos();
}

function numberToDos() {
    rowLength = document.getElementById("myTable").rows.length;
    document.getElementById("heading").innerHTML = "You have " + rowLength + " to-dos";
}


