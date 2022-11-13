// Determine computer selection
function getComputerChoice() {
    let computerChoice = ["rock", "paper", "scissors"];
    return computerChoice[Math.floor(Math.random() * 3)];
}

let playerScore = 0;
let computerScore = 0;

// Compare computer to player
function playRound() {
    const computerSelection= getComputerChoice();
    playerChoice = prompt('Type Rock, Paper, or Scissors');
    let playerSelection = playerChoice.toLowerCase();
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore ++;
        return('You lose! Paper beats rock.');
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++;
        return('You win! Rock beats scissors.');
    } else if (playerSelection === 'paper' && computerSelection === 'rock' ) {
        playerScore++;
        return('You win! Paper beats rock.');
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore ++;
        return('You lose! Scissors beats paper.');
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore ++;
        return('You lose! Rock beats scissors.');
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        return('You win! Scissors beats paper.');
    } else if (playerSelection === computerSelection) {
        return('Tie! Play again.');
    }
}

console.log(playRound());


// Play 5 rounds
let i = 1;
while (i < 5) {
    console.log(playRound());
    i++;
}

console.log(playerScore);
console.log(computerScore);