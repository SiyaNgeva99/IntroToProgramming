// OBJECTS
/*Objects in JavaScript are very similar to arrays, but objects use strings instead of numbers to access the different elements
The strings are called KEYS or PROPERTIES, and the elements they point to are called VALUES
Together these pieces of information are called key-value pairs*/

//Creating Objects
// let cat= {
//     "legs": 3,
//     "name": "Harmony",
//     "colour": "Tortoiseshell" 
// };
 //The curly brackets and everything in between them are called an object literal.
// Literal just means that the whole value is written out at once, not built up in multiple steps.

//Keys without quotes
// let cat = {
//     legs: 3,
//     name: "Harmony",
//     color: "Tortoiseshell"
// }  //Javascript knows that keys are strings

//Accessing values in objects
// You can access values in objects using square barackets, just like with arrays. The only difference is that instea of using an index (number), you use a key(string).
// console.log(cat["name"]);
// console.log(cat.color); //Quotes are optional, however code is a bit different
//This is called dot notation

//What if you wanted to get a list of all the keys in the object. Use Object.keys()
// let dog = { name: "Pancake", age: 6, color: "white", bark: "Yip yap yip!" };
// let cat = { name: "Harmony", age: 8, color: "tortoiseshell" };
// console.log(Object.keys(dog));
// console.log(Object.keys(cat));

//Adding values to objects
//let cat = {}
//You can add items to an object just as you’d add items to an array, but you use strings instead of numbers:
/*cat["legs"] = 3;
cat["name"] = "Harmony";
cat["color"] = "Tortoiseshell";
console.log(cat);*/
//Arrays have a certain order but objects don't
//You can also use dot notation
/*let cat = {}
cat.legs = 3;
cat.name = "Harmony";
cat.color = "Tortoiseshell";
console.log(cat);*/

/*let dog = {
    name: "Pancake",
    legs: 4,
    isAwesome: true
    };
    console.log(dog.isBrown);*/

//Combining arrasy and objects
//there’s nothing stopping you from using another array or object as a value in an array or object
// let dinosaurs = [
//     { name: "Tyrannosaurus Rex", period: "Late Cretaceous" },
//     { name: "Stegosaurus", period: "Late Jurassic" },
//     { name: "Plateosaurus", period: "Triassic" }
//     ];
// //The same way as an array, use index
// console.log(dinosaurs[0]);
// // If you want a certain value then just add the key in square brackets after an array index
// console.log(dinosaurs[0]["name"]);
// console.log(dinosaurs[1].period); // you can use dot denotation like this too

// An array of friends
// let anna = { name: "Anna", age: 11, luckyNumbers: [2, 4, 8, 16] };
// let dave = { name: "Dave", age: 5, luckyNumbers: [3, 9, 40] };
// let kate = { name: "Kate", age: 9, luckyNumbers: [1, 2, 3] };
// // we made 3 objects and saved them into variables. Each var has 3 keys (name, age and luckyNumbers). Each name key has a string, each age a number,  and each luckyNumbers has an array
// let friends = [anna, dave, kate]; //an array of friends
// console.log(friends[1]);
// console.log(friends[2].name);
// console.log(friends[0].luckyNumbers[1]);

//Useful Things to Do with Objects
// //Keeping Track of Owed Money
// let owedMoney = {};
// owedMoney["Jimmy"] = 5;
// // owedMoney["Anna"] = 7;
// // console.log(owedMoney["Jimmy"]);
// // console.log(owedMoney[Jinen]);

// owedMoney["Jimmy"] += 3; //Jimmy borrowed R3
// console.log(owedMoney["Jimmy"]);
// console.log(owedMoney);

// //Storing Information About Your Movies
// let movies = {
//     "Finding Nemo" : {
//         releaseDate: 2003,
//         duration: 100,
//         actors: ["Albert Brooks", "Ellen DeGeneres", "Alexander Gould"],
//         format: "DVD"
//     },
//     "Star Wars: Episode VI - Return of the Jedi": {
//         releaseDate: 1983,
//         duration: 134,
//         actors: ["Mark Hamill", "Harrison Ford", "Carrie Fisher"],
//         format: "DVD"
//         },
//         "Harry Potter and the Goblet of Fire": {
//             releaseDate: 2005,
//             duration: 157,
//             actors: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
//             format: "Blu-ray"
//             }
// };
// // now its easier to find information
// let findingNemo = movies["Finding Nemo"];
// console.log(findingNemo.duration);
// console.log(findingNemo.format);
// console.log(findingNemo.actors);
// //create a new object in 