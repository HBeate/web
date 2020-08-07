
/***********************************
 * ONLINE VERSCHLÜSSELUNGSTOOL
***********************************/

var isDecode = true;
messageArray = [];
var myNewMessage = "";

function selectOffset() {
    var offset = document.getElementById('offset').value;
    console.log(offset);
}

function codeMessage(isDecode) {
    this.isDecode = isDecode;
    var decoded = document.getElementById(!this.isDecode ? 'decoded' : 'coded').value;
    var newLetter = decoded !== myNewMessage;

    if (decoded === "")  // catches Shift-key (e.g. capital letters), so it won't be seen as a keyup
        return;
    if (newLetter) {
        messageArray = [];
        var offset = document.getElementById('offset').value;
        for (let i = 0; i < decoded.length; i++) {
            let myChar = decoded.charAt(i);
            messageArray.push(myChar);   
        }
        console.log("Array " + messageArray);

        document.getElementById(this.isDecode ? 'coded' : 'decoded').value = decoded;
        encrypt(offset);
    } else {
        messageArray = [];
        myNewMessage = "";
        for (let i = 0; i < decoded.length; i++) {
            messageArray.push(decoded.charAt(i));
            encrypt(offset);
        }
    }
}
function encrypt(offset) {
    offset = parseInt(offset);
    var toEncrypt = "";
    for (let i = 0; i < messageArray.length; i++) {
        toEncrypt = toEncrypt + messageArray[i];
        if (isDecode) {
            messageArray[i] = String.fromCharCode(toEncrypt.charCodeAt(i) - offset);
            myNewMessage = myNewMessage + messageArray[i];
        } else {
            messageArray[i] = String.fromCharCode(toEncrypt.charCodeAt(i) + offset);
            myNewMessage = myNewMessage + messageArray[i];
        }

    }


    document.getElementById(!this.isDecode ? 'coded' : 'decoded').value = myNewMessage;
}

