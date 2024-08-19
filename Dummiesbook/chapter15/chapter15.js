// let myNumber = prompt("Enter your favorite day of the week!");
// let theResponse;
// switch (myNumber) {
//     case "Monday":
//         theResponse = "Ack!";
//         break;
//     case "Tuesday":
//         theResponse = "Taco day!";
//         break;
//     case "Wednesday":
//         theResponse = "Halfway there!";
//         break;
//     case "Thursday":
//         theResponse = "It’s the new Friday!";
//         break;
//     case "Friday":
//         theResponse = "TGIF! Yeah!";
//         break;
//     case "Saturday":
//         theResponse = "What a day!";
//         break;
//     case "Sunday":
//         theResponse = "Sunday = Funday!";
//         break;
//     default:
//         theResponse = "I haven’t heard of that one!";
//         break;
// }
// alert(theResponse);


// Get references to HTML elements
let todayDate = document.getElementById("todaysdate");
let todoButton = document.getElementById("whattodo");

// Add click event listener to the button
todoButton.addEventListener("click", displayActivity);

// Get the current date
let d = new Date();

// Display the current date initially
displayDate();

// Function to display the current date
function displayDate() {
    todayDate.innerHTML = d.toDateString();
}

// Function to display an activity based on the day of the week
function displayActivity() {
    // Get the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    let dayOfWeek = d.getDay();

    // Variable to store the suggested activity
    let youShould;

    // Switch statement to determine the activity based on the day of the week
    switch (dayOfWeek) {
        case 0:
            youShould = "Take it easy. You've earned it.";
            break;
        case 1:
            youShould = "Gotta do what ya gotta do!";
            break;
        case 2:
            youShould = "Take time to smell the roses!";
            break;
        case 3:
            youShould = "Don't forget to eat breakfast!";
            break;
        case 4:
            youShould = "Learn something new today!";
            break;
        case 5:
            youShould = "Make a list of things you like to do.";
            break;
        case 6:
            youShould = "Do one thing from your list of things you like to do.";
            break;
        default:
            youShould = "Hmm. Something has gone wrong.";
            break;
    }

    // Display the suggested activity in the HTML element with the id "thingToDo"
    document.getElementById("thingToDo").innerHTML = youShould;
}
 