// ARRAYS
//JavaScript lets you create and group together data in more interesting ways with arrays. An array isjust a list of other JavaScript data values.
//For example, if your friend asked you what your three favorite dinosaurs were, you could create an array with the names of those dinosaurs, in order:

// let topThreeDinosaurs = ["T-Rex", "Velociraptor", "Stegosaurus"];
// //let dinosaurs = ["T-Rex", "Velociraptor", "Stegosaurus","Triceratops", "Brachiosaurus", "Pteranodon", "Apatosaurus","Diplodocus", "Compsognathus"];
// console.log(topThreeDinosaurs);
// let dinosaurs = 
//  ["T-Rex",
//     "Velociraptor",
//     "Stegosaurus",
//     "Triceratops",
//     "Brachiosaurus",
//     "Pteranodon",
//     "Apatosaurus",
//     "Diplodocus",
//     "Compsognathus"
// ];
// console.log(dinosaurs);


// // // //Accessing an Array’s Elements
// // // //When it’s time to access elements in an array, you use square brackets with the index of the element you want, as you can see in the following example:
// console.log(dinosaurs[5]);
// console.log(dinosaurs[7]);
// console.log(dinosaurs[0]);
// //Setting or Changing Elements in an Array
// dinosaurs[0] = "Tyrannosaurus Rex";
// console.log(dinosaurs[0]);


// let dinosaurs = []
// dinosaurs[0] = "Tyrannosaurus Rex";
// dinosaurs[1] = "Velociraptor";
// dinosaurs[2] = "Stegosaurus";
// dinosaurs[3] = "Triceratops";
// dinosaurs[4] = "Brachiosaurus";
// dinosaurs[5] = "Pteranodon";
// dinosaurs[6] = "Apatosaurus";
// dinosaurs[7] = "Diplodocus";
// dinosaurs[8] = "Compsognathus";
// dinosaurs[33]= "Philosoraptor";
// console.log(dinosaurs);

// //Mixing Data Types in an Array
// // //Array elements don’t all have to be the same type.
// let dinosaursAndNumbers = [3, "dinosaurs", ["triceratops", "stegosaurus", 3627.5], 10];
// // index 0 is 3. index 1 is dinosaurs. index 2 is ["triceratops", "stegosaurus", 3627.5]. index 3 is 10
// console.log(dinosaursAndNumbers[2]);
// console.log(dinosaursAndNumbers[1]);

// // WORKING WITH ARRAYS
// // Properties and methods help you work with.
// // Properties generally tell you something about the array, and methods usually do something to change the array or return a new array

// to find the lenth on an array just add .lenght to it's name
// let maniacs = ["Yakko", "Wakko", "Dot"];
// console.log(maniacs.length);
// console.log(maniacs[maniacs.length-1]);

//To add elements to an array, you can use the push method. Add .push to the array name followed by the element you want to add in parentheses,
// let animals = [];
// animals.push("Cat");
// animals.push("Dog");
// animals.push("Llama");
// console.log(animals);
// // console.log(animals.length);
// // The act of running a moethod in computer speak is known as calling a method (I called the push method).
// // To add an element at the BEGINNING of an array you just use the .unshift(element) 
// animals.unshift("Monkey");
// animals.unshift("Polar Bear");
// console.log(animals.length);
// // console.log(animals);
// //Removing elements from an array;
// // // To remove an element from an array you can "pop" it off by using .pop() at the END of the array name.
// let lastAnimal = animals.pop();
// console.log(lastAnimal);
// console.log(animals);
// animals.pop();
// console.log(animals);
// animals.unshift(lastAnimal);
// console.log(animals);
// animals.unshift("mouse");
// console.log(animals);
// // Llama was removed but also saved in variable "lastAnimal" while dog was removed but not saved anywhere. Then I used .unshift(lastAnimal) which is the Llama to put in in front of the array.
// //To removed an return the first element of an array use .shift
// let firstAnimal = animals.shift();
// console.log(firstAnimal);
// console.log(animals);
// // .shift() and .unshift() are for the beginning and .push and .pop for for the end of an array.


