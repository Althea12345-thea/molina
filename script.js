let votes = {
  option1: 0,
  option2: 0,
  option3: 0,
  option4: 0,
  option5: 0,
  option6: 0,
  option7: 0
};

const voteBtn = document.getElementById('vote-btn');
const resultDiv = document.getElementById('result');

voteBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const vote = document.querySelector('input[name="vote"]:checked').value;
  if (vote) {
    votes[vote]++;
    let result = '';
    for (let option in votes) {
      result += `${option}: ${votes[option]} votes<br>`;
    }
    resultDiv.innerHTML = result;
  } else {
    resultDiv.innerHTML = 'Please select an option!';
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


