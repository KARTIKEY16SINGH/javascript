'use strict';
let score = 20;
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 21);
console.log(secretNumber);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No number!';
  } else if (guess == secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = '📈 Too high';
    score--;
  } else {
    document.querySelector('.message').textContent = '📉 Too Low';
    score--;
  }
  if (score < 1) {
    document.querySelector('.message').textContent = '💥 you lost the game!';
  } else {
    document.querySelector('.score').textContent = score;
  }
});

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  const number = document.querySelector('.number');
  number.textContent = '?';
  number.style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  secretNumber = Math.trunc(Math.random() * 21);
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...'
});
