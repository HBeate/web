const names = [
   {usrname: "Lara", pw: 3101}, 
   {usrname: "Marvin", pw: 2811}, 
   {usrname: "Alina", pw: 2405}, 
   {usrname: "Lukas", pw: 2404}
]



function clickLogin(){

    var name = document.getElementById("usrname").value;
    var password = document.getElementById("pw").value;
    var hasFound = false;
    for(let i = 0; i < names.length; i ++){
        if (name === names[i].usrname && password == names[i].pw) {
            hasFound = true;
            break;
        }
    }

    if(hasFound){
        window.location.href = "https://www.kooiker-fr.com";
    } else {
        alert("falsch");
    }
    /*
    names.forEach(checkInput);
    function checkInput(name) {
        var name = document.getElementById("usrname");
        var password = document.getElementById("pw");
        if (name == usrname & password == pw) {
            window.location.href = "https://www.kooiker-fr.com";
        } else {
            alert("falsch");
        }
    }*/

}