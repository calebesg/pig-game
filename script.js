'use strict';

const scorePlayer1 = document.getElementById('score--0');
const currentPlayer1 = document.getElementById('current--0');

const scorePlayer2 = document.getElementById('score--1');
const currentPlayer2 = document.getElementById('current--1');

const diceElement = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

scorePlayer1.textContent = 0;
scorePlayer2.textContent = 0;
diceElement.classList.add('hidden');

let current = 0;
let hold = 'PLAYER 1';
let score1 = 0;
let score2 = 0;

const setCurrentScore = function (dice) {
  switch (hold) {
    case 'PLAYER 1':
      current += dice;
      currentPlayer1.textContent = current;
      break;
    case 'PLAYER 2':
      current += dice;
      currentPlayer2.textContent = current;
      break;
  }
};

const setPlayerScore = function () {
  switch (hold) {
    case 'PLAYER 1':
      score1 += current;
      scorePlayer1.textContent = score1;
      currentPlayer1.textContent = 0;
      break;
    case 'PLAYER 2':
      score2 += current;
      scorePlayer2.textContent = score2;
      currentPlayer2.textContent = 0;
      break;
  }
};

const changerHold = function () {
  setPlayerScore();
  current = 0;
  hold = hold === 'PLAYER 1' ? 'PLAYER 2' : 'PLAYER 1';
};

btnRoll.addEventListener('click', function () {
  const dice = Math.trunc(Math.random() * 6) + 1;

  diceElement.classList.remove('hidden');
  diceElement.src = `./images/dice-${dice}.png`;

  if (dice !== 1) setCurrentScore(dice);
  else if (dice === 1) changerHold();
});
