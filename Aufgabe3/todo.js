
/***********************************
* TO-DO APP
***********************************/

toDoArray = [];

// TODO - Why dosen't this work??????????????????????????????????????
var input = document.getElementById("newToDo");
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("submitBtn").click();
    }
});
//???????????????????????????????????????????????????????????????????

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
        cell2.innerHTML = "X";
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
    }
}
// TODO - try using this when you are deleting a specific row in the To-Do List
function deleteSpecificRow(delRow) {
    var i = delRow.parentNode.parentNode.rowIndex;
    document.getElementById("myTable").deleteSpecificRow(i);
}
