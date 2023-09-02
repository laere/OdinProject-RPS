function game() {
    //Way to keep score of player and comouter wins
    //Create variable for playerscore
    let playerScore = 0;
    //Create variable for computerscore
    let computerScore = 0;

    //Runs the base logic of the game
    function playRound(playerSelection, computerSelection) {
        //Input check
        
        //IF playerSelection === computerSelection
        if (playerSelection === computerSelection) {
            //return tie
            console.log(`It's a tie! You both chose ${playerSelection}.`)
            return;
        //ELSE IF playerSelection === "Rock" and computerSelection === "Scissors"
        } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
            console.log(`You win! ${playerSelection} beats ${computerSelection}`)
            return playerScore++;
        //ELSE IF playerSelection === "Paper" and computerSelection === "Rock"
        } else if (playerSelection === "Paper" && computerSelection === "Rock") {
            console.log(`You win! ${playerSelection} beats ${computerSelection}`)
            return playerScore++;
        //ELSE IF playerSelection === "Scissors" and computerSelection === "Paper"
        } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
            console.log(`You win! ${playerSelection} beats ${computerSelection}`)
            return playerScore++;
        } else {
            console.log(`You lose! ${computerSelection} beats ${playerSelection}`)
            return computerScore++;
        }    
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
        return prompt("Choose Rock, Paper, or Scissors!");
    }

    //Normalizes the player input
    //IE -> Player types in rOcK function returns Rock
    function normalizePlayerSelection(playerSelection) {
        let firstLetter = playerSelection.slice(0,1).toUpperCase();
        let restOfWord = playerSelection.slice(1).toLowerCase();

        let newPlayerSelection = firstLetter.concat(restOfWord);

        return newPlayerSelection;
    }

    //Game requires 5 rounds, we call the playRound function 5x
    for (let i = 0; i < 5; i++) {
        const playerSelection = normalizePlayerSelection(getPlayerSelection());
        const computerSelection = getComputerSelection();
        playRound(playerSelection, computerSelection);
    }

    function determineWinner() {
        const gameScore = console.log(`Player score: ${playerScore}`) +
                          console.log(`Computer score: ${computerScore}`);
        if (playerScore === computerScore) {
            console.log("It's a tie game!")
            return gameScore
        } else if (playerScore > computerScore) {
            console.log("You won the game! Congratulations!")
            return gameScore
        } else {
            console.log("You lost the game! Better luck next time!")
            return gameScore
        }
    }

    determineWinner();
}

game();