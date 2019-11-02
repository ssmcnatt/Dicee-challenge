var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1);
console.log(randomNumber2);

var randomDice1 = "images/dice" + randomNumber1 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDice1);

var randomDice2 = "images/dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDice2);

if (randomNumber1 > randomNumber2) {
    var head = "Player 1 Wins!";
} else if  (randomNumber2 > randomNumber1) {
    var head = "Player 2 Wins!";
} else {
    var head = "It's a Tie!"
}

var h1 = document.querySelector("h1");
h1.textContent = head;