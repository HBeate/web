
/***********************************
 * ONLINE VERSCHLÜSSELUNGSTOOL
***********************************/
var originalMessage = "";
var encryptedMessage = "";
var myMessage = "";
messageArray = [];

function selectOffset() {
    var offset = document.getElementById('offset').value;
    console.log(offset);
}
function codeMessage(newLetter) {
    var decoded = document.getElementById('decoded').value;
    var offset = document.getElementById('offset').value;
    console.log(offset);
    //    var coded = document.getElementById('coded').value;
    //    console.log(decoded);
    for (let i = 0; i < decoded.length; i++) {
        var myChar = decoded.charAt(i);
        // TODO check here for Umlaute with Switch
        myMessage = myMessage + myChar;
    }
    console.log("message " + myMessage);
    if(newLetter)
        messageArray.push(myChar);  // here the individual character is an item in the array !!! TODO add delete option !!!
    else
        {
            messageArray = [];
            for(let i = 0; i < decoded.length; i++){
                messageArray.push(decoded.charAt(i));
                encrypt(offset);
            }
        }
    //   messageArray = [];
    //   messageArray.push(myMessage);   // here the string is one singel entry in the array
    myMessage = "";
    myChar = "";
    console.log("Array " + messageArray);
    // TODO convert to upper case????
    if(newLetter)
        document.getElementById('coded').value = decoded;
    //  originalMessage.value = encryptedMessage.value ;

    if(newLetter)
        encrypt(offset);
}
function encrypt(offset) {
    offset = parseInt(offset);
    var myNewMessage = "";
    var decrypt = false;
    var toEncrypt = messageArray[messageArray.length - 1];
    //     for (let i = 0; i < messageArray.length; i++) {
    //     var myChar = messageArray.charAt(i);
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
            if (decrypt) {
                messageArray[messageArray.length - 1] -= offset;
            } else {                         // rutscht im ASCII code um zwei Stellen weiter
                messageArray[messageArray.length - 1] = String.fromCharCode(toEncrypt.charCodeAt(0) + offset);
            }
            for (let i = 0; i < messageArray.length; i++) {
                myNewMessage = myNewMessage + messageArray[i];
            }
        //  myNewMessage = myNewMessage + toEncrypt;
    }    document.getElementById('coded').value = myNewMessage;
    //}
}