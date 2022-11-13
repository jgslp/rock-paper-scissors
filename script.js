
// //Determine computer selection
// function getComputerChoice() {
//     let randomNumber =  Math.floor(Math.random() * 3);
//     switch (randomNumber) {
//         case 0: 
//           return('rock');
//           break;
//         case 1: 
//           return('paper');
//           break;
//         case 2: 
//           return('scissors');
//           break;
//     }
// }
// let playerScore = 0;
// let computerScore = 0;
// let gamesPlayed = 0;

// //Prompt user and convert player input to lowercase
// let playerChoice = prompt('Type Rock, Paper, or Scissors');
// let playerSelection = playerChoice.toLowerCase();
// const computerSelection= getComputerChoice();

// //Compare player to computer
// function playRound(playerSelection, computerSelection) {
//     if (playerSelection === 'rock' && computerSelection === 'paper') {
//         return('You lose! Paper beats rock.')
//         computerScore ++;
//     } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
//         return('You win! Rock beats scissors.');
//         playerScore++;
//     } else if (playerSelection === 'paper' && computerSelection === 'rock' ) {
//         return('You win! Paper beats rock.');
//         playerScore++;
//     } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
//         return('You lose! Scissors beats paper.');
//         computerScore ++;
//     } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
//         return('You lose! Rock beats scissors.');
//         computerScore ++;
//     } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
//         return('You win! Scissors beats paper.');
//         playerScore++;
//     } else if (playerSelection === computerSelection) {
//         return('Tie! Play again.');
//     }
// }

// //Print round result
// console.log(playRound(playerSelection, computerSelection));

// //Play five rounds
// function game() {
//     for (let i = 0; i < 5; i++) {
//         playRound(playerSelection, computerSelection);   
//     }
// }

// Determine computer selection
function computerChoice() {
    let choice = ["rock", "paper", "scissors"];
    return choice[Math.floor(Math.random() * 3)];
}

console.log(computerChoice());