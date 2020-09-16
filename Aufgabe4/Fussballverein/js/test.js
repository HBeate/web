let urlResults = "http://api.football-data.org/v2/competitions/2002/standings?season=2019";


/* function loadTableResults() { */
    fetch(urlResults, {
        headers: {
            "x-auth-token": "4aaa8f2fcfdb487482bbd4c60c7cf86d"
        }
        .then(response => response.json())
        .then(json => console.log(json))
          
    }).
    fetch('https://jsonplaceholder.typicode.com/todos/1')

    /* 
    fetch(urlResults, {
        headers: {
            "x-auth-token": "4aaa8f2fcfdb487482bbd4c60c7cf86d"
        }
    })
    .then(response => response.json())
        .then(function (data) {
            let html = "test";

            data.table.forEach(element => {
                
/*                  html += "<div class='row' data-id='" + element.id + "'><div class='col-sm'><img src='" + element.crestUrl + "' width='50px' alt='Club Logo'></img></div><div class='col-sm'>" + element.id + "</div><div class='col-sm'><a href='#' class='teamLinkPlayers'>" + element.name + "</a></div><div class='col-sm'>" + element.address + "</div><div class='col-sm'>" + element.email + "</div></div>"
 */ 
/*             });
            document.getElementsByClassName("tableResults").innerHTML = html;
        }).catch(function (err) {
            // There was an error
            console.warn('Something went wrong.', err);
        }); 
        
    }*/ 

