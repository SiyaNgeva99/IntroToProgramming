// let people = ["Teddy","Cathy","Bobby"];
// console.log(people);
// console.log(people[2]);

let people = ["Mary", "Bobby", "Judy", "Eddie", "Herbie", "Tony"];
let otherPeople= ["Teddy", "Cathy", "G-berg", "Georgie"];
document.getElementById("peopleIKnow").innerHTML = people.valueOf();

// Join two arrays using concat()
document.getElementById("peopleIKnow").innerHTML = people.concat(otherPeople);

// Determine the position of a value in an array using indexOf()
document.getElementById("peopleIKnow").innerHTML = otherPeople.indexOf("G-berg");

// Join elements of an array by desired characters using join()
document.getElementById("peopleIKnow").innerHTML = people.join("+");

// Identify an element in an array and its position using lastIndexOf
document.getElementById("peopleIKnow").innerHTML = people.lastIndexOf("Tony");

// Remove the last element in an array using pop()
document.getElementById("peopleIKnow").innerHTML = people.pop();
document.getElementById("peopleIKnow").innerHTML = people;

// Add an element to the end of an array using push()
document.getElementById("peopleIKnow").innerHTML = people.push("Bokang");
document.getElementById("peopleIKnow").innerHTML = people;

// Reverse the content of the array to make the first element become the last using reverse()
document.getElementById("peopleIKnow").innerHTML = people.reverse();

// Remove the first element in the array using shift()
document.getElementById("peopleIKnow").innerHTML = people.shift();
document.getElementById("peopleIKnow").innerHTML = people;

// Add an element at the beggining of an array using unshift
document.getElementById("peopleIKnow").innerHTML = people.unshift("Sheryl");
document.getElementById("peopleIKnow").innerHTML = people;

// Remove selected elements in an array using slice()
document.getElementById("peopleIKnow").innerHTML = people.slice(0, 4);

// Sort elements alphabetically in an array using sort()
document.getElementById("peopleIKnow").innerHTML = people.sort();

// Add or remove an element in array using splice()
document.getElementById("peopleIKnow").innerHTML = people.splice(4, 3, "Cathy");
document.getElementById("peopleIKnow").innerHTML = people;
