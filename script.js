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
//scoreboard and digit to rock paper scissors converter combined into
//other functions.

let playerSelection;
let playerScore = 0;
let computerScore = 0;
const scoreBoard = document.querySelector('#scoreboard');
const gameResults = document.querySelector('#gameresults');


gameResults.textContent = "\[root\@RockPaperScissors\]\$";

//Randomly select rock, paper, or scissors
function computerPlay() {
    const choice = Math.floor((Math.random() * 3) + 1);
    switch(choice) {
        case 1:
            return "rock";
            break;
        case 2: 
            return "paper";
            break;
        case 3:
            return "scissors";
            break;

    };
};

//play a round. add 1 point to winning players score
function playRound(player , computer) {

        if (player == "rock" && computer == "paper") {
            ++computerScore;
           return "\[root\@RockPaperScissors\]\$ You Lose! Paper beats Rock.";

        } else if (player == "rock" && computer == "scissors") { 
            ++playerScore;
           return "\[root\@RockPaperScissors\]\$ You Win! Rock beats Scissors.";

        } else if (player == "rock" && computer == "rock") {
           return "\[root\@RockPaperScissors\]\$ Tie! Try Again.";

        } else if ( player == "paper" && computer == "rock") {
            ++playerScore;
           return "\[root\@RockPaperScissors\]\$ You Win! Paper beats Rock.";

        } else if (player == "paper" && computer == "paper") {
           return "\[root\@RockPaperScissors\]\$ Tie! Try Again.";

        } else if (player == "paper" && computer == "scissors") {
            ++computerScore;
           return "\[root\@RockPaperScissors\]\$ You Lose! Scissors beats Paper.";

        } else if (player == "scissors" && computer == "rock") {
            ++computerScore;
           return "\[root\@RockPaperScissors\]\$ You Lose! Rock beats Scissors.";

        } else if (player == "scissors" && computer == "paper") {
            ++playerScore;
           return "\[root\@RockPaperScissors\]\$ You Win! Scissors beats Paper.";

        } else if (player == "scissors" && computer == "scissors") {
           return "\[root\@RockPaperScissors\]\$ Tie! Try Again!";

        } else {return "You Broke It!"};
};

//play 5 rounds, indicate winner
function game(playerSelection) {

    let computerSelection = computerPlay();
    gameResults.textContent = playRound(playerSelection, computerSelection);
    console.log(`Player Score: ${playerScore} Computer Score: ${computerScore}`);
    scoreBoard.textContent = `\[root\@RockPaperScissors\]\$ Player Score: ${playerScore} Computer Score: ${computerScore}`;
};

//User interface stuff below
//
const buttons = document.querySelectorAll(".btn");

function removeTransition(e) {
//    if (e.propertyName !== 'transform') return;
    console.log(this);
    this.classList.remove('click');
}; 

buttons.forEach((button) => {
    button.addEventListener('transitionend', removeTransition);
    button.addEventListener('click', () => {
        console.log(button.id);
        button.classList.add('click');
        if (button.id != "shoot") {
            playerSelection = button.id;
        };
    });
});
buttons.forEach((button) => {
});

const playButton = document.querySelector('#shoot');

playButton.addEventListener('click', () => {
    console.log(playButton.id);
    if (playerSelection == undefined) {
        gameResults.textContent = "Choose an option ya dingus";
    };
    game(playerSelection);
});


