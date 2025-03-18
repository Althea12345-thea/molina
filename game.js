// Get the game choice buttons
const rockBtn = document.getElementById('rock-btn');
const paperBtn = document.getElementById('paper-btn');
const scissorsBtn = document.getElementById('scissors-btn');

// Get the result paragraph element
const resultPara = document.getElementById('result');

// Get the player and computer score elements
const playerScoreSpan = document.getElementById('player-score');
const computerScoreSpan = document.getElementById('computer-score');

// Initialize player and computer scores
let playerScore = 0;
let computerScore = 0;

// Function to generate a random computer choice
function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
}

// Function to determine the winner
function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return 'It\'s a tie!';
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    return 'You win!';
  } else {
    return 'You lose!';
  }
}

// Add event listeners to the game choice buttons
rockBtn.addEventListener('click', () => {
  const computerChoice = getComputerChoice();
  const result = determineWinner('rock', computerChoice);
  resultPara.textContent = `You chose rock. Computer chose ${computerChoice}. ${result}`;
  if (result === 'You win!') {
    playerScore++;
    playerScoreSpan.textContent = playerScore;
  } else if (result === 'You lose!') {
    computerScore++;
    computerScoreSpan.textContent = computerScore;
  }
});

paperBtn.addEventListener('click', () => {
  const computerChoice = getComputerChoice();
  const result = determineWinner('paper', computerChoice);
  resultPara.textContent = `You chose paper. Computer chose ${computerChoice}. ${result}`;
  if (result === 'You win!') {
    playerScore++;
    playerScoreSpan.textContent = playerScore;
  } else if (result === 'You lose!') {
    computerScore++;
    computerScoreSpan.textContent = computerScore;
  }
});

scissorsBtn.addEventListener('click', () => {
  const computerChoice = getComputerChoice();
  const result = determineWinner('scissors', computerChoice);
  resultPara.textContent = `You chose scissors. Computer chose ${computerChoice}. ${result}`;
  if (result === 'You win!') {
    playerScore++;
    playerScoreSpan.textContent = playerScore;
  } else if (result === 'You lose!') {
    computerScore++;
    computerScoreSpan.textContent = computerScore;
  }
}); 

const form = document.getElementById('feedback-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const feedback = document.getElementById('feedback').value;

  // Send data to server or email address
  console.log('Form submitted:', name, email, feedback);
  alert('Thank you for your feedback!');
}); 
const introBtn = document.querySelector('.intro-btn'); 

