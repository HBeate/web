 window.onload = loadAllTodos(); 


document.getElementById("save").addEventListener("click", function () {
    saveTodo();
})


function saveTodo() {

    let todo = { "name": "4569"};
    fetch("http://localhost:8080/todos", {
        method: "POST",
        body: JSON.stringify(todo),
        headers: {
/*             Accept: "application/json", */
            "Content-type": "application/json"
        }
    })
        .then(function () {
            console.log("hello");
            alert("success");
            loadAllTodos();

        }).catch(function (err) {
            console.warn('Something went wrong.', err);
            alert("FEHLER");
        });
}

function loadAllTodos() {
    fetch("http://localhost:8080/todos").then(response => response.json())
        .then(function (data) {

            let html = "";
            data.forEach(element => {
                html += "<li>" + element.name + "</li>";
            });


            document.getElementById("todos").innerHTML = html;
        }).catch(function (err) {
            console.warn('Something went wrong.', err);
        });
}

/* function addTodo() {
    var newTodo = new Object();
    newTask.name = document.getElementById("inputTodo").value;

    var jsonString = JSON.stringify(newTodo);

    console.log(newTodo);

} */