
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

// UI Work

// Play game on click. Calls UI functions and playRound.
const game = function() {

  // Game functions.
  displayRounds();
  // Get computer's selection.
  computerSelection = computerPlay();
  // Play one round and messages result in log.
  tallyResults(playRound(computerSelection, event.target.id));

  // UI functions.
  // Calls functions for zawa effects.
  if (rounds > 7 || win > 3 || lose > 3) {
    visualZawa();
    zawafade("in");
    // Play ambience music.
    const audio = new Audio('music/zawazawasfx.mp3');
    audio.play();
  }
  // Move cards around as the game plays.
  playCards();
  // Prevents player from clicking cards and adding them to play during a round in progress.
  if (!(document.getElementById("playingField").innerHTML.trim().length == 0)) {
    for (let i = 0; i < cards.length; i++) {
      cards[i].style.pointerEvents = 'none';
    }
  }
  // Display message of the results of the game.
  if (win > lose) {
    return console.log("Congratulations! You win!")
  }
}




// Counts number of rounds and wins.
function tallyResults(results) {
  rounds++;
  // Stores playRound results in a variable.
  let resultsBool = results;
  UIaddStar(resultsBool)
  if (resultsBool) { win++; }
  else if(resultsBool === false) { lose++; }
  if (rounds > 5) {
    findWinner();
  }
}

// Displays number of wins and loses
function UIaddStar(resultsBool) {
  const star = document.createElement("img");
  star.setAttribute("src", `images/Star1.png`);
  star.setAttribute("alt", `Star , from anime series 'Kaiji'`);

  if (resultsBool) {document.getElementById("playerStars").appendChild(star);}
  else if (resultsBool === false) {document.getElementById("computerStars").appendChild(star);}
}

// Adds round results to the game log.
function writeResults(msg) {
  const a = document.getElementById("gameLog")
  const b = document.createElement('p');
  b.textContent = msg;
  a.appendChild(b);
}

// Finds a winner and displays and alert to the user.
function findWinner() {
  if (win == 5) { alert("Congratulations, you win!") }
  else if (lose == 5) { alert("Sorry, you lose!") }
}

function displayRounds() {
  let t = document.getElementById("h1")
  if (t.innerHTML.trim().length > 16) {
    const a = t.textContent.replace(`${rounds-1}`, "")
    t.textContent = a;
  }
  const y = document.createTextNode(`${rounds}`);
  t.appendChild(y);
}

// Old code from phase 1.
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