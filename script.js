window.addEventListener("load", startGame);
let point;
let life;

function startGame() {
    console.log("startGame");
    point = 0;
    life = 3;


    /* See the game'screen, start playing the gaming sound,etc.
    -----------------------------------------------------------
    transitions: Click the edible -> clickEdible 1 2 4 5
                 Click the inedible --> clickInedible 0 3 6 */

    document.querySelector("#mushroom_container1").addEventListener("click", clickEdible);
    document.querySelector("#mushroom_container2").addEventListener("click", clickEdible);
    document.querySelector("#mushroom_container4").addEventListener("click", clickEdible);
    document.querySelector("#mushroom_container5").addEventListener("click", clickEdible);
    document.querySelector("#mushroom_container0").addEventListener("click", clickInedible);
    document.querySelector("#mushroom_container3").addEventListener("click", clickInedible);
    document.querySelector("#mushroom_container6").addEventListener("click", clickInedible);

}

function clickEdible() {
    console.log("clickEdible");


    /* Mushroom disappears\ Earn 1 point \ See earned points
    --------------------------------------------------------
    When the disappearing animation is done --> newMushroom */
    point++;

    document.querySelector("#score").testContent = point;
    document.querySelector("mushroom_container0").classList.add("disappear");
    document.querySelector("mushroom_container1").classList.add("disappear");
    document.querySelector("mushroom_container2").classList.add("disappear");
    document.querySelector("mushroom_container3").classList.add("disappear");
    document.querySelector("mushroom_container4").classList.add("disappear");
    
}

function newMushroom() {
    console.log("newMushroom");
    /* Remove the existing position \ relocate mushroom.
    ---------------------------------------------------------
    When all is done,the mushrooms reappear automatically + randomly, then see mushroom again. */
}

function clickInedible() {
    console.log("clickInedible");
    /* Mushroom disappears \ lose 1 life \ see remaining hearts.
    -----------------------------------------------------------
    At no more hearts --> gameOver */

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
    // Write "Game Over" on the console
}

function blurryScreen() {
    console.log("blurryScreen");

}

function timerOut() {
    console.log("timerOut");

}
