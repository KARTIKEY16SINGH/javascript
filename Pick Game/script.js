'use strict';

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceImageEl = document.querySelector('.dice');

score0El.textContent = 0;
score1El.textContent = 0;

diceImageEl.classList.add('hidden');
