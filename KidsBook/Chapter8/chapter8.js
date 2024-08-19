// //FUNCTIONS'
// //Functions is a way to bundle up code so that it can be reused
// //Functions allow us to run the same piece of code from multiple places in a program without having to copy and paste the code repeatedly
// //Splitting up your code into smaller, more manageable pieces allows you to see the bigger picture and think about how your programs are structured at a higher level

// //The Basic Anatomy of a Function
// /*function () {
//     console.log("Do something");
//     }*/

// //Creating a simple function
// let ourFirstFunction = function () {
//     console.log("Hello world!");
// };

// //Calling our first function
// console.log(ourFirstFunction());

// // Passsing arguements into funtions 
// let sayHelloTo = function (name) {
//     console.log("Hello " + name + "!");
// };
// console.log(sayHelloTo("Siyabonga"));

// let drawCats = function (howManyTimes) {
//     for (let i = 0; i < howManyTimes; i++) {
//         console.log(i + " =^.^=");
//     }
// };

// console.log(drawCats(5)); ''

// //Printing multiple arguements
// // printMultipleTimes = function (howManyTimes, whatToDraw) {
// //     for (let i = 0; i < howManyTimes; i++) {
// //     console.log(i + " " + whatToDraw);
// //     }
// //     };
// // console.log(printMultipleTimes(5, "=^.^="));

// //Returning values

//Using Functions to Simplify Code
//A Function to Pick a Random Word
// let pickRandomWord = function (words) {
//     return words[Math.floor(Math.random() * words.length)];
//     };
// let randomWords = ["Planet", "Worm", "Flower", "Computer"];
// console.log(randomWords(words))

// let randomBodyParts = ["Face", "Nose", "Hair"];
// let randomAdjectives = ["Smelly", "Boring", "Stupid"];
// let randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];
// // Pick a random body part from the randomBodyParts array:
// let randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)];
// // Pick a random adjective from the randomAdjectives array:
// let randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)];
// // Pick a random word from the randomWords array:
// let randomWord = randomWords[Math.floor(Math.random() * 5)];
// // Join all the random strings into a sentence:
// let randomString = "Your " + randomBodyPart + " is like a " + randomAdjective + " " + randomWord + "!!!";
// console.log(randomString);

// //Making the Random Insult Generator into a Function
// generateRandomInsult = function () {
//     let randomBodyParts = ["Face", "Nose", "Hair"];
//     let randomAdjectives = ["Smelly", "Boring", "Stupid"];
//     let randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];
//     // Join all the random strings into a sentence:
//     let randomString = "Your " + pickRandomWord(randomBodyParts) + " is like a " + pickRandomWord(randomAdjectives) + " " + pickRandomWord(randomWords) + "!!!";
//     return randomString;
// };
// console.log(generateRandomInsult());


//Leaving a Function Early with return
// let fifthLetter = function (name) {
//     if (name.length < 5) {
//         vreturn;
//     }
//     return "The fifth letter of your name is " + name[4] + ".";
// };

// //Using return Multiple Times Instead of if...else Statements
// let medalForScore = function (score) {
//     if (score < 3) {
//         return "Bronze";
//     }
//     if (score < 7) {
//         return "Silver";
//     }
//     return "Gold";
// };

// // Challenge 1
// function add(num1, num2) {
//     return num1 + num2;
// }

// function multiply(num1, num2) {
//     return num1 * num2;
// }

// console.log(add((multiply(1, 9), 777)))

// //Challenge 2
// function areArraysSame(array1, array2) {
//     if (array1.length !== array2.length) {
//         return false;
//     }
//     for (let i = 0; i < array1.length; i++) {
//         if (array1[i] !== array2[i]) {
//             return false;
//         }
//     }
//     return true

// }
// console.log(areArraysSame([1, 2, 3], [4, 5, 6]));
// console.log(areArraysSame([1, 2, 3], [1, 2, 3]));
// console.log(areArraysSame([1, 2, 3], [1, 2, 3, 4]));
  

//