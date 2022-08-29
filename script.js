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

// A function to play one round of game
function playRound(playerSelection, computerSelection){

    computerSelection = getComputerChoice();

    // Compare Computer Choice & Player Choice
    if (playerSelection === computerSelection){
        let result = 'tie';
        addResult.textContent += 'No winner.';
        return result
    } else if ((playerSelection === 'Scissors' && computerSelection === 'Rock') ||
                (playerSelection === 'Rock' && computerSelection === 'Paper') ||
                (playerSelection === 'Paper' && computerSelection === 'Scissors')){
                    addResult.textContent += 'You lose! ' + computerSelection + ' beats ' + playerSelection;
                    let result = 'playerLose';
                    return result;
    } else {
        addResult.textContent += 'You win! ' + playerSelection + ' beats ' + computerSelection;
        let result = 'playerWin';
        return result;
    }
}

//A function to play 5 rounds and keeps score
/*
function game(){
    let playerScore = 0;
    let computerScore = 0;
    
    for (let i = 0; i < 5; i++){
        let gameResult = playRound();

        if (gameResult === 'playerWin'){
            playerScore++;
            console.log('Player Score: '+ playerScore.toString());
        } else if (gameResult === 'playerLose'){
            computerScore++;
            console.log('Computer Score: '+ computerScore.toString());
        } else {
        }
    }

    if (playerScore > computerScore){
        console.log('Player wins! Player Score: ' + playerScore.toString() + ' | Computer Score: ' + computerScore.toString());
    } else if (computerScore > playerScore){
        console.log('Computer wins! Player Score: ' + playerScore.toString() + ' | Computer Score: ' + computerScore.toString());
    } else {
        console.log('Tie game.');
    }
}*/

const rockSelect = document.querySelector('#rock');
rockSelect.onclick = () => playRound('Rock', getComputerChoice());

const paperSelect = document.querySelector('#paper');
paperSelect.onclick = () => playRound('Paper', getComputerChoice());

const scissorsSelect = document.querySelector('#scissors');
scissorsSelect.onclick = () => playRound('Scissors', getComputerChoice());

const addResult = document.querySelector('#results');

const newPara = document.createElement('p');