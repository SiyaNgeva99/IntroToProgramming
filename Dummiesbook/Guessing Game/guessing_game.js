// Pierre Jonker Guessing Game //

// Makes a randon number between 1-20
let secret = (Math.floor(Math.random() * 20) + 1);

// Make the word quezz a variable 
let guess;

// Keeping prompting until player guess the right answer
while (true) {

    // Prompt the player for a guess and convert it to an integer
    let answer = prompt(" Please guess the secret number between 1-20 ");
    guess = parseInt(answer);

    // Check if the quess of player is correct or not if correct it will display Correct Guess 
    if (guess === secret) {
        alert(" Correct Guees ! ");
        break; // Brakes out of the loop to say that you have geussed correctly 

    } else {
        // Check if players guess is lower or higher than the random word and giving them hints that they must go higher or lower 
        if (guess < secret) {
            alert(" Incorrect , too low !");
        } else {
            alert(" Incorrect , too high !");
        }

    }
}
// Giving alert to contratulat the player if he guested correctly and wil only display if the number id gueesed correctly and if it brakes out of the loop
alert(" Contratulasions! You've guessed the secret answer"