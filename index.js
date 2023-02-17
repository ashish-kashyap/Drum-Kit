var randomNumber1 = Math.floor(Math.random() * 6) + 1; 

// string that will be from dice1.png - dice6.png
var randomDiceImage = "dice" + randomNumber1 + ".png";

// this variable wll be images/dice1.png - images/dice2.png
var randomImageSource = "images/" + randomDiceImage;

var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML = "Player A wins🥳";
}
else if(randomNumber2 > randomNumber1)
{
    document.querySelector("h1").innerHTML = "Player B wins🥳";
}
else
{
    document.querySelector("h1").innerHTML = "Draw!🎊";
}