var choices = ["paper", "rock", "scissors"];
var i = Math.floor(Math.random() * 3);
var ComChoice = choices[i];
var UserPoints = 0;
var ComPoints = 0;
//Für Anzeige des Scores
function score() {
    var score_div = (document.getElementById("score").innerHTML =
        UserPoints + " - " + ComPoints);
}
setInterval(score, 50);
//Anzeige der Auswahl
function convert(word) {
    if (word === "paper") return '<i class="far fa-hand-paper"></i>';
    if (word === "rock") return '<i class="far fa-hand-rock"></i>';
    return '<i class="far fa-hand-scissors"></i>';
}

function game(UserChoice) {
    //Anzeige der Auswahl von User und Com
    var box = document.getElementById("challenge");
    box.style.display = "inline-flex";
    var userDiv = document.getElementById("YourObject");
    userDiv.innerHTML = convert(UserChoice);
    var comDiv = document.getElementById("ComObject");
    comDiv.innerHTML = convert(ComChoice);
    /**
     * TODO: Gameabfragen
     */
    function continueGame() {
        /** 
         * TODO: Neue Auswahl com
         */
    }
    setTimeout(continueGame, 1200);
}

function win(bn) {
    UserPoints++;
    document.getElementById("who").innerHTML = "You win!";
    var bn = document.getElementById(bn);
    bn.classList.remove("bn");
    bn.classList.add("green");
    setTimeout(() => {
        bn.classList.add("bn");
        bn.classList.remove("green");
    }, 1200);
}

function draw(bn) {
    document.getElementById("who").innerHTML = "It's a Draw.";
    var bn = document.getElementById(bn);
    bn.classList.remove("bn");
    bn.classList.add("gray");
    setTimeout(() => {
        bn.classList.add("bn");
        bn.classList.remove("gray");
    }, 1200);
}

function lose(bn) {
    ComPoints++;
    document.getElementById("who").innerHTML = "You lose...";
    var bn = document.getElementById(bn);
    bn.classList.remove("bn");
    bn.classList.add("red");
    setTimeout(() => {
        bn.classList.add("bn");
        bn.classList.remove("red");
    }, 1200);
}