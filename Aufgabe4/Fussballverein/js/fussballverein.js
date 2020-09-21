let urlLeagues = "https://api.football-data.org/v2/competitions?plan=TIER_ONE";
let urlTeams = "https://api.football-data.org/v2/competitions/"; /*2002/teams?season=2019"; */
let urlPlayers = "https://api.football-data.org/v2/teams/";
let urlResults = "https://api.football-data.org/v2/competitions/2002/standings?season=2019";
let token = '4aaa8f2fcfdb487482bbd4c60c7cf86d';

function loadAllFreeLeagues() {
    var source = document.getElementById("freeLeagues-template").innerHTML;
    var template = Handlebars.compile(source);

    fetch(urlLeagues, {
        headers: {
            "x-auth-token": token,
        }
    }).then(response => response.json())
        .then(function (data) {
            let html = "";

            data.competitions.forEach(element => {
                console.log(template(element));
                html += template(element);

/*                 html += "<tr><td><img src='" + element.area.ensignUrl + "' width='50px' alt='Club Logo'></img></td/><td><a href='#' class='teamLinkPlayers' onclick='loadAllTeams(" + element.id + ")'>" + element.name + "</a></td><td>" + element.area.name + "</td><td>" + element.area.countryCode + "</td></tr>";
 */            });
            document.getElementById("leagues").innerHTML = html;
        }).catch(function (err) {
            console.warn('Something went wrong.', err);
        });
}
// ich hole mir die deutschen Teams
function loadAllTeams(id) {
    var source = document.getElementById("team-template").innerHTML;
    var template = Handlebars.compile(source);

    let url = urlTeams + id + "/teams?season=2019";
    fetch(url, {
        headers: {
            "x-auth-token": token,

        }
    }).then(response => response.json())
        .then(function (data) {
            let html = "";


            data.teams.forEach(element => {
                /*                 console.log(template(element)); */


                html += template(element);
                /*                 html += "<div class='row' data-id='" + element.id + "'><div class='col-sm'><img src='" + element.crestUrl + "'  width='50px' alt='Club Logo'></img></div><div class='col-sm'>" + element.id + "</div><div class='col-sm'><a href='#' class='teamLinkPlayers' onclick='loadPlayersForTeam(" + element.id + ")'>" + element.name + "</a></div><div class='col-sm'>" + element.address + "</div><div class='col-sm'>" + element.email + "</div></div>"
                 */                // 


            });
            document.getElementById("teams").innerHTML = html;
            document.getElementById("teamsJump").innerHTML = data.competition.name;
        }).catch(function (err) {
            // There was an error
            console.warn('Something went wrong.', err);
        });
}
// ich hole mir die einzelnen Spieler vom jeweiligen Team
function loadPlayersForTeam(id) {
    var source = document.getElementById("playersForTeam-template").innerHTML;
    var template = Handlebars.compile(source);

    let url = urlPlayers + id;
    fetch(url, {
        headers: {
            "x-auth-token": token
        }
    }).then(response => response.json())
        .then(function (data) {
            let html = "";

            data.squad.forEach(element => {
                /*                 let bdate = new Date(element.dateOfBirth);
                                birthdate = bdate.toLocaleDateString();
                                 */
                html += template(element);



                /*                 html += "<div class='col '><div class='card text-center ' '><img src='../media/player_dummy.jpg' class='card-img-top' alt='Player Picture'><div class='card-body'><h5 class='card-title'>" + element.name + "</h5><p class='card-text'>" + birthdate + "<br>" + element.position + "</p></div></div></div>"
                 */
            });
            document.getElementById("squad").innerHTML = html;
            document.getElementById("teamName").innerHTML = 'Spieler von ' + data.name;

        }).catch(function (err) {
            // There was an error
            console.warn('Something went wrong.', err);
        });

}
// ich hole mir die Ergebnistabelle
function loadResults() {
    var source = document.getElementById("results-template").innerHTML;
    var template = Handlebars.compile(source);

    fetch(urlResults, {
        headers: {
            "x-auth-token": token
        }
    }).then(response => response.json())
        .then(function (data) {
            let html = "";

            data.standings[0].table.forEach(element => {
                html += template(element);
                /*                 html += "<tr><th scope='row'>" + element.position + "</th><td><img src='" + element.team.crestUrl + "' width='30px'  alt=''></td><td>" + element.team.name + "</td><td>" + element.playedGames + "</td><td>" + element.won + "</td><td>" + element.draw + "</td><td>" + element.lost + "</td><td>" + element.goalsFor + ":" + element.goalsAgainst + "</td><td>" + element.goalDifference + "</td><td>" + element.points + "</td></tr>"
                 */
            });
            document.getElementById("tableResults").innerHTML = html;
        }).catch(function (err) {
            // There was an error
            console.warn('Something went wrong.', err);
        });
}

loadAllFreeLeagues();
loadAllTeams(2002);
loadPlayersForTeam(1);
loadResults();



