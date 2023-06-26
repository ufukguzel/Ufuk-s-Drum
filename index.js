//1.image 1-6
var randomNumber1 = Math.floor(Math.random() * 6 ) + 1; //1-6 give me

var randomDiceİmage = "dice" + randomNumber1 + ".png";

var RandomİmageSource1 = "images/" + randomDiceİmage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", RandomİmageSource1);


//2.image 1-6 
var randomNumber2 = Math.floor(Math.random() * 6 ) + 1; //1-6 give me

var randomDiceİmage = "dice" + randomNumber2 + ".png";

var RandomİmageSource2 = "images/" + randomDiceİmage;

var image1 = document.querySelectorAll("img")[1];

image1.setAttribute("src", RandomİmageSource1);


//İf Player Wins
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins! ";
}
else{
    document.querySelector("h1").innerHTML = "Draw";
}
