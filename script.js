//javascript
//
//function computerPlay
//generate random number between 1 and 3
//1 rock, 2 paper, 3 scissors
// perhaps another function to convert digit to rock paper or scissors?
//
// function game
// repeat 5 rounds before deciding a winner
//
// function scoreboard?
//
// params player or computer, adds 1 to whichever score, when one
// reaches 5, game ends?

//default input. change x from console

let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    const choice = Math.floor((Math.random() * 3) + 1);
    return choice;
};

function convertToRPS(input) {
    switch(input) {
        case 1:
            output = "rock";
            return output;
        case 2: 
            output = "paper";
            return output;
        case 3:
            output = "scissors";
            return output;

    };
};

function iterateScore(player) {
    if (player == "player") {
        ++playerScore;
    } else {
        ++computerScore;
    };
};


function oneRound(player , computer) {
    player = player.toLowerCase();

        if (player == "rock" && computer == "paper") {
           iterateScore("computer");
           return "You Lose! Paper beats Rock.";

        } else if (player == "rock" && computer == "scissors") { 
           iterateScore("player");
           return "You Win! Rock beats Scissors.";

        } else if (player == "rock" && computer == "rock") {
           return "Tie! Try Again.";

        } else if ( player == "paper" && computer == "rock") {
           iterateScore("player");
           return "You Win! Paper beats Rock.";

        } else if (player == "paper" && computer == "paper") {
           return "Tie! Try Again.";

        } else if (player == "paper" && computer == "scissors") {
           iterateScore("computer");
           return "You Lose! Scissors beats Paper.";

        } else if (player == "scissors" && computer == "rock") {
           iterateScore("computer");
           return "You Lose! Rock beats Scissors.";

        } else if (player == "scissors" && computer == "paper") {
           iterateScore("player");
           return "You Win! Scissors beats Paper.";

        } else if (player == "scissors" && computer == "scissors") {
           return "Tie! Try Again!";

        } else {return "You Broke It!"};
};

function game() {

    for (let i = 0; i < 5; i++) {
        let computerSelection = convertToRPS(computerPlay());
        let playerSelection = prompt("Rock, Paper, or Scissors:");
        console.log(oneRound(playerSelection, computerSelection));
    }
    console.log(`Player Score: ${playerScore} Computer Score ${computerScore}`);
    computerScore = 0;
    playerScore = 0;
};

game();
