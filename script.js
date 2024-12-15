let words = ["javascript", "html", "css", "java"];
let selectedWord = '';
let displayedWord = '';
let lives = 5;
let score = 0;
let guessedLetters = [];

function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * words.length);
  selectedWord = words[randomIndex];
  displayedWord = selectedWord.replace(/./g, '_');
  document.getElementById("wordDisplay").innerText = displayedWord;
  document.getElementById("livesCount").innerText = lives;
  document.getElementById("scoreValue").innerText = score;
  document.getElementById("message").innerText = '';
}

function updateHangmanImage() {
  const hangmanImage = document.getElementById('hangman-img');
  hangmanImage.src = `hangman${5 - lives}.png`; 
}

function guessLetter() {
  const letter = document.getElementById("letterInput").value.toLowerCase();
  document.getElementById("letterInput").value = '';
  
  if (!letter || guessedLetters.includes(letter)) return;

  guessedLetters.push(letter);

  if (selectedWord.includes(letter)) {
    let updatedWord = '';
    for (let i = 0; i < selectedWord.length; i++) {
      updatedWord += selectedWord[i] === letter ? letter : displayedWord[i];
    }
    displayedWord = updatedWord;
    document.getElementById("wordDisplay").innerText = displayedWord;

    if (!displayedWord.includes('_')) {
      score += 3;
      document.getElementById("scoreValue").innerText = score;
      document.getElementById("message").innerText = 'You win!';
    }
  } else {
    lives--;
    updateHangmanImage();
    document.getElementById("livesCount").innerText = lives;
    if (lives === 0) {
      document.getElementById("message").innerText = 'Game Over!';
      score = Math.max(0, score - 1); 
      document.getElementById("scoreValue").innerText = score;
    }
  }
}
getRandomWord();
