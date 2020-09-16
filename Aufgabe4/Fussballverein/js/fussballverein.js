let urlTeams = "http://api.football-data.org/v2/competitions/2002/teams?season=2019";
let urlPlayers = "http://api.football-data.org/v2/teams/";
let urlResults = "http://api.football-data.org/v2/competitions/2002/standings?season=2019";
let token = '4aaa8f2fcfdb487482bbd4c60c7cf86d';

function loadAllTeams() {
    fetch(urlTeams, {
        headers: {
            "x-auth-token": token,

        }
    }).then(response => response.json())
        .then(function (data) {
            let html = "";

            data.teams.forEach(element => {

                html += "<div class='row' data-id='" + element.id + "'><div class='col-sm'><img src='" + element.crestUrl + "' width='50px' alt='Club Logo'></img></div><div class='col-sm'>" + element.id + "</div><div class='col-sm'><a href='#' class='teamLinkPlayers'>" + element.name + "</a></div><div class='col-sm'>" + element.address + "</div><div class='col-sm'>" + element.email + "</div></div>"

            });
            document.getElementById("teams").innerHTML = html;
        }).catch(function (err) {
            // There was an error
            console.warn('Something went wrong.', err);
        });
}
// ich hole mir die einzelnen Spieler vom jeweiligen Team
function loadPlayersForTeam(team, id) {
    fetch(urlPlayers + id, {
        headers: {
            "x-auth-token": token
        }
    }).then(response => response.json())
        .then(function (data) {
            let html = "";
            data.squad.forEach(element => {
                html += "<div class='col '><div class='card text-center ' '><img src='../media/kampfmannschaft/player.jpg' class='card-img-top' alt='Player Picture'><div class='card-body'><h5 class='card-title'>" + element.name + "</h5><p class='card-text'>" + element.dateOfBirth + "<br>" + element.position + "</p></div></div></div>"
            });
            document.getElementById("squad").innerHTML = html;
            document.getElementById("teamName").innerHTML = 'Spieler ' + team;

        }).catch(function (err) {
            // There was an error
            console.warn('Something went wrong.', err);
        });

}
function loadResults() {
    fetch(urlTeams, {
        headers: {
            "x-auth-token": token
        }
    }).then(response => response.json())
        .then(function (data) {
            let html = "";

            data.standings[0].table.forEach(element => {

                html+= "<th scope='row'>"+ position+"</th><td>.</td><td><img src='"+ crestUrl+ " alt=''></td><td>"+element.name+"</td><td>"+playedGames+"</td><td>"+won+"</td><td>"+draw+"</td><td>"+lost+"</td><td>"+goalsFor+":"+goalsAgainst+"</td><td>"+goalDifference+"</td><td>"+points+"</td>"

            });
            document.getElementById("tableResults").innerHTML = html;
        }).catch(function (err) {
            // There was an error
            console.warn('Something went wrong.', err);
        });
}

loadAllTeams();
loadPlayersForTeam('team1', 5);
loadResults();




