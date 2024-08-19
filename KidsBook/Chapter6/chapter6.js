//Conditionals and Loops
//Conditionals and loops are the two most important concepts in JavaScript. 
//A conditional says "If something is rtrue, do this. Otherwise do that." Eg if the robot is green, if it is orange, caution and if it is red, stop.
// A loop say, "if something is true keep doing this." Eg as long as you're thirsty, keep drinking.
// Conditions and loops are powerful concepts in any  sophisticated program. They are called CONTROL STRUCTURES because they allow you to control which parts are executed, when and how often they are executed, based on certain conitions you define.

//Conditionals
// An if statment is used to execute if a piece o code  is true.  An if... else statement is used to to execute a piece of cide if something is true and another is not

// If Statements
// let name = "Siyabonga";
// console.log("Hello " + name);
// if (name.length > 7) {
//     console.log("Wow, you have a REALLY long name!");
// } else {
//      console.log("Your name isn't that long.");
//  }
 //If statments have two parts. A condition and a body. The condition should have a Boolean value. The body is one or more lines of JavaScript code, which are executed if the condition if the code is true.

//IF...else statements
//Chaining if...else statments

// let lemonChicken = true;
// let beefWithBlackbean = false;
// let sweetAndSourPork = false;
// if (lemonChicken) {
//     console.log("Great! I'm having lemon chicken!");
//     } else if (beefWithBlackbean) {
//     console.log("I'm having the beef.");
//     } else if (sweetAndSourPork) {
//     console.log("OK, I'll have the pork.");
//     } else {
//     console.log("Well, I guess I'll have rice then.");
//     }


//  let sheepCounted = 0;
// while (sheepCounted < 10) {
//     console.log("I have counted " + sheepCounted + " sheep!");
//     sheepCounted++;
// }
// console.log("Zzzzzzzzzzz");

// for (let sheepCounted = 0; sheepCounted < 10; sheepCounted++) {
//     console.log("I have counted " + sheepCounted + " sheep!");
//     }
//     console.log("Zzzzzzzzzzz");

// let timesToSayHello =3;
// for (let i = 0; i < timesToSayHello; i++) {
//     console.log("Hello!");
//      }

// let animals = ["Lion", "Flamingo", "Polar Bear", "Boa Constrictor"];
// for (let i = 0; i < animals.length; i++) {
//     console.log("This zoo contains a " + animals[i] + ".");
//     }

// let name = "Nicholas";
// for (let i = 0; i < name.length; i++) {
// console.log("My name contains the letter " + name[i] + ".");
// }

for (let x = 2; x < 10000; x = x * 2) {
    console.log(x);
    }