// // ADDIND ARRAYS
// // To add 2 arrays together to make a new single array you use firstArray.concat(otherArray).
// let furryAnimals = ["Alpaca", "Ring-tailed Lemur", "Yeti"];
// let scalyAnimals = ["Boa Constrictor", "Godzilla"];
// let furryAndScalyAnimals = furryAnimals.concat(scalyAnimals);
// console.log(furryAndScalyAnimals);
// // console.log(furryAnimals);
// console.log(scalyAnimals);
// // // Joining Multiple Arrays
// //let furryAnimals = ["Alpaca", "Ring-tailed Lemur", "Yeti"];
// //let scalyAnimals = ["Boa Constrictor", "Godzilla"];
// let featheredAnimals = ["Macaw", "Dodo"];
// let allAnimals = furryAnimals.concat(scalyAnimals, featheredAnimals); 
// console.log(allAnimals);
// // Finding the Index of an Element in an Array
// //To find the index of an element in an array, use .indexOf(element)
// let colors = ["red", "green", "blue"];
// console.log(colors.indexOf("blue"));
// console.log(colors.indexOf("green"));
// //If the element whose position you ask for is not in the array, JavaScript returns -1.
// console.log(colors.indexOf("purple"));
// //If the element appears more than once in the array, the indexOf method will return the first index of that element in the array.
// // let insects = ["Bee", "Ant", "Bee", "Bee", "Ant"];
// // console.log(insects.indexOf("Bee"));
// //Turning an Array into a String
// //You can use .join() to join all the elements in an array together into one big string.
// let boringAnimals = ["Monkey", "Cat", "Fish", "Lizard"];
// boringAnimals.join();
// console.log(boringAnimals.join());
// //You can use .join("separator") to do the same thong but with your pwn separator.
// //let boringAnimals = ["Monkey", "Cat", "Fish", "Lizard"];
// console.log(boringAnimals.join(" - "));
// //console.log(boringAnimals);
// /*boringAnimals.join("*");
// console.log(boringAnimals);*/
// boringAnimals.join( "sees")
// console.log(boringAnimals.join("sees"));

// let myNames = ["Nicholas", "Andrew", "Maxwell", "Morgan"];
// console.log(myNames.join(" "));

// let landmarks = [];
// landmarks.push("My house");
// landmarks.push("Front path");
// landmarks.push("Flickering streetlamp");
// landmarks.push("Leaky fire hydrant");
// landmarks.push("Fire station");
// landmarks.push("Cat rescue center");
// landmarks.push("My old school");
// landmarks.push("My friend's house");
// console.log(landmarks);

// //The Decision Maker
// Math.random();
// console.log(Math.random());
// Math.random();
// console.log(Math.random());
// //Math.random will generate a number less than one
// console.log(Math.random() * 10);

// // Rounding down numbers with Math.floor()
// console.log(Math.floor(3.7463463));
// console.log(Math.floor(5.72456720));
// console.log(Math.floor(9.9999));
// console.log(Math.floor(0.793423451963426));

// console.log(Math.floor(Math.random() * 4));


// let randomWords = ["Explosion", "Cave", "Princess", "Pen"];
// let randomIndex = Math.floor(Math.random() * 4);
// // console.log(randomWords[randomIndex]);
// // //we can shorten it like this.
// console.log(randomWords[Math.floor(Math.random() * 4)]);

// // The complete decision maker
// let phrases = [
//     "That sounds good",
//     "Yes, you should definitely do that",
//     "I'm not sure that's a great idea",
//     "Maybe not today?",
//     "Computer says no."
//     ];

// // Should I have another milkshake?
// console.log(phrases[Math.floor(Math.random() * 5)]);
// console.log(phrases[Math.floor(Math.random() * 5)]);

// // Insult generator
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
// let randomInsult = "Your " + randomBodyPart + " is like a " + randomAdjective + " " + randomWord + "!!!";
// console.log(randomInsult);
