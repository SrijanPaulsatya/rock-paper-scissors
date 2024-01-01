function indexGenerator () {
    let index = Math.floor(Math.random() * 10);
    if (index < 3) {
        return index;
    }
    else { 
        return indexGenerator();
    }
}
function getComputerChoice () {
    let index = indexGenerator();
    let options = ["Rock","Paper","Scissors"];
    let computerChoice = options[index];
    return computerChoice;
}

let computerScore = 0;
let playerScore = 0;

// let clickCount = 0;
// function updateClickCount () {
//     clickCount++;
// }


function playRound (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    scoresDiv.textContent = "Let's Start";
    if (playerScore < 5 && computerScore < 5) {
        if ((playerSelection === "rock" && computerSelection === "scissors")|| 
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")) {
            playerScore += 1;
            scoresDiv.innerHTML += `<br>Player Won:         <br>Player-Score: ${playerScore}       Computer-Score: ${computerScore}`;
            return 'Player Won';
        }
        else if (playerSelection === computerSelection) {
        playerScore += 1;
        computerScore += 1;
        scoresDiv.innerHTML += `<br>Tie:        <br>Player-Score: ${playerScore}       Computer-Score: ${computerScore}`;
        return 'Tie';
        }
        else {
        computerScore +=1;
        scoresDiv.innerHTML += `<br>Computer Won:       <br>Player-Score: ${playerScore}       Computer-Score: ${computerScore}`;
        return 'Computer Won';
        }
    }
    else if (playerScore === 5 || computerScore === 5){
        if (computerScore === 5 && playerScore === 5){
            scoresDiv.innerHTML += "<br><br>Both Won the Game";
            computerScore ++;
            playerScore ++;
        }
        else if (playerScore === 5) {
            playerScore += 1;
            scoresDiv.innerHTML += "<br><br>You have Won the Game, GG's";
        }
        else if (computerScore === 5){
            computerScore += 1;
            scoresDiv.innerHTML += "<br><br>Oink Oink, Computer has won the game, Better Luck Next Time";
        }
    }
    else {
        clickCount = 0;
        computerScore = 0;
        playerScore = 0;
    }
    
}



const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const scoresDiv = document.querySelector('.scores');



rockButton.addEventListener('click', () => {
    playRound('rock',getComputerChoice());
    // updateClickCount();
});
paperButton.addEventListener('click', () => {
    playRound('paper',getComputerChoice());
    // updateClickCount();
});
scissorsButton.addEventListener('click', () => {
    playRound('scissors',getComputerChoice());
    // updateClickCount();
});




/* function game () {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 1; i <= 5; i++) {
        let computerSelection = getComputerChoice();
        let playerSelection = 
        let gameRound = playRound(playerSelection,computerSelection);
        if (gameRound === 'Player Won') {
            playerScore += 1;
            console.log(`Let's go You Win!! ${playerSelection} beats ${computerSelection}`);
        }
        else if (gameRound === 'Computer Won') {
            computerScore += 1;
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
        }
        else {
            playerScore += 0;
            computerScore += 0;
            console.log("That's a tie GGs");
        }
    }
    if (playerScore > computerScore) {
        console.log("You have won the game in the best of 5 rounds. GG's Well Played!");
        return null;
    }

    if (playerScore < computerScore) {
        console.log("Computer has won the game in the best of 5 rounds. Better Luck next time!");
        return null;
    }

    if (playerScore === computerScore) {
        console.log("It was tie, in best of 5 rounds that's rare. You both were lucky")
        return null;
    }
}
 */
// console.log(game());
