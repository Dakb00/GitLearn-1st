let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

updateScoreElement();

function playGame(playerMove) {
  const computerMove = pickComputerMove()

  let result = '';

  if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'loser, don\'t use scissor';
    } else if (computerMove === 'paper') {
      result = 'winner';
    } else if (computerMove === 'scissors') {
      result = 'tie';
    }
  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'winner';
    } else if (computerMove === 'paper') {
      result = 'tie';
    } else if (computerMove === 'scissors') {
      result = 'loser, it was a bad idea to choose paper';
    }
  } else if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'tie';
    } else if (computerMove === 'paper') {
      result = 'loser, dumb as a rock';
    } else if (computerMove === 'scissors') {
      result = 'winner';
    }
  }

  if (result === 'winner') {
    score.wins += 1;
  } else if (result === 'loser') {
    score.losses += 1;
  } else if (result === 'tie') {
    score.ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();

  document.querySelector('.js-result').
  innerHTML = result; 

  document.querySelector('.js-moves').
  innerHTML = `You
<img src="images/${playerMove}-emoji.png" class="move-icon">
<img src="images/${computerMove}-emoji.png" class="move-icon">
Computer`;
}

function updateScoreElement () {
  document.querySelector('.js-score')
  .innerHTML =  `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber <= 1) {
    computerMove = 'scissors';
  }

  return computerMove;
}
