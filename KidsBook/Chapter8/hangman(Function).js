//CREATING HANGMAN

//The Game
let word = pickWord();

//Set up array
let answerArray = [];
setupAnswerArray();

let remainingLetters = word.length;
let guess;
let numberOfGuesses = word.length * 2;
while (remainingLetters > 0 && numberOfGuesses > 0) { //&& remainingGuesses > 0
    showPlayerProgress();
    guess = getGuess();
    if (guess === null) {
        break;
    } else if (guess, length > 1) {
        alert("Please guess a single letter only.");
    } else {
        let correctGuesses = updateGameState();
        remainingLetters -= correctGuesses;
    }




}
showAnswerAndCongratulatePlayer();



alert(answerArray.join(" "));
alert("Good job! The answer was " + word);


function pickWord() {
    // Return a random word
    let words = [
        "javascript",
        "monkey",
        "amazing",
        "pancake",
        "braai",
        "live",
        "forest"
    ];
    return words[Math.floor(Math.random() * words.length)];

};
function setupAnswerArray() {
    // Return the answer array
    for (let i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }
};

function showPlayerProgress() {
    // Use alert to show the player their progress
    alert(answerArray.join(" "));
};

function getGuess() {
    // Use prompt to get a guess
    return prompt("Guess a letter, or click Cancel to stop playing.");
};
function updateGameState() {
    // Update answerArray and return a number showing how many
    // times the guess appears in the word so remainingLetters
    // can be updated
    numberOfGuesses--;
    let correctGuesses = 0;
    guess = guess.toLowerCase();
    // Update the game state with the guess
}
for (let j = 0; j < word.length; j++) {
    if (word[j] === guess) {
        if (answerArray[j] === "_") { //no3 
            answerArray[j] = guess;
            correctGuesses++; // check 
        } else {
            alert("You have already guessed this letter correctly" + guess)
            break;
        }
    }

    return correctGuesses;
};
function showAnswerAndCongratulatePlayer(answerArray) {
    // Use alert to show the answer and congratulate the player
    if (guess === null) {
        alert(answerArray.join(" "));
        alert("Sorry to see you quit. The answer was " + word);
    } else if (numberOfGuesses === 0 && remainingLetters > 0) {
        alert(answerArray.join(" "));
        alert("Sorry to see you quit. The answer was " + word);
    } else {
        alert(answerArray.join(" "));
        alert("Good job!");


    };

// //Challenge 1: adding words
// word.push("child")

// //Challenge 2: Capital Letter

// //Challenge 3: Limiting Guesses