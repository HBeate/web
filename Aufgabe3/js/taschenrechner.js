function getHistory(){
    return document.getElementById("history-value").innerText;
}
function printHistory(num){
    document.getElementById("history-value").innerText=num;
}
function getOutput(){
    return document.getElementById("output-value").innerText
}
function printOutput(num){
    if(num==""){
        document.getElementById("output-value").innerText=num;
    }
    else{
        document.getElementById("output-value").innerText=getFormattedNumber(num); 
    }
    
}
function getFormattedNumber(){
    var nr = Number(num);
    var nrValue = nr.toLocaleString("de");
    return nrValue;
}

function reverseNumberFormat(num){
return Number(num.replace (/,/g,''))
}
var operator = document.getElementsByClassName("operator");
for (let i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', function(){
        console.log("the operator clicked is "+this.id);

        if(this.id=="clear"){
            printHistory="";
            printOutput="";
        }
        if(this.id=="backspace"){
            var output = reverseNumberFormat(getOutput()).toString();
            if(output) { //if output has a value
            output = output.substring(0,output.length-1);
            printOutput(output);
            }
        }
    });
    
}
var number = document.getElementsByClassName("number");
for (let i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function(){
        console.log("the number clicked is "+this.id);
        var output=reverseNumberFormat(getOutput());
        if(output!=NaN){
            output=output+this.id;
            printOutput(output);
        }
    });
}