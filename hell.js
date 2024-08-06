// var refresh =document.getElementsByClassName("container")

var img1 = document.querySelector(".img1");
var img2 = document.querySelector(".img2");

var diceImages = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];


function getRandomNumber() {
  return Math.floor(Math.random() * 6) + 1;
}

function changeDiceImages() {
  var randomNumber1 = getRandomNumber();
  var randomNumber2 = getRandomNumber();

  img1.setAttribute("src", "images/" + diceImages[randomNumber1 - 1]);
  img2.setAttribute("src", "images/" + diceImages[randomNumber2 - 1]);
 
 
 

  if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="player1 wins"
  }else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML="player2 wins"
  }else{
    document.querySelector("h1").innerHTML="it is draw"
  }
}

window.onload = changeDiceImages();

