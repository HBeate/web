let urlTeams = "http://api.football-data.org/v2/competitions/2002/teams";
let players = "http://api.football-data.org/v2/teams/";
function loadAllTeams() {
    fetch(urlTeams, {
        headers: {
            "x-auth-token": "4aaa8f2fcfdb487482bbd4c60c7cf86d"
        }
    }).then(response => response.json())
        .then(function (data) {
            let html = "";

            data.teams.forEach(element => {
                /*             html += "<li><img src='"+ element.crestUrl+"' width='50px' alt='Club Logo'></img>" +  element.name + "</li>";
                 */
                html += "<div class='row' data-id='" + element.id + "'><div class='col-sm'><img src='" + element.crestUrl + "' width='50px' alt='Club Logo'></img></div><div class='col-sm'>" + element.name + "</div><div class='col-sm'>" + element.address + "</div><div class='col-sm'>" + element.email + "</div></div>"

            });
            document.getElementById("teams").innerHTML = html;
                 }).catch(function (err) {
                    // There was an error
                    console.warn('Something went wrong.', err); 
        });
}
// ich hole mir die einzelnen Spieler vom jeweiligen Team
function loadPlayersForTeam(id) {
    fetch(players + id, {
        headers: {
            "x-auth-token": "4aaa8f2fcfdb487482bbd4c60c7cf86d"
        }
    }).then(response => response.json())
        .then(function (data) {

            let htmlPlayer = "";
            data.squad.forEach(element => {
                

            });

        }).catch(function (err) {
            // There was an error
            console.warn('Something went wrong.', err); 
        });
}

loadAllTeams();
loadPlayersForTeam(1);




