function registerEvents() {
    document.getElementById("loadTodos").addEventListener("click", function () {
        loadTodos();
    
    })
    document.getElementById("loadUsers").addEventListener("click", function () {
        loadUsers();
    })
}

function loadTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos').then(function (response) {
        // The API call was successful!
        return response.json();
    }).then(function (data) {
        let html ="";
        // This is the JSON from our response
        data.forEach(todo => {
            html += "<li>" + todo.title +  "</li>";
            
        });
        document.getElementById("list").innerHTML = html;
    }).catch(function (err) {
        // There was an error
        console.warn('Something went wrong.', err);
    });
}
function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users').then(function (response) {
        // The API call was successful!
        return response.json();
    }).then(function (data) {
        let html ="";
        // This is the JSON from our response
        data.forEach(user => {
            html += "<li>" + user.name +  "</li>";
            
        });
        document.getElementById("list").innerHTML = html;
    }).catch(function (err) {
        // There was an error
        console.warn('Something went wrong.', err);
    });
}
registerEvents();
