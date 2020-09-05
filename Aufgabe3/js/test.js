let amountOfClicks = 0;

let string = "Beate";
let string1 = "Hello " + string;
let string2 = `Hello ${string}`;

console.log(string1);
console.log(string2);

document.getElementById("header").addEventListener("click", function(){

    amountOfClicks++;
    console.log("amount of clicks: " + amountOfClicks);

    for (let i = 0; i < 10; i++) {
        console.log(i);
    }
    changeContent();
    changeColor();
})
document.getElementById("subtitle").addEventListener("mouseout",function(){
    //alert("test");
   changeColor();
});

function changeContent (){
    document.getElementById("content").innerHTML="you clicked me " + amountOfClicks + " times";
}

function changeColor(){
    document.getElementById("subtitle").style.color = "red";
}