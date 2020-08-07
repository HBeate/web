
/***********************************
 * ONLINE VERSCHLÜSSELUNGSTOOL
***********************************/
//var originalMessage = "";
//var encryptedMessage = "";
var myMessage = "";
var isDecode = true;
messageArray = [];


function selectOffset() {
    var offset = document.getElementById('offset').value;
    console.log(offset);
}
// you'll do it!!!!  ----- I guess I won't fucking do it...
function codeMessage(newLetter, isDecode) {
    this.isDecode = isDecode;
    var decoded = document.getElementById(!this.isDecode ? 'decoded' : 'coded').value;

    if(decoded === "")  // catches Shift-key (e.g. capital letters), so it won't be seen as a keyup
        return;
    var offset = document.getElementById('offset').value;

    for (let i = 0; i < decoded.length; i++) {
        var myChar = decoded.charAt(i);
        myMessage = myMessage + myChar;
    }
    console.log("message " + myMessage);
    if (newLetter)
        messageArray.push(myChar);  // here the individual character is an item in the array !!! TODO add delete option !!!
    else {
        messageArray = [];
        for (let i = 0; i < decoded.length; i++) {
            messageArray.push(decoded.charAt(i));
            encrypt(offset);
        }
    }

    myMessage = "";
    myChar = "";
    console.log("Array " + messageArray);

    if (newLetter)
        document.getElementById(this.isDecode ? 'coded' : 'decoded').value = decoded;

    if (newLetter)
        encrypt(offset);
}
function encrypt(offset) {
    offset = parseInt(offset);
    var myNewMessage = "";
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
            if (isDecode) {
                messageArray[messageArray.length - 1] = String.fromCharCode(toEncrypt.charCodeAt(0) - offset);
            } else {                         
                messageArray[messageArray.length - 1] = String.fromCharCode(toEncrypt.charCodeAt(0) + offset);
            }
            for (let i = 0; i < messageArray.length; i++) {
                myNewMessage = myNewMessage + messageArray[i];
            }
    } /*   if (isDecode) {
        document.getElementById(this.isDecode ? 'decoded' : 'coded').value = myNewMessage;
    } else {*/
        document.getElementById(!this.isDecode ?'coded' : 'decoded').value = myNewMessage;
    //}
}