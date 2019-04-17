//variables
var rock = 'Rock';
var paper = 'Paper';
var scissors = 'Scissors';
var userMove;
var compMove;
var rounds;
var userScore = 0;
var compScore = 0;

//outputs
var userScoreBoard = document.getElementById("user-score");
var compScoreBoard = document.getElementById("computer-score");
var output = document.querySelector(".output > p");
var actionMessage = document.querySelector(".action-message")

//buttons variables
var pickRock = document.getElementById('rock');
var pickPaper = document.getElementById('paper');
var pickScissors = document.getElementById('scissors');
var newGame = document.querySelector(".new-game");


//functions

function compChoice() {
    var move = Math.floor(Math.random() * 3 + 1);
    if (move == 1) {
        return paper;
    } else if (move == 2) {
        return rock;
    } else {
        return scissors;
    }
}

function compare() {
    compMove = compChoice();
    if ((userMove == paper && compMove == rock) || (userMove == rock && compMove == scissors) || (userMove == scissors && compMove == paper)) {
        output.innerHTML = userMove + " beats " + compMove + ". You won!";
        userScoreBoard.innerHTML = 1 + userScore++;
        checkWinner();
    } else if ((userMove == rock && compMove == paper) || (userMove == scissors && compMove == rock) || (userMove == paper && compMove == scissors)) {
        output.innerHTML = compMove + " beats " + userMove + ". You lose!";
        compScoreBoard.innerHTML = 1 + compScore++;
        checkWinner();
    } else {
        output.innerHTML = "It is a draw!";
        checkWinner();
    }
}

function checkWinner() {

    if (userScore > rounds) {
        rounds = alert('You won entire game! Congratulations!');
    } else if (compScore > rounds) {
        rounds = alert('You lost entire game :( Better luck next time!');
    }
}



function reset() {
    rounds = 0;
    userScore = 0;
    compScore = 0;
    userScoreBoard.innerHTML = 0;
    compScoreBoard.innerHTML = 0;
    output.innerHTML = ('Try your luck!');
}

function endGame() {
    rounds = window.prompt('How many rounds did you win?');
    if (isNaN(rounds)) {
        alert('Please pick a number!');
        endGame();
    }
}

//buttons listeners

pickRock.addEventListener('click', function() {
    userMove = rock;
    compare();
    /* wg zadania powinno być compare(rock); */
});

pickPaper.addEventListener('click', function() {
    userMove = paper;
    compare();
});

pickScissors.addEventListener('click', function() {
    userMove = scissors;
    compare();
});

// NEWGAME

newGame.addEventListener('click', function() {
    reset(); //do resetowania zmiennych
    endGame();
    /* Stworzyłbym funkcję do pobierania rund, analogicznie jak w temperaturach żeby if(isNan) siebie samą wywoływała w kółko */
});