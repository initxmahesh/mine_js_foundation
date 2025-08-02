/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
// What is ASCIIART? Check the README.md or Workshop to see why ASCIIART is defined in your file.
const ASCIIART = [
  `

  O   
 /|\\\  
 / \\\  

=========`,
  `

  O      
 /|\\\   
 /       


=========`,
  `

  O      
 /|\\\   


=========`,
  `

  O      
 /|      


=========`,
  `

  O      
  |      


=========`,
  `

  O      



=========`,
  `





=========`,
];

class VanishingMan {
  constructor(secretWord) {
    this.secretWord = secretWord.split("");
    this.remainingGuesses = 6;
    this.lettersGuessed = [];
    this.gameState = "playing";
  }

  submitGuess(char) {
    if (this.gameState !== "playing") return;

    const guess = char.toLowerCase();
    if (!this.lettersGuessed.includes(guess)) {
      this.lettersGuessed.push(guess);
      if (!this.secretWord.includes(guess)) {
        this.remainingGuesses--;
      }
    }
    this.computeGameState();
  }

  computeGameState() {
    let won = this.secretWord.every(
      (letter) => this.lettersGuessed.includes(letter) || letter === " "
    );
    if (this.remainingGuesses === 0) {
      this.gameState = "lost";
    } else if (won) {
      this.gameState = "won";
    } else {
      this.gameState = "playing";
    }
  }

  getSecretWordPuzzle() {
    let secretWordString = "";
    for (let ele of this.secretWord) {
      if (this.lettersGuessed.includes(ele)) {
        secretWordString += ele;
      } else if (ele === " ") {
        secretWordString += " ";
      } else secretWordString += "#";
    }
    return secretWordString;
  }

  getGameStateMessage() {
    if (this.gameState === 'playing') {
      return `There is a total of ${this.remainingGuesses} guesses remaining:\n${ASCIIART[this.remainingGuesses]}`;
    }
    else if (this.gameState === 'won') {
      return `Winner Winner Chicken Dinner, you won!`
    }
    else if (this.gameState === 'lost') {
      return `Game Over, the word was "${this.secretWord.join("")}":\n${
        ASCIIART[0]}`;
    }
  }
}

function simulateVanishingMan(secretWord) {
  const game = new VanishingMan(secretWord);
  for (const char of secretWord) {
    game.submitGuess(char);
    game.computeGameState();
    if (game.gameState !== "playing") break;
  }
  return game.getGameStateMessage();
}