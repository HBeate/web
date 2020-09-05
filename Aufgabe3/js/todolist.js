

//JSON javascript object notation
/* var task1 = { name: "putzen", isDone: false, responsible: "Beate" };
var task2 = { name: "schwimmen", isDone: true, responsible: "Alina" };
 */

const tasks = [];
console.log(tasks);
printTaskList();





document.getElementById("addTask").addEventListener("click", function () {
    addTask();
})

function addTask() {
    let taskName = document.getElementById("txtNewTask").value;
    let taskResponsible = document.getElementById("txtResponsible").value;
    let task = { name: taskName, responsible: taskResponsible, isDone: false }
    tasks.push(task);
    printTaskList();
}
function printTaskList() {
    document.getElementById("taskList").innerHTML = getHTMLTasks();
}
function markTask(element){
    let index = element.attributes["data-index"].value
    
    let isChecked = element.checked;
    tasks[index].isDone = isChecked;
printTaskList();

/*     alert("markiert" + element.checked + element.attributes["data-index"].value);
 */
}
function getHTMLTasks() {
    let html = "";
let index = 0;

    tasks.forEach(element => {
        let checked = "";
        if(element.isDone){
            checked ="checked";
        }
        html += "<li><input  onclick='markTask(this)' name='checkbox' data-index='" + index +
         "' type='checkbox'" + checked + "/>" + element.name + "-" + element.responsible + "-" + 
         index +"</li>" /* an das HTML anhängen */
        
        
        console.log(element);
        index++;
    });
    return html;
}