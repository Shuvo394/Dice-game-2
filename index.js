var randomNumber1 = Math.floor(Math.random() * 6 + 1);

var randomImages = "dice" + randomNumber1 + ".png";

var imageSource = "images/" + randomImages;

var img1 = document.querySelectorAll("img")[0].setAttribute("src", imageSource);

var randomNumber2 = Math.floor(Math.random() * 6 + 1);

var randomImages2 = "dice" + randomNumber2 + ".png";

var imageSource2 = "images/" + randomImages2;

var img2 = document.querySelectorAll("img")[1].setAttribute("src", imageSource2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "Player 1 win! 💪";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").textContent = "💪 Player 2 win!";
}
else {
  document.querySelector("h1").textContent = "Draw";
}
