// Searched google for this method of using a specific range with Math.random
const max = 3;
const min = 1;
let currentRound = 1;
const maxRounds = 5;
let humanChoice;
let computerChoice;

// Define human and computer scores and initialize them to 0 for later use
let humanScore = 0;
let computerScore = 0;

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

// Query the buttons that will designate user choices
const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const resultsDiv = document.querySelector(".results");
const roundResults = document.querySelector(".round-result");
const finalResults = document.querySelector(".final-results");
const playAgain = document.querySelector(".retry");

// Accept both human and computer choices and do the logic to check who won and increase score accordingly
const playRound = (humanChoice, computerChoice) => {
  if (currentRound === maxRounds) {
    rockButton.style.display = "none";
    paperButton.style.display = "none";
    scissorsButton.style.display = "none";
    resultsDiv.style.display = "none";
    roundResults.style.display = "none";
    finalResults.innerText =
      humanScore > computerScore
        ? `Your Score: ${humanScore}
    Computer Score: ${computerScore}
    Congratulations, you win!
    `
        : `Your Score: ${humanScore}
    Computer Score: ${computerScore}
    Unfortunately, you lose!
    `;
    playAgain.style.display = "block";
    playAgain.addEventListener("click", (e) => {
      window.location.reload();
    });
  } else {
    if (humanChoice === computerChoice) {
      resultsDiv.innerText = "You tied!";
    } else if (humanChoice === "rock" && computerChoice === "paper") {
      resultsDiv.innerText = "You lose! Paper beats Rock";
      computerScore += 1;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      resultsDiv.innerText = "You win! Rock beats Scissors";
      humanScore += 1;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      resultsDiv.innerText = "You lose! Scissors beats Paper";
      computerScore += 1;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      resultsDiv.innerText = "You win! Paper beats Rock";
      humanScore += 1;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      resultsDiv.innerText = "You lose! Rock beats Scissors";
      computerScore += 1;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      resultsDiv.innerText = "You Win! Scissors beats Paper";
      humanScore += 1;
    }
  }
};

// Listen for the buttons which are the user choices
rockButton.addEventListener("click", (e) => {
  humanChoice = "rock";
  computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);

  roundResults.innerText = `
    Human Choice: ${humanChoice} 
    Computer Choice: ${computerChoice} 
    Current Round: ${currentRound}
    Human Score: ${humanScore}
    Computer Score: ${computerScore}
    `;
  currentRound += 1;
});
paperButton.addEventListener("click", (e) => {
  humanChoice = "paper";
  computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
  roundResults.innerText = `
    Human Choice: ${humanChoice} 
    Computer Choice: ${computerChoice} 
    Current Round: ${currentRound}
    Human Score: ${humanScore}
    Computer Score: ${computerScore}
    `;
  currentRound += 1;
});
scissorsButton.addEventListener("click", (e) => {
  humanChoice = "scissors";
  computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
  roundResults.innerText = `
    Human Choice: ${humanChoice} 
    Computer Choice: ${computerChoice} 
    Current Round: ${currentRound}
    Human Score: ${humanScore}
    Computer Score: ${computerScore}
    `;
  currentRound += 1;
});
