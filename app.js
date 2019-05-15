//variables
var params = {
    rock: 'Rock',
    paper: 'Paper',
    scissors: 'Scissors',
    userMove: [params.rock, params.paper, params.scissors],
    compMove: "",
    rounds: 0,
    userScore: 0,
    compScore: 0,
    progress: [],
};

var overlay = document.getElementById('overlay');
var modal = document.getElementById('modal');
var modalHeader = document.querySelector(".modal > h1");

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
        return params.paper;
    } else if (move == 2) {
        return params.rock;
    } else {
        return params.scissors;
    }
}

function compare() {
    params.compMove = compChoice();
    if ((params.userMove == params.paper && params.compMove == params.rock) || (params.userMove == params.rock && params.compMove == params.scissors) || (params.userMove == params.scissors && params.compMove == params.paper)) {
        output.innerHTML = params.userMove + " beats " + params.compMove + ". You won!";
        userScoreBoard.innerHTML = 1 + params.userScore++;
        checkWinner();
    } else if ((params.userMove == params.rock && params.compMove == params.paper) || (params.userMove == params.scissors && params.compMove == params.rock) || (params.userMove == params.paper && params.compMove == params.scissors)) {
        output.innerHTML = compMove + " beats " + userMove + ". You lose!";
        compScoreBoard.innerHTML = 1 + params.compScore++;
        checkWinner();
    } else {
        output.innerHTML = "It is a draw!";
        checkWinner();
    }
}

function checkWinner() {

    if (params.userScore == params.rounds) {
        rounds = alert('You won entire game! Congratulations!');
    } else if (params.compScore == params.rounds) {
        rounds = alert('You lost entire game :( Better luck next time!');
    }
}

function update() {
    var object = {
        roundsNumber: params.rounds,
    }
    params.progress.push(object);
}

function showModal() {
    event.preventDefault();
    overlay.classList.add('show');
    checkWinner();
}

function hideModal() {
    event.preventDefault();
    overlay.classList.remove('show');
}

function reset() {
    params.rounds = 0;
    params.userScore = 0;
    params.compScore = 0;
    userScoreBoard.innerHTML = 0;
    compScoreBoard.innerHTML = 0;
    output.innerHTML = ('Try your luck!');
}

function endGame() {
    params.rounds = window.prompt('How many rounds did you win?');
    if (isNaN(params.rounds)) {
        alert('Please pick a number!');
        endGame();
    }
}



//buttons listeners

pickRock.addEventListener('click', function() {
    params.userMove[0];
    compare();
});

pickPaper.addEventListener('click', function() {
    params.userMove[1];
    compare();
});

pickScissors.addEventListener('click', function() {
    params.userMove[2];
    compare();
});

// NEWGAME

newGame.addEventListener('click', function() {
    reset(); //do resetowania zmiennych
    endGame();
    /* Stworzyłbym funkcję do pobierania rund, analogicznie jak w temperaturach żeby if(isNan) siebie samą wywoływała w kółko */
});