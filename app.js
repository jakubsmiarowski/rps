//variables

var rock = 'Rock';
var paper = 'Paper';
var scissors = 'Scissors';
var userMove;
var compMove;
var rounds;
var userChoice = pickRock || pickPaper || pickScissors;
var userScore = document.getElementById("user-score");
var compScore = document.getElementById("computer-score");
var output = document.querySelector(".output > p");
var actionMessage = document.querySelector(".action-message")

//buttons variables

var pickRock = document.getElementById('rock');
var pickPaper = document.getElementById('paper');
var pickScissors = document.getElementById('scissors');
var newGame = document.querySelector(".new-game");


//functions

function compChoice() {
    compMove = [rock, paper, scissors];
    var randomNumber = Math.floor(Math.random() * 3);
    return compMove[randomNumber];
}

function compare() {

    if (compMove === userMove) {
        output.innerHTML = "It's a draw!";
    } else if ((userMove == 1 && compMove == 3) || (userMove == 2 && compMove == 1) || (userMove == 3 && compMove == 2)) {
        output.innerHTML = compMove + " beats " + userChoice + ". You lost :(";
        compScore.innerHTML = compScore++;
    } else {
        output.innerHTML = userChoice + " beats " + compMove + ". You won!!!";
        userScore.innerHTML = userScore++;
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
    userScore = 0;
    compScore = 0;
    if (isNaN(rounds)) {
        actionMessage.innerHTML = 'Please pick a number!';
    }
});