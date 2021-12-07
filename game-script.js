
// create constant for the computer's options. Allows for comparison to determine winner.
const options = ['Rock', 'Paper', 'Scissors'];
// declare computerSelection
let computerSelection;
// declare number of rounds
let rounds = 1;


// declare number of wins and loses
let win = 0;
let lose = 0;

// Function that sets the computer's option for the round. 
function computerPlay() {
  return options[Math.floor(Math.random() * 3 )]
}

// Function that calls computerPlay, plays one round of RPS.
// Returns true if player wins.
// Displays a message of the results of the round.
function playRound(computerSelection, playerSelection) {
  let msg = "";
  if (playerSelection == options[0] && computerSelection == options[2] || playerSelection == options[1] && computerSelection == options[0] || playerSelection == options[2] && computerSelection == options[1]) {
    msg = "You Win! " + playerSelection + " Beats " + computerSelection;
    writeResults(msg);
    return true
  }
  else if (playerSelection == computerSelection) {
    msg = "Tie! " + playerSelection + " and " + computerSelection;
    writeResults(msg);
    return 0
  }
  else {
    msg = "You Lose! " + computerSelection + " Beats " + playerSelection;
    writeResults(msg);
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

// Old code.
// Calls the playRound function five times and determines a winner, a loser or a tie.
// function game() {
//   let win = 0;
//   let lose = 0;
//   let results;
//   for (let i = 0; i < 5; i++) {
//     // prompt for the player's selection.
//     const playerSelection = capitalize(prompt("5 Round Match. Rock, Paper, Scissors?!"))
//     // create a variable to store the result of the round. Call the playRound function.
//     results = playRound(computerPlay(),playerSelection);

//     if (results) { //Tally wins and losses and determines the winner. 
//       win++
//     }
//     else if (results === false) {
//     lose++
//     }
//   }
//   // Display message of the results of the game.
//   if (win > lose) {
//     return console.log("Congratulations! You win!")
//   }
//   else if (lose > win) {
//     return console.log("Sorry! You Lose!")
//   }
//   else {
//     return console.log("Tie!")
//   }
// }
// Function that capitalizes in order to make comparisons simple. 
// function capitalize(string) {
//   return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
// }