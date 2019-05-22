//variables
var params = {
    rock: "Rock",
    paper: "Paper",
    scissors: "Scissors",
    userMove: "",
    compMove: "",
    rounds: 0,
    userScore: 0,
    compScore: 0,
    progress: []
};

var overlay = document.getElementById("overlay");
var modal = document.getElementById("modal");
var modalHeader = document.querySelector(".modal > h1");

//outputs
var userScoreBoard = document.getElementById("user-score");
var compScoreBoard = document.getElementById("computer-score");
var output = document.querySelector(".output > p");
var actionMessage = document.querySelector(".action-message");
var table = document.getElementById("modalTable");

//buttons variables
var pickRock = document.getElementById("rock");
var pickPaper = document.getElementById("paper");
var pickScissors = document.getElementById("scissors");
var newGame = document.querySelector(".new-game");

//functions

function compChoice() {
    var move = Math.floor(Math.random() * 3 + 1);
    if (move == 1) {
        return params.paper;
    } else if (move == 2) {
        return params.rock;
    } else {
        return params.scissors;
    }
}

function compare() {
    params.compMove = compChoice();
    console.log(params.compMove);
    console.log(params.userMove);
    if (
        (params.userMove == params.paper && params.compMove == params.rock) ||
        (params.userMove == params.rock && params.compMove == params.scissors) ||
        (params.userMove == params.scissors && params.compMove == params.paper)
    ) {
        output.innerHTML =
            params.userMove + " beats " + params.compMove + ". You won!";
        params.userScore++;
        userScoreBoard.innerHTML = params.userScore;
        checkWinner();
        update();
        table();
    } else if (
        (params.userMove == params.rock && params.compMove == params.paper) ||
        (params.userMove == params.scissors && params.compMove == params.rock) ||
        (params.userMove == params.paper && params.compMove == params.scissors)
    ) {
        params.compScore++;
        output.innerHTML =
            params.compMove + " beats " + params.userMove + ". You lose!";
        compScoreBoard.innerHTML = params.compScore;
        checkWinner();
        update();
        table();
    } else {
        output.innerHTML = "It is a draw!";
        checkWinner();
        update();
        table();
    }
}

function checkWinner() {
    if (params.userScore == params.rounds) {
        table.innerHTML = "You won entire game! Congratulations!";
        showModal();
    } else if (params.compScore == params.rounds) {
        table.innerHTML = "You lost entire game :( Better luck next time!";
        showModal();
    }
}

function update() {
    var object = {
        roundNumber: params.rounds,
        userPick: params.userMove,
        compPick: params.compMove,
        userWon: params.userScore,
        compWon: params.compScore
    };
    params.progress.push(object);
}

function table() {

    table.innerHTML = "";
    for (var i = 0; i < params.progress.length; i++) {
        table.innerHTML +=
            "<tr><td>" +
            i +
            "</td><td>" +
            params.progress[i].userPick +
            "</td></tr>";
        table.innerHTML +=
            "<tr><td>" +
            i +
            "</td><td>" +
            params.progress[i].userWon +
            "</td></tr>";
        table.innerHTML +=
            "<tr><td>" +
            i +
            "</td><td>" +
            params.progress[i].compWon +
            "</td></tr>";
    }
}


function showModal() {
    event.preventDefault();
    overlay.classList.add("show");
}

function hideModal() {
    event.preventDefault();
    overlay.classList.remove("show");
}

function reset() {
    params.rounds = 0;
    params.userScore = 0;
    params.compScore = 0;
    userScoreBoard.innerHTML = 0;
    compScoreBoard.innerHTML = 0;
    output.innerHTML = "Try your luck!";
}

function endGame() {
    params.rounds = window.prompt("How many rounds are you playing?");
    if (isNaN(params.rounds)) {
        alert("Please pick a number!");
        endGame();
    }
}

//buttons listeners

pickRock.addEventListener("click", function() {
    params.userMove = params.rock;
    compare();
});

pickPaper.addEventListener("click", function() {
    console.log("s");
    params.userMove = params.paper;
    compare();
});

pickScissors.addEventListener("click", function() {
    params.userMove = params.scissors;
    compare();
});

//closing modal

overlay.addEventListener("click", function(e) {
    if (e.target === this) {
        hideModal();
    }
});


// NEWGAME

newGame.addEventListener("click", function() {
    reset();
    endGame();
});