// Generate a random number between 1 and 20
let random_num = Math.floor(Math.random() * 20) + 1;

// Access elements from the UI
let input = document.querySelector("input[type='number']");
let quest_square = document.querySelector(".square");
let message = document.querySelector(".message");
let check = document.querySelector("button:nth-of-type(1)");
let again = document.querySelector("button:nth-of-type(2)");
let scoreElem = document.querySelector(".score-container div:nth-of-type(1) span");
let highScoreElem = document.querySelector(".score-container div:nth-of-type(2) span");

// Initialize scores
let score = 20;
let highScore = 0;

// Function to handle the "Check" button click
const checkFunc = () => {
    const guess = Number(input.value);

    if (!guess) {
        message.textContent = "Please enter a valid number!";
    } else if (guess === random_num) {
        message.textContent = "You win! It's the right guess 🤩🎉";
        quest_square.textContent = random_num;
        quest_square.style.backgroundColor = "#04aa6d";
        quest_square.style.color = "#fff";
        if (score > highScore) {
            highScore = score;
            highScoreElem.textContent = highScore;
        }
    } else {
        if (score > 1) {
            message.textContent = guess < random_num ? "Too low!" : "Too high!";
            score--;
            scoreElem.textContent = score;
        } else {
            message.textContent = "Game over! You lost. 😔";
            scoreElem.textContent = 0;
        }
    }
};

// Function to handle the "Again" button click
const againFunc = () => {
    score = 20;
    random_num = Math.floor(Math.random() * 20) + 1;
    message.textContent = "Make a guess to see the result!";
    quest_square.textContent = "?";
    quest_square.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
    quest_square.style.color = "#fff";
    scoreElem.textContent = score;
    input.value = "";
};

// Attach event listeners to buttons
check.addEventListener("click", checkFunc);
again.addEventListener("click", againFunc);
