
// create constant for the computer's options. Allows for comparison to determine winner.
const options = ['Rock', 'Paper', 'Scissors'];


// Call the game() function in order to play 5 rounds.
game()


// Function that sets the computer's option for the round. 
function computerPlay() {
  return options[Math.floor(Math.random() * 3 )]
}

// Function that calls computerPlay, plays one round of RPS.
// Returns true if player wins, false if player loses and 0 if it is a tie.
// Displays a message of the results of the round.
function playRound(computerSelection, playerSelection) {
  if (playerSelection == options[0] && computerSelection == options[2] || playerSelection == options[1] && computerSelection == options[0] || playerSelection == options[2] && computerSelection == options[1]) {
    console.log("You Win! " + playerSelection + " Beats " + computerSelection)
    return true
  }
  else if (playerSelection == computerSelection) {
    console.log("Tie! " + playerSelection + " and " + computerSelection)
    return 0
  }
  else {
    console.log("You Lose! " + computerSelection + " Beats " + playerSelection)
    return false
  }
}

// Function that capitalizes in order to make comparisons simple. 
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

// Calls the playRound function five times and determines a winner, a loser or a tie.
function game() {
  let win = 0;
  let lose = 0;
  let results;
  for (let i = 0; i < 5; i++) {
    // prompt for the player's selection.
    const playerSelection = capitalize(prompt("5 Round Match. Rock, Paper, Scissors?!"))
    // create a variable to store the result of the round. Call the playRound function.
    results = playRound(computerPlay(),playerSelection);

    if (results) { //Tally wins and losses and determines the winner. 
      win++
    }
    else if (results === false) {
    lose++
    }
  }
  // Display message of the results of the game.
  if (win > lose) {
    return console.log("Congratulations! You win!")
  }
  else if (lose > win) {
    return console.log("Sorry! You Lose!")
  }
  else {
    return console.log("Tie!")
  }
}
