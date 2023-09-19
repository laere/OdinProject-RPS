function game() {
    //Way to keep score of player and comouter wins
    //Create variable for playerscore
    let playerScore = 0;
    //Create variable for computerscore
    let computerScore = 0;
    //create a variable that tracks number of rounds
    let gameRounds = 0;
    function playRound(playerSelection, computerSelection) {
        if (gameRounds === 5) {
            return determineWinner();
        }
        let currentScore = document.getElementById('score');
        let currentResult = document.getElementById('results');
        //IF playerSelection === computerSelection
        if (playerSelection === computerSelection) {
            //return tie
            // console.log(`It's a tie! You both chose ${playerSelection}.`)
            gameRounds++
            currentResult.textContent = `It's a tie! You both chose ${playerSelection}.`;
            currentScore.textContent = `Player: ${playerScore} Computer: ${computerScore}`; 
        } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
            gameRounds++;
            playerScore++;
            currentResult.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
            currentScore.textContent = `Player: ${playerScore} Computer: ${computerScore}`; 
            // return playerScore++;
        } else if (playerSelection === "Paper" && computerSelection === "Rock") {
            gameRounds++;
            playerScore++;
            currentResult.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
            currentScore.textContent = `Player: ${playerScore} Computer: ${computerScore}`; 
            // console.log(`You win! ${playerSelection} beats ${computerSelection}`)
            // return playerScore++;
        } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
            gameRounds++;
            playerScore++;
            currentResult.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
            currentScore.textContent = `Player: ${playerScore} Computer: ${computerScore}`;  
            // console.log(`You win! ${playerSelection} beats ${computerSelection}`)
            // return playerScore++;
        } else {
            computerScore++;
            gameRounds++;
            currentResult.textContent = `You lose! ${computerSelection} beats ${playerSelection}`
            currentScore.textContent = `Player: ${playerScore} Computer: ${computerScore}`; 
            // console.log(`You lose! ${computerSelection} beats ${playerSelection}`)
            // return computerScore++;
        }    
        console.log(gameRounds)
    }

    //Returns the computers slection
    function getComputerSelection() {
        //We want the computer to choose Rock, Paper, Scissors based on a range of numbers between 1-10.
        //Create variable that holds the randomized number
        let num = Math.floor(Math.random() * 10) + 1;
        // console.log("NUM" + " " + num);
        //IF 1-3 ROCK
        if (num >= 1 && num <= 3) {
            return "Rock";
        //IF 4-6 PAPER
        } else if (num >=4 && num <= 6) {
            return "Paper";
        //ELSE SCISSORS
        } else {
            return "Scissors";
        }

    }

    //Returns the players selection
    function getPlayerSelection() {
        const playerSelection = e.target.textContent;
        return playerSelection;
    }

    //Normalizes the player input
    //IE -> Player types in rOcK function returns Rock
    // function normalizePlayerSelection(playerSelection) {
    //     let firstLetter = playerSelection.slice(0,1).toUpperCase();
    //     let restOfWord = playerSelection.slice(1).toLowerCase();

    //     let newPlayerSelection = firstLetter.concat(restOfWord);

    //     return newPlayerSelection;
    // }


    function determineWinner() {
        const winner = document.getElementById('winner');
        if (playerScore === computerScore) {
            return winner.textContent = "It's a tie game!";
        } else if (playerScore > computerScore) {
            return winner.textContent = `You won with a score of ${playerScore}!`;
        } else {
            return winner.textContent = "You lost! Better luck next time."
        }
    }

    //add eventlisteners to your buttons;
        const buttons = document.querySelectorAll('button');
        
        buttons.forEach(button => {
            button.addEventListener('click', e => {
                const playerSelection = e.target.textContent;
                const computerSelection = getComputerSelection();
                playRound(playerSelection, computerSelection);
                console.log(e);
             })
        })
        
        function reset() {
            playerScore = 0;
            computerScore = 0;
            gameRounds = 0;
        }

        
       

    //Game requires 5 rounds, we call the playRound function 5x
    // for (let i = 0; i < 5; i++) {
    //     const playerSelection = getPlayerSelection();
    //     const computerSelection = getComputerSelection();
    //     playRound(playerSelection, computerSelection);
    // }

    // determineWinner();
    
}

game();



