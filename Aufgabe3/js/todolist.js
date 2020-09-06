

//JSON javascript object notation
/* var task1 = { name: "putzen", isDone: false, responsible: "Beate" };
var task2 = { name: "schwimmen", isDone: true, responsible: "Alina" };
 */

const tasks = [];
let tasksFromLocalStorage ="";

/* printTaskList(); */

document.getElementById("addTask").addEventListener("click", function () {
    addTask();
});

document.getElementById("txtResponsible").addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        addTask();
    }

});

function addTask() {
    let taskName = document.getElementById("txtNewTask").value;
    let taskResponsible = document.getElementById("txtResponsible").value;
    if (taskName === "" || taskResponsible === "") {
        alert("Please fill in both fields");
        return;
    } else {
        let task = { name: taskName, responsible: taskResponsible, isDone: false }
        tasks.push(task);
        printTaskList();
        document.getElementById("txtNewTask").value = "";
        document.getElementById("txtResponsible").value = "";
        document.getElementById("txtNewTask").focus();
        numberToDos();
        console.log(tasksFromLocalStorage);
        storeTasks();
    }
}

function numberToDos() {
    var nrTasks = tasks.length;
    document.getElementById("nrTodos").innerHTML = "You have " + nrTasks + " to-dos";
}

function printTaskList() {
    document.getElementById("taskList").innerHTML = getHTMLTasks();
}

function markTask(element) {
    let index = element.attributes["data-index"].value;

    let isChecked = element.checked;
    tasks[index].isDone = isChecked;
    printTaskList();
    storeTasks();
}

function deleteTask(element) {
    let index = element.attributes["data-index"].value;
    tasks.splice(index, 1);
    printTaskList();
    document.getElementById("txtNewTask").focus();
    numberToDos();
    storeTasks();
}

function getHTMLTasks() {
    let html = "";
    let index = 0;

    tasks.forEach(element => {
        let checked = "";
        if (element.isDone) {
            checked = "checked";
        }

        html += "<li class='list-group-item'><div class='d-flex '><div class='p-2 bd-highlight'><input class='checkbox' onclick='markTask(this)' name='checkbox' data-index='" + index + "' type='checkbox'" + checked + "/></div>" + "<div class='p-2 flex-grow-1 bd-highlight'>" + element.name + "</div><div class='p-2 bd-highlight'>" + element.responsible + "</div><div class='p-2 bd-highlight'>"  /* + index  */ + "</div>" + "  <div class='p-2 bd-highlight'><button type='button'  onCLick='deleteTask(this)' name='button' class='btn btn-danger btn-primary btn-sm' data-index='" + index + "'>Delete</div></div></div></li>" /* an das HTML anhängen*/
/* 
        console.log(element); */
        index++;
    });
    return html;
}

// tasks auf localStorage speichern
function storeTasks() {
    localStorage.setItem("toDoList", JSON.stringify(tasks));
}

//Daten von localStorage holen und Array füllen
function getStoredTasks() {
    tasks = [];
    //   tasks.push(document.getElementById("toDoList").value);
     tasks = JSON.parse(localStorage.getItem('toDoList'));
    localStorage.setItem('toDoList', JSON.stringify(tasks));
    //------------^store the item by stringify--^
}
function deleteAllTasks(){
    tasks.length=0;
    numberToDos();
    printTaskList();
}