
const options = ['Rock', 'Paper', 'Scissors'];
const PlayerSelection = prompt("Rock, Paper Scissors?!")
console.log(playRound(computerPlay(),PlayerSelection));

function computerPlay() {
  return options[Math.floor(Math.random() * 3 )]
}

function playRound(computerSelection, PlayerSelection) {
  if ((capitalize(PlayerSelection) == options[0] && computerSelection == options[2]) || (capitalize(PlayerSelection) == options[1] && computerSelection == options[0]) || (capitalize(PlayerSelection) == options[2] && computerSelection == options[1])) {
    console.log("You Win! " + capitalize(PlayerSelection) + " Beats " + computerSelection)
  }
  else if (capitalize(PlayerSelection) == computerSelection) {
    console.log("Tie!")
  }
  else {
    console.log("You Lose! " + computerSelection + " Beats " + capitalize(PlayerSelection))
  }
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
