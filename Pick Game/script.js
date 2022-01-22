'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
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
let playing = true
const scores = [0, 0];

const switchPlayer = function () {
  currentScore = 0;
  if (activePlayer === 0) {
    currentScore0El.textContent = currentScore;
    activePlayer = 1;
  } else {
    currentScore1El.textContent = currentScore;
    activePlayer = 0;
  }

  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceImageEl.classList.remove('hidden');
    diceImageEl.src = `dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;
      if (activePlayer === 0) currentScore0El.textContent = currentScore;
      else currentScore1El.textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer ? 1 : 0}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 10) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
        document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--active');
        diceImageEl.classList.add('hidden');
      return;
    }

    switchPlayer();
  }
});

btnNew.addEventListener('click', function() {
  playing = true
  player0El.classList.remove('player--winner')
  player1El.classList.remove('player--winner', 'player--active')
  player0El.classList.add('player--active')
  currentScore = 0;
  activePlayer = 0;
  scores = [0,0]
  score0El.textContent = 0
  score1El.textContent = 0
  currentScore0El.textContent = 0
  currentScore1El.textContent = 0
})