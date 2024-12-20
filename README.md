# Guess the Number Game

## Overview
This is a simple and interactive number-guessing game where the user guesses a randomly generated number between 1 and 20. The game provides feedback on each guess ("Too high", "Too low", or "Correct") and keeps track of the score and high score.
Check Here: https://stellar-strudel-922254.netlify.app/

## Features
- Black and white modern theme.
- Displays messages based on user input.
- Tracks the user's score and high score.
- Reset functionality to start a new game.

## Technologies Used
- **HTML**: Structure of the game.
- **CSS**: Styling for a visually appealing design.
- **JavaScript**: Logic for game functionality.

## How to Play
1. Enter a number between 1 and 20 in the input field.
2. Click the **Check** button to validate your guess.
   - If the guess is correct, the square displays the number, and a success message is shown.
   - If the guess is incorrect, the game displays whether the guess is "Too high" or "Too low" and reduces the score.
3. Click the **Again** button to reset the game and start over.

## Files
- `index.html`: The main HTML file containing the game structure.
- `style.css`: Contains styles for the game.
- `script.js`: JavaScript file for the game logic.

## Code Highlights
### Random Number Generation
```javascript
let random_num = Math.floor(Math.random() * 20) + 1;
```
This generates a random number between 1 and 20.

### Score Management
```javascript
if (score > 1) {
    message.textContent = guess < random_num ? "Too low!" : "Too high!";
    score--;
    scoreElem.textContent = score;
} else {
    message.textContent = "Game over! You lost. 😔";
    scoreElem.textContent = 0;
}
```
Manages the user's score, displaying a "Game Over" message when the score reaches zero.

### Reset Functionality
```javascript
const againFunc = () => {
    score = 20;
    random_num = Math.floor(Math.random() * 20) + 1;
    message.textContent = "Make a guess to see the result!";
    quest_square.textContent = "?";
    quest_square.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
    scoreElem.textContent = score;
    input.value = "";
};
```
Resets the game state for a fresh start.

## Installation
1. Clone the repository or download the files.
2. Open `index.html` in a web browser.

## Future Improvements
- Add difficulty levels with adjustable ranges.
- Add a timer to limit the time for guessing.
- Implement animations for feedback messages.

## License
This project is open-source and available under the [MIT License](LICENSE).

