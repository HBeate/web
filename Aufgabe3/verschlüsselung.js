
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
function codeMessage() {
    var decoded = document.getElementById('decoded').value;
    //    var coded = document.getElementById('coded').value;
    //    console.log(decoded);
    for (let i = 0; i < decoded.length; i++) {
        var myChar = decoded.charAt(i);
        // TODO check here for Umlaute with Switch
        myMessage = myMessage + myChar;

    }
    console.log("message " + myMessage);
    messageArray.push(myChar);  // here the individual character is an item in the array !!! TODO add delete option !!!
    //   messageArray = [];
    //   messageArray.push(myMessage);   // here the string is one singel entry in the array
    myMessage = "";
    myChar = "";
    console.log("Array " + messageArray);
    // TODO convert to upper case????
    document.getElementById('coded').value = decoded;
    //  originalMessage.value = encryptedMessage.value ;
    var offset = document.getElementById('offset').value;
    console.log(offset);
    encrypt();
}
function encrypt(offset) {
    var myNewMessage = "";
    var decrypt = "";

    for (let i = 0; i < myMessage.length; i++) {
        var myChar = myMessage.charAt(i);
        switch (myChar) {
            case '!':
            case '?':
            case '.':
            case ',':
            case ';':
            case '-':
            case '(':
            case ')':
                myNewMessage = myNewMessage + myChar;       //Diese Sonderzeichen werden nicht verschlüsselt
                break;
            default:
                if (decrypt) {
                    mychar -= offset;
                } else {                         // rutscht im ASCII code um zwei Stellen weiter
                    mychar += offset;
                }
                myNewMessage = myNewMessage + mychar;
        }    document.getElementById('coded').value = myNewMessage;
    }

}


