// Searched google for this method of using a specific range with Math.random
const max = 3;
const min = 1;
const maxRounds = 5;
const getComputerChoice = () => {
  let choice = Math.floor(Math.random() * (max - min + 1)) + min;
// defined a value for each number of the range
  if (choice == 1) {
    return "rock";
  } else if (choice == 2) {
    return "paper";
  } else {
    return "scissors";
  }
};
// Take human input and use it with loLowerCase() to accept the answer in any form
const getHumanChoice = () => {
  let choice = prompt("Choose your weapon");
  if (choice.toLowerCase() == "rock") {
    return "rock";
  } else if (choice.toLowerCase() == "paper") {
    return "paper";
  } else {
    return "scissors";
  }
};
// Define human and computer scores and initialize them to 0 for later use
let humanScore = 0;
let computerScore = 0;
// Accept both human and computer choices and do the logic to check who won and increase score accordingly
const playRound = (humanChoice, computerChoice) => {
  if (humanChoice == computerChoice) {
    console.log("You tied!");
  } else if (humanChoice == "rock" && computerChoice == "paper") {
    console.log("You lose! Paper beats Rock");
    computerScore += 1;
  } else if (humanChoice == "rock" && computerChoice == "scissors") {
    console.log("You win! Rock beats Paper");
    humanScore += 1;
  } else if (humanChoice == "paper" && computerChoice == "scissors") {
    console.log("You lose! Scissors beats Paper");
    computerScore += 1;
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    console.log("You win! Paper beats Rock");
    humanScore += 1;
  } else if (humanChoice == "scissors" && computerChoice == "rock") {
    console.log("You lose! Rock beats Scissors");
    computerScore += 1;
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    console.log("You Win! Scissors beats Paper");
    humanScore += 1;
  }
};
// Redo the same process of the previous logic 5 times
const playGame = () => {
  for (let i = 1; i <= 5; i++) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    console.log("Computer Choice: " + computerChoice);
    console.log("Your Choice: " + humanChoice);
    console.log("Your Score: " + humanScore);
    console.log("Computer Score: " + computerScore);
    console.log("Round: " + i);
  }
};
// Run the main command to play rock paper scissors
playGame();
