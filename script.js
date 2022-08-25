// Get Computer Choice
function getComputerChoice(){
    let choice = ['Rock', 'Paper', 'Scissors'];
    let computerSelection = choice[Math.floor(Math.random() * choice.length)];
    return computerSelection;
}

// Get Player Choice
function getPlayerChoice(){
    let playerEntry = prompt("What will you play?");
    let playerSelection = playerEntry.charAt(0).toUpperCase() + playerEntry.slice(1).toLowerCase();
    return playerSelection;
}

function playRound(playerSelection, computerSelection){
    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();

    // Compare Computer Choice & Player Choice
    if (playerSelection === computerSelection){
        return 'No winner.';
    } else if ((playerSelection === 'SCISSORS' && computerSelection === 'ROCK') ||
                (playerSelection === 'ROCK' && computerSelection === 'PAPER') ||
                (playerSelection === 'PAPER' && computerSelection === 'SCISSORS')){
                    return 'You lose! ' + computerSelection + ' beats ' + playerSelection;
    } else {
        return 'You win! ' + playerSelection + ' beats ' + computerSelection;
    }
}

