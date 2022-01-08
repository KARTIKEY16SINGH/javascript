'use strict';

const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceImageEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const currentScore0El = document.getElementById('current--0');
const currentScore1El = document.getElementById('current--1');

score0El.textContent = 0;
score1El.textContent = 0;

diceImageEl.classList.add('hidden');

let currentScore = 0;
let activePlayer = 0;
const scores = [0, 0];

btnRoll.addEventListener('click', function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceImageEl.classList.remove('hidden');
  diceImageEl.src = `dice-${dice}.png`;

  if (dice !== 1) {
    currentScore += dice;
    if (activePlayer == 0) currentScore0El.textContent = currentScore;
    else currentScore1El.textContent = currentScore;
  } else {
    currentScore = 0;
    if (activePlayer == 0) currentScore0El.textContent = currentScore;
    else currentScore1El.textContent = currentScore;
    activePlayer = !activePlayer;
    player0El.classList.toggle('player--active')
    player1El.classList.toggle('player--active')
  }
});
