
//Computer Selection
function getComputerChoice() {
    let randomNumber =  Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0: 
          return('rock');
          break;
        case 1: 
          return('paper');
          break;
        case 2: 
          return('scissors');
          break;
    }
}

const playerChoice = '';
let playerSelection = playerChoice.toLowerCase();
const computerSelection= getComputerChoice();

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "paper") {
        return('You lose! Paper beats rock.');
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return('You win! Rock beats scissors.');
    } else if (playerSelection === "paper" && computerSelection === "rock" ) {
        return('You win! Paper beats rock.');
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return('You lose! Scissors beats paper.');
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return('You lose! Rock beats scissors.');
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return('You win! Scissors beats paper.');
    } else if (playerSelection === computerSelection) {
        return('Tie! Play again.');
    }
}

console.log(playRound());