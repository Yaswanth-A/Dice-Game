

var randNum1 = Math.floor(Math.random()*6) +1;
var randNum2 = Math.floor(Math.random()*6) +1;

var imgSrc1 = "images/dice" + randNum1 + ".png";
var imgSrc2 = "images/dice" + randNum2 + ".png";

document.querySelectorAll(".dice img")[0].setAttribute("src" , imgSrc1);
document.querySelectorAll(".dice img")[1].setAttribute("src" , imgSrc2);
if(randNum1 == randNum2){
        document.querySelector("h1").innerHTML = "It's a Tie "
}
else if(randNum1 < randNum2){
    document.querySelector("h1").innerHTML = "PLayer2 wins!! "
}
else{
    document.querySelector("h1").innerHTML = "PLayer1 wins!! "
}
