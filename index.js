var randomNumber1 = Math.floor(Math.random() * 6 ) + 1; //1-6 give me

var randomDiceİmage = "dice" + randomNumber1 + ".png";

var RandomİmageSource1 = "images/" + randomDiceİmage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", RandomİmageSource1);

var randomNumber2 = Math.floor(Math.random() * 6 ) + 1; //1-6 give me

var randomDiceİmage = "dice" + randomNumber2 + ".png";

var RandomİmageSource2 = "images/" + randomDiceİmage;

var image1 = document.querySelectorAll("img")[1];

image1.setAttribute("src", RandomİmageSource1);
