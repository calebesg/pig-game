'use strict';

const scorePlayer1 = document.getElementById('score--0');
const scorePlayer2 = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player1El = document.querySelector('.player--0');
const player2El = document.querySelector('.player--1');
const diceElement = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let score, currentScore, activePlayer, playing;

const init = (function () {
  score = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  palying = true;

  scorePlayer1.textContent = 0;
  scorePlayer2.textContent = 0;
  diceElement.classList.add('hidden');
  current0El.textContent = 0;
  current1El.textContent = 0;
  player1El.textContent = 0;
  player2El.textContent = 0;
})();

const updateCurrent = function () {
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
};

const switchPlayer = function () {
  currentScore = 0;
  updateCurrent();
  activePlayer = activePlayer === 1 ? 0 : 1;

  player1El.classList.toggle('player--active');
  player2El.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function () {
  if (palying === false) return -1;

  const dice = Math.trunc(Math.random() * 6) + 1;

  diceElement.classList.remove('hidden');
  diceElement.src = `./images/dice-${dice}.png`;

  if (dice !== 1) {
    currentScore += dice;
    updateCurrent();
  } else if (dice === 1) {
    switchPlayer();
  }
});

btnHold.addEventListener('click', function () {
  if (palying === false) return -1;

  score[activePlayer] += currentScore;

  document.getElementById(`score--${activePlayer}`).textContent =
    score[activePlayer];

  if (score[activePlayer] < 20) {
    switchPlayer();
    return -1;
  }

  palying = false;

  const playerWinner = activePlayer === 0 ? player1El : player2El;

  playerWinner.classList.add('player--winner');
  playerWinner.classList.remove('player--active');

  diceElement.classList.add('hidden');
});

btnNew.addEventListener('click', init);
