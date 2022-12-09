var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

window.addEventListener('DOMContentLoaded', () => {
  setTimeout(diceGame, 1130)
})

function diceGame() {
  document.querySelector("img.img1").setAttribute("src","images/dice" +randomNumber1+ ".png");
  document.querySelector("img.img2").setAttribute("src","images/dice" +randomNumber2+ ".png");
  if (randomNumber1 > randomNumber2) {
    document.querySelector(".p1").innerHTML = "Player 1 🚩";
    document.querySelector(".img1").classList.add("win")
  }
    else if (randomNumber1 < randomNumber2 ) {
        document.querySelector(".p2").innerHTML = "Player 2 🚩";
        document.querySelector(".img2").classList.add("win")
      }
  else {
    document.querySelector(".p1").innerHTML = "Player 1 🚩";
    document.querySelector(".p2").innerHTML = "Player 2 🚩";
  }
}

document.querySelector("button").addEventListener("click", ()=> {
  window.location.reload();
})