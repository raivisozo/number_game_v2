let tries = 0;

function chosenNumber() {
  return Math.floor(Math.random() * (100 - 1 + 1)) + 1; 
}

let computerMove = chosenNumber();
let guessesCount = 0;

const buttonElement = document.querySelector('.js-reset');



function checkIfCorrect() {
  const guess = document.querySelector('.js-input').value;
  const textElement = document.querySelector('.js-guess');
  const guessCountElement = document.querySelector('.js-guesses-left');
  let guessesLeft = guessesCount <= 9;

  console.log(textElement);
  console.log(computerMove);
  console.log(guess);
  console.log(guessesLeft);


  if (Number(guess) === computerMove && guessesLeft){
    textElement.innerHTML = 'Correct.';
    buttonElement.removeAttribute('hidden');
    buttonElement.innerText = 'Reset Game';
    guessCountElement.innerHTML = ''
    return
  } else if (Number(guess) < computerMove && guessesLeft) {
    textElement.innerHTML = 'Guess to low.';
    guessesCount ++;
  } else if (Number(guess) > computerMove && guessesLeft) {
    textElement.innerHTML = 'Guess to high.';
    guessesCount ++;
  } else {
    buttonElement.removeAttribute('hidden');
    buttonElement.innerText = 'Reset Game';
    textElement.innerHTML = 'You have run out of guesses';
    guessCountElement.innerHTML = ''
    return
  }

  guessCountElement.innerHTML = `You have ${10-guessesCount} guesses left`
}

function resetGame() {
  buttonElement.setAttribute('hidden', '');
  document.querySelector('.js-input').value = '';
  guessesCount = 0;
  computerMove = chosenNumber();
  document.querySelector('.js-guess').innerHTML = '';
}

function handleCostKeydown(event) {
  if (event.key === 'Enter') {
    checkIfCorrect();
  }
}



