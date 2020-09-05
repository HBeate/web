

//JSON javascript object notation
/* var task1 = { name: "putzen", isDone: false, responsible: "Beate" };
var task2 = { name: "schwimmen", isDone: true, responsible: "Alina" };
 */

const tasks = [];
console.log(tasks);
printTaskList();

document.getElementById("addTask").addEventListener("click", function () {
    addTask();
});

document.getElementById("txtResponsible").addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
/*         alert("enter"); */
        addTask();
    }

});

/* function checkInput(){
    if(document.getElementById("txtNewTask").value === "" || document.getElementById("txtResponsible").value === ""){
        alert("Please enter a Task");
        return;
    }else{
addTask();
    }
} */
function addTask() {
/*     if(document.getElementById("txtNewTask").value === "" || document.getElementById("txtResponsible").value === ""){
        alert("Please fill out form");
        return;
    }else{ */
    let taskName = document.getElementById("txtNewTask").value;
    let taskResponsible = document.getElementById("txtResponsible").value;
    let task = { name: taskName, responsible: taskResponsible, isDone: false }

    tasks.push(task);
    printTaskList();
    document.getElementById("txtNewTask").value = "";
    document.getElementById("txtResponsible").value = "";

}
function printTaskList() {
    document.getElementById("taskList").innerHTML = getHTMLTasks();
}
function markTask(element) {
    let index = element.attributes["data-index"].value;

    let isChecked = element.checked;
    tasks[index].isDone = isChecked;
    printTaskList();
}

function deleteTask(element) {
    let index = element.attributes["data-index"].value;
    tasks.splice(index, 1);
    printTaskList();
}

function getHTMLTasks() {
    let html = "";
    let index = 0;

    tasks.forEach(element => {
        let checked = "";
        if (element.isDone) {
            checked = "checked";
        }
        html += "<li><input  onclick='markTask(this)' name='checkbox' data-index='" + index + "' type='checkbox'" + checked + "/>" + "&nbsp" + element.name + "&nbsp" + element.responsible + "&nbsp" /* + index + "&nbsp"  */+ "<button type='button' onCLick='deleteTask(this)' name='button' data-index='" + index + "'>X</li>" /* an das HTML anhängen */

/*         html += "<li><div class='checkBox'><input  onclick='markTask(this)' name='checkbox' data-index='" + index + "' type='checkbox'" + checked + "/></div><div class='task'>" + element.name + "</div><div class='resposible'>" + element.responsible + "</div><div class='index'>" + index + "</div>" + "<div class='deleteButton'><button type='button' onCLick='deleteTask(this)' name='button' data-index='" + index + "'>X</div></li>" /* an das HTML anhängen */
 
        console.log(element);
        index++;
    });
    return html;
}