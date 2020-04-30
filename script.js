window.addEventListener("load", startGame);
let point;
let life;

let colors = ["gray", "brown", "red", "orange", "blue", "green", "purple"];

console.log(colors);

function startGame() {
  console.log("startGame");
  points = 0;
  lives = 3;

  document
    .querySelector("#mushroom_container1")
    .addEventListener("click", clickMushroom);
  document
    .querySelector("#mushroom_container2")
    .addEventListener("click", clickMushroom);
  document
    .querySelector("#mushroom_container4")
    .addEventListener("click", clickMushroom);
  document
    .querySelector("#mushroom_container5")
    .addEventListener("click", clickMushroom);
  document
    .querySelector("#mushroom_container0")
    .addEventListener("click", clickMushroom);
  document
    .querySelector("#mushroom_container8")
    .addEventListener("click", clickMushroom);
  document
    .querySelector("#mushroom_container7")
    .addEventListener("click", clickMushroom);
  document
    .querySelector("#mushroom_container3")
    .addEventListener("click", clickMushroom);
  document
    .querySelector("#mushroom_container6")
    .addEventListener("click", clickMushroom);
}

function clickMushroom() {
  this.addEventListener("animationend", showNewMushroom);

  // check if clicked mushroom is gray, meaning inedible
  if (this.classList.contains("gray")) {
    console.log("you ate an inedible mushroom");
    console.log("clickMushroom -> lives", lives);

    document.querySelector("#screen").classList.add("blur");
    this.classList.add("disappear");

    document.querySelector("#heart" + lives).classList.add("lost");
    lives = lives - 1;
    if (lives == 0) {
      gameOver();
    }
  } else {
    // every other mushroom than gray is edible
    points = points + 1;
    this.classList.add("slide");
    document.querySelector("#points").textContent = points;
  }
}

function showNewMushroom() {
  console.log("newMushroom");
  document.querySelector("#screen").classList.remove("blur");
  this.classList.remove("disappear");
  this.classList.remove("slide");

  let random = Math.floor(Math.random() * 7);
  console.log("showNewMushroom -> random", random);

  this.classList.remove(
    "gray",
    "brown",
    "red",
    "orange",
    "blue",
    "green",
    "purple"
  );

  this.classList.add(colors[random]);

  //this.classList.remove(...colors);
}

function stopGame() {
  console.log("stopGame");

  /* When all the transitions are over, remove all the eventListeners
    --------------------------------------------------------------------------
    For more than 10 accumulated points --> Level Complete
    Or else --> gameOver */
}

function levelComplete() {
  console.log("levelComplete");

  // Write "Level Complete, congratulations!" in the console
}

function gameOver() {
  console.log("gameOver");
  document.querySelector("#gameOver").classList.remove("hidden");
}
