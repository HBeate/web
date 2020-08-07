
/***********************************
 * ONLINE VERSCHLÜSSELUNGSTOOL
***********************************/
//var originalMessage = "";
//var encryptedMessage = "";
var isDecode = true;
messageArray = [];
var myNewMessage = "";


function selectOffset() {
    var offset = document.getElementById('offset').value;
    console.log(offset);
}
// you'll do it!!!!  ----- I guess I won't fucking do it...
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
            messageArray.push(myChar);  // here the individual character is an item in the array !!! TODO add delete option !!!
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

    var toEncrypt = messageArray[messageArray.length - 1];
    switch (toEncrypt) {
        case '!':
        case '?':
        case '.':
        case ',':
        case ';':
        case '-':
        case '(':
        case ')':
            //  Diese Sonderzeichen werden nicht verschlüsselt
            for (let i = 0; i < messageArray.length; i++) {
                //  myNewMessage = myNewMessage + toEncrypt;
                myNewMessage += messageArray[i];
            }
            break;
        default:
            for (let i = 0; i < messageArray.length; i++) {
                if (isDecode) {
                    messageArray[messageArray.length - 1] = String.fromCharCode(toEncrypt.charCodeAt(0) - offset);
                } else {
                    messageArray[messageArray.length - 1] = String.fromCharCode(toEncrypt.charCodeAt(0) + offset);
                }
                myNewMessage = myNewMessage + messageArray[i];
            }
/*            for (let i = 0; i < messageArray.length; i++) {
                myNewMessage = myNewMessage + messageArray[i];
            }*/
    } /*   if (isDecode) {
        document.getElementById(this.isDecode ? 'decoded' : 'coded').value = myNewMessage;
    } else {*/
    document.getElementById(!this.isDecode ? 'coded' : 'decoded').value = myNewMessage;
    //}
}