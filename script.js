

// this is telling the browser to try to find an element with a class called ".mushroom" in the html file.
document.querySelector(".mushroom");

// this is creating an empty box
// the box is labeled "mushroom"
// the box is constant, which means that if we put something in it, we cannot take it out or put anything else in it
// constant = a quantity or parameter that does not change its value
const mushroom;

// this will find an element with the class "mushroom" and put it into our box called mushroom
// we are saving it in a box, so that we can manipulate it later
const mushroom = document.querySelector(".mushroom");

console.dir(mushroom);

//
document.querySelector(".mushroom").classList.add("falling");

// console.log will show us the content of anything that we put into the parentheses
//it logs the value (content) on the Console.
// content = value
//console.log();

console.log("The content of the box is: ", mushroom);
console.dir(mushroom);

//const box = "car";


//"let" is a variable, whih means that it can change content
// the box is NOT constant, which means that if we put something in it, we CAN take it out or put anything else in it
let secondBox = "car"; // let the content of secondBox be "car"
secondBox = "red car";

console.log(box);
console.log(secondBox);

let person = {
  name: "Alexandra",
  age: 33,
  gender: "female",
  clothes: ["tshirt", "skirt", "shoes", "hat"],
  sayHello: function () {
    console.log("Hello, I am Alexandra");
  },
};

function sayHi() {
  alert("hi");
}
// when Alexandra sees the event "adamjumps" she will perform the function "sayHi"
//Alexandra.addEventListener("adamJumps", sayHi);

window.addEventListener("click", sayHi);

jump.addEventListener;

console.log(boxForAperson);

// if I write console.log("mushroom") it'll show it on the Console (in the browser) as such.
//console.log("mushroom");
// this is telling the browser to try to find an element with a class called ".mushroomCount" in the html file.
const mushroomCounterSpan = document.querySelector(".mushroomCount");

// let mushroomCount be zero
let mushroomCount = 0;
mushroom.addEventListener("click", () => {
  console.log("You picked up a mushroom!");

  mushroom.style.display = "none";
  mushroom.classList.add("pickedUp");
  mushroomCount = mushroomCount + 1;
  mushroomCounterSpan.innerText = mushroomCount;
});



//const coinContainer = document.querySelector("#coin_container1");

//coinContainer.classList.add("falling");
//coinContainer.classList.add("paused");
//coinContainer.classList.add("falling");

//
