

/***********************************
 * PASSWORTSCHUTZ
 ***********************************/


/*const names = [
    { usrname: "Lara", pw: 3101 },
    { usrname: "Marvin", pw: 2811 },
    { usrname: "Alina", pw: 2405 },
    { usrname: "Lukas", pw: 2404 }
]

function clickLogin() {

    var name = document.getElementById("usrname").value;
    var password = document.getElementById("pw").value;
    var hasFound = false;
    for (let i = 0; i < names.length; i++) {
        if (name === names[i].usrname && password == names[i].pw) {
            hasFound = true;
            break;
        }
    }
    if (hasFound) {
        window.location.href = "https://www.kooiker-fr.com";
    } else {
        alert("Input incorrect");
    }
}*/
/***********************************
 * CALCULATOR
 ***********************************/
var inputString = "";
function addCalculation(id) {
        var input = document.getElementById(id).value;
        inputString += input;
        console.log(inputString);
        document.getElementById('calculation').value=inputString;
}
function solveCalculation() {
       var result= "";
       result= eval(inputString);
       document.getElementById('result').value=result;
       inputString=result;
       result = ""
}
function clearAll(){
        document.getElementById('calculation').value="";
        document.getElementById('result').value="";
        inputString="";
}
