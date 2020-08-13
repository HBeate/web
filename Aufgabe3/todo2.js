/***********************************
* TO-DO APP - without Array
***********************************/
isFiltered = false;
toDoArray = [];
var rowLength = "";
var isActive = true;
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

 //   for (let i = 0; i < toDoArray.length; i++) {

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
            delete toDoArray[i];
            filterArray();
            console.log("Array after deleting a row: " + toDoArray);
            deleteRow(this);

            numberToDos();
        };
        cell3.appendChild(button);
        numberToDos();
  //  }
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
    rowLength = document.getElementById("myTable").rows.length;
    if (rowLength == 1 & x == 0) {
        toDoArray = [];
    }
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
        numberToDos();
    }
}

function numberToDos() {
    rowLength = document.getElementById("myTable").rows.length;
    document.getElementById("heading").innerHTML = "You have " + rowLength + " to-dos";
}

