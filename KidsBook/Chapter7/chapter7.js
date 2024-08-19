//CREATING HANGMAN

// let name = prompt("What's your name?");
// console.log("Hello " + name);

// let likesCats = confirm("Do you like cats?");
// if (likesCats) {
//     console.log("You're a cool cat!");
// } else {
//     console.log("Yeah, that's fine. You're still cool!");
// }

//  alert("JavaScript is awesome!");

// Pick a random word
// While the word has not been guessed {
// Show the player their current progress
// Get a guess from the player
// If the player wants to quit the game {
// Quit the game
// }
// Else If the guess is not a single letter {
// Tell the player to pick a single letter
// }
// Else {
// If the guess is in the word {
// Update the player's progress with the guess
// }
// }
// }
// Congratulate the player on guessing the word


//The Game
let words = [
    "javascript",
    "monkey",
    "amazing",
    "pancake",
     "braai",
     "live",
     "forest"
 ];
let word = words[Math.floor(Math.random() * words.length)];

//Set up array
let answerArray = [];
for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}
let remainingLetters = word.length;
let guess;
 let remainingGuesses = word.length * 2;

while (remainingLetters > 0 && remainingGuesses > 0) { //&& remainingGuesses > 0
    // Game code goes here
    // Show the player their progress
    // Take input from the player
    // Update answerArray and remainingLetters for every correct guess

    alert(answerArray.join(" "));
    let guess = prompt("Guess a letter, or click Cancel to stop playing.");
    if (guess === null) {
        alert("Sorry to see you quit. The answer was " + word);
        break; //break needs to be in a loop

    } else if (guess.length !== 1) {
        alert("Please enter a single letter.");
    }
    else {
        remainingGuesses--;
        guess = guess.toLowerCase(); 
        // Update the game state with the guess
    }
    for (let j = 0; j < word.length; j++) {
        if (word[j] === guess) {
            if (answerArray[j] === "_"){ //no3 
            answerArray[j] = guess;
            remainingLetters--;
            } else {
                alert("You have already guessed this letter correctly" + guess)
                break
            }
        }
        

    }
    if (remainingGuesses === 0) {
        alert("Sorry you ran our of guesses. The answer was " + word);
    }

} 

     alert(answerArray.join(" "));
     alert("Good job! The answer was " + word);

    


    
//Challenge 1: adding words   
word.push("child")

//Challenge 2: Capital Letter

//Challenge 3: Limiting Guesses 