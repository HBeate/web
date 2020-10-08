window.onload = loadAllTodos();


document.getElementById("save").addEventListener("click", function () {
    saveTodo();
})

document.getElementById("clearList").addEventListener("click", function(){
    clearAllTodos();
})


function saveTodo() {

    let todo = { "name": document.getElementById("inputName").value, "description": document.getElementById("inputTask").value };

    fetch("http://localhost:8080/todos", {
        method: "POST",
        body: JSON.stringify(todo),
        headers: {
            "content-type": "application/json"
        }
    }).then(function (data) {
        loadAllTodos();
    }).catch(function (err) {
        console.warn('Something went wrong.', err);
        alert("FEHLER" + err);
    });
}

function loadAllTodos() {
    fetch("http://localhost:8080/todos").then(response => response.json())
        .then(function (data) {

            let html = "";
            
            data.forEach(element => {
                let checked = "";               //
                if (element.done == true) {     //      let checked = element.done?"checked":"";
                    checked = "checked";        //        
                }
                html += "<li><input type='checkbox' onclick='checkTodo(this," + element.id+ ")' "+ checked +">" + element.name +" " + element.description + "<button onclick='clearOneTodo(" + element.id + ")'>Delete Item</button></li>";
            });

            document.getElementById("todos").innerHTML = html;
        }).catch(function (err) {
            console.warn('Something went wrong.', err);
        });
}

function clearAllTodos(){
    fetch("http://localhost:8080/todos" , {
        method: "DELETE"
    }).then(function(data){
        loadAllTodos();
    }).catch(function(err){
        console.log(err);
    });

}

function clearOneTodo(id){
    fetch("http://localhost:8080/todos/"+ id, {
        method: "DELETE"
    }).then(function(data){
        loadAllTodos();
    }).catch(function(err){
        console.log(err);
    });
}

function checkTodo(element, id) {
    let isChecked = element.checked;
  let todo = {  done: isChecked };

  let url = "http://localhost:8080/todos/" + id;

  fetch(url, {
    method: "PUT",
    body:JSON.stringify(todo),
    headers: { "content-type": "application/json" },
  })
    
    .then(function (data) {
      loadAllTodos();
      console.log(todo);
    })
    .catch(function (err) {
      // There was an error
      console.warn("Something went wrong.", err);
    });
}  