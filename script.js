
//Computer Selection
function getComputerChoice() {
    let randomNumber =  Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0: 
          console.log('Rock');
          break;
        case 1: 
          console.log('Paper');
          break;
        case 2: 
          console.log('Scissors');
          break;
    }
}
//Call function to print Computer Selection
getComputerChoice();