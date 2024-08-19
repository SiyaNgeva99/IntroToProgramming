// Get references to HTML elements
let printButton = document.getElementById("printable");
let addButton = document.getElementById("addIt");
let myListArea = document.getElementById("wishList");

// Initialize an empty list
let myList = [];

// Function to save the list to local storage
function saveListToLocalStorage() {
    localStorage.setItem("myList", JSON.stringify(myList));
}

// Function to add an item to the list
function addToTheList(thingToAdd, linkInput) {
    // Add the item and link to the list
    myList.push({ item: thingToAdd.value, link: linkInput.value });

    // Create a new list item element
    let newListItem = document.createElement("li");

    // Set the HTML content of the new list item with a link
    newListItem.innerHTML = `<a href="${linkInput.value}" target="_blank">${thingToAdd.value}</a>`;

    // Append the new list item to the list area
    myListArea.appendChild(newListItem);
}

// Function to clear the input field
function resetInput(inputField) {
    inputField.value = "";
}

// Event listener for the "Print" button
printButton.addEventListener("click", printView);

// Event listener for the "Add" button
addButton.addEventListener("click", function() {
    let theThing = document.getElementById("iWant");
    let linkInput = document.getElementById("linkInput");
    
    addToTheList(theThing, linkInput);
    resetInput(theThing);
    saveListToLocalStorage();
});

// Event listener for the "Email List" button
let emailButton = document.getElementById("emailList");
emailButton.addEventListener("click", emailList);

// Function to generate and open a mailto link
function emailList() {
    let subject = "My Wish List";
    let body = myList.map(item => item.item + " - " + item.link).join("\n");
    let mailtoLink = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
}

// Function to handle the "Print View" functionality
function printView() {
    let listPage = document.getElementById("listPage");
    let formArea = document.getElementById("formArea");

    // Hide the form area
    formArea.style.display = "none";

    // Apply the "print" class to the list page
    listPage.className = "print";

    // Clear the list area
    myListArea.innerHTML = "";

    // Sort the list alphabetically by the item property
    myList.sort((a, b) => a.item.localeCompare(b.item));

    // Populate the list area with sorted items
    for (let i = 0; i < myList.length; i++) {
        myListArea.innerHTML += `<li><a href="${myList[i].link}" target="_blank">${myList[i].item}</a></li>`;
    }

    // Open the print dialog
    window.print();
}