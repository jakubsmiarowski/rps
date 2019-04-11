//variables

var rock = 'Rock';
var paper = 'Paper';
var scissors = 'Scissors';
var userMove;
var compMove;
var rounds;
var userScore = 0;
var compScore = 0;
var userChoice = pickRock || pickPaper || pickScissors;
var userScore_board = document.getElementById("user-score");
var compScore_board = document.getElementById("computer-score");
var output = document.querySelector(".output > p");
var actionMessage = document.querySelector(".action-message")

//buttons variables

var pickRock = document.getElementById('rock');
var pickPaper = document.getElementById('paper');
var pickScissors = document.getElementById('scissors');
var newGame = document.querySelector(".new-game");


//functions

function compChoice() {
    return Math.floor(Math.random() * 3 + 1);
}

function compare() {

    if (compMove === userMove) {
        output.innerHTML = "It's a draw!";
    } else if ((userMove == 1 && compMove == 3) || (userMove == 2 && compMove == 1) || (userMove == 3 && compMove == 2)) {
        output.innerHTML = compMove + " beats " + userChoice + ". You lost :(";
        compScore_board.innerHTML = 1 + compScore++;
    } else {
        output.innerHTML = userChoice + " beats " + compMove + ". You won!!!";
        userScore_board.innerHTML = 1 + userScore++;
    }
}



//buttons listeners

pickRock.addEventListener('click', function() {
    userMove = 2;
    userChoice = rock;
    compMove = compChoice();
    compare();
});

pickPaper.addEventListener('click', function() {
    userMove = 1;
    userChoice = paper;
    compMove = compChoice();
    compare();
});

pickScissors.addEventListener('click', function() {
    userMove = 3;
    userChoice = scissors;
    compMove = compChoice();
    compare();
});

// NEWGAME

newGame.addEventListener('click', function() {
    rounds = window.prompt('How many rounds did you win?');
    userScore_board.innerHTML = 0;
    compScore_board.innerHTML = 0;
    if (isNaN(rounds)) {
        actionMessage.innerHTML = 'Please pick a number!';
    }
    return;
});