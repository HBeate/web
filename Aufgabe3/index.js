

/***********************************
 * PASSWORTSCHUTZ
 ***********************************/
const names = [
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
}
/***********************************
 * CALCULATOR
 * /0                                           DONE
 * +- change                                    DONE
 * +-/* at the beginning                        DONE
 * 9//////3                                     DONE (same operator) - when they are the exact same operator
 ***********************************/
var myArray = [];
var inputString = "";
var numberString = "";
var lastInput = "";

function addCalculation(value) {
    //if lastInput === "operator" && value === "opeartor" ==> return;
    if (lastInput === "+" && value === "+" || lastInput === "-" && value === "-" ||lastInput === "*" && value === "*" || lastInput === "/" && value === "/" ){
        return;
    }
    if (lastInput === "+" && value === "-" ){
        lastInput == value;
    }
    if(myArray.length === 0 && numberString === "" &&  (value === "+" || value === "-" || value === "*" || value === "/")) {
        alert("Please, begin the calculation with a number!");
        return;
    }
    var inputNumber = parseInt(value);
    document.getElementById('calculation').value = "";
    if (lastInput === "/" && value === 0) {
        myAlert();
        return;
    }
    if (lastInput === "=" && !isNaN(inputNumber)) {
        clearAll();
    } else if (lastInput === "=" && value === '+-') {
        result = document.getElementById('result').value;
        result = result * (-1);
        myArray = [];
        myArray.push(result);
        document.getElementById('result').value = result;
    }
    lastInput = value;
    if (!isNaN(inputNumber)) { // if it's a number
        numberString += inputNumber; //it adds every input number to the numberstring
    } else if (value === '+-') {
        if(numberString !== "")
            myArray.push(numberString); // numberString (just the numbers) are pushed into the array
        console.log(numberString);
        numberString = "";
        inputString = "";
        for (let i = 0; i < myArray.length; i++) {
            inputString += myArray[i]; // the empty inputString is filled with all the data from the array
            console.log(inputString); //printn to the console
        }
    } else {
        inputString = ""; //  inputString (the one that goes into the field of the calculator) is emptied
        myArray.push(numberString); // numberString (just the numbers) are pushed into the array
        if (value !== "=")  // if all other input (+-*/) isn't an = then.... 
            myArray.push(value);  // push the logical operator to the array
        numberString = "";  // empty the numberString to get it ready for the next round

        for (let i = 0; i < myArray.length; i++) {
            inputString += myArray[i]; // the empty inputString is filled with all the data from the array
            console.log(inputString); //printn to the console
        }
    }
    document.getElementById('calculation').value = inputString;    // inputString (everything form the array) is put into the calculation field of the calculator

    if (numberString !== "") { // 9 If numberString is not empty...
        document.getElementById('calculation').value += numberString; // 778 + 45 + >>>>> 9 <<<<<<   ...then add that also to the calculation field of the calculator
    }

}
function myAlert() {
    alert("Division by 0 not possible");
}
function solveCalculation() {
    addCalculation('='); // 
    var result = "";
    result = eval(inputString); // it computes the calculation
    document.getElementById('result').value = result; //writes the result into the calculator result text field
    inputString = result; // puts the result into the inputString
    result = "" // clears result

}
function clearAll() { // clears variables, strings, array & textfields of the calculator
    document.getElementById('calculation').value = "";
    document.getElementById('result').value = "";
    result = "";
    inputString = "";
    myArray = [];
}
function negativeNumber() {
    addCalculation('+-')
    var lastElement = myArray.length - 1; // gets the postiton of the last element of the array
    var newValue = myArray[lastElement]; // gets the value of the last element of the array
    var checkIfNumber = parseInt(newValue); // analyses it newValue is a number
    var secondLastElement = lastElement - 1; // gets the position of the second to last element of the array
    var valueSecondLastElement = myArray[secondLastElement] // gets the value of the second to last element of the array
    if (!isNaN(checkIfNumber)) { // if checkIfNumber is a number
        if (valueSecondLastElement === "+") { // if valueSecondLastElement is a +
            var newSecondLastElement = ""; // new variable
            newSecondLastElement = "-"; // fill the new variable with -
            myArray[secondLastElement] = newSecondLastElement; //replaces the secondLastElement with the newSecondLastElement
        } else if (valueSecondLastElement === "-") { //if valueSecondLastElement is a -
            newSecondLastElement = "+"; // newSecondLastElement is filled with +
            myArray[secondLastElement] = newSecondLastElement; //replaces the secondLastElement with the newSecondLastElement
        } else { // otherwise 
            newValue = newValue * (-1); // switches sign of a number and stores it in newValue
            myArray[lastElement] = newValue; // repalces the last element of the array with newValue
        }
        console.log(myArray); // writes it onto the console
        inputString = ""; // clears inputString -> so that it can be filled with the data of the array

        for (let i = 0; i < myArray.length; i++) { // fills inputString with the data from the array
            inputString += myArray[i];
            console.log(inputString);
        }
        document.getElementById('calculation').value = inputString; // displays inputString in the calculation text field
    }
}
/*function replaceOperator(){
    var lastOperator = myArray.length - 1;
    var newOperator = myArray[lastElement]

}*/

/***********************************
 * ONLINE VERSCHLÜSSELUNGSTOOL
 ***********************************/


/***********************************
* TO-DO APP
***********************************/