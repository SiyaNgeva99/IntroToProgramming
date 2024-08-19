// function smileyIt(theText) {
//     theText += " :)";
//     return theText;
//    }
//    console.log(smileyIt("Hello There!"));
//    alert(smileyIt("Hi There!"));

// // Use function for to return a mathemathematical value
//    function whatsTheNumber(){
//     return 3000;
//    }
// console.log(whatsTheNumber());  
// console.log(whatsTheNumber() + 300);

// Building function junction game

// todo: Create three global variables:
let trainSpeed = 250;
let trainPosition = 0;
let animation;

// todo: Listen for click events on the train element and 
// call a function named speedUp when they happen.
let train = document.getElementById("train");
train.addEventListener("click", speedUp);

// todo: Listen for click events on the stop button element 
// and call a function called stopTrain when they happen.
let stopButton = document.getElementById("stopButton");
stopButton.addEventListener("click", stopTrain);

//  todo: Check whether the train is already going as fast 
// as it can. If not, increase the speed.
function speedUp() {
    if (trainSpeed > 10) {
        trainSpeed -= 10;
    }
    clearInterval(animation);
    animation = setInterval(frame, trainSpeed);

    // If the train is already moving, stop it and then restart 
    // with the new speed by calling a function called frame.

    function frame() {
        trainPosition += 2;
        train.style.left = trainPosition + 'px';
        checkPosition();
    }
}

//  todo: Reposition the train and check whether the 
// train is crashed.
function checkPosition(currentPosition) {
    if (currentPosition === 260) {
        alert("Crash!");
        console.log("Crash!");
        clearInterval(animation);
    }
}

//   todo: Test whether the train is already crashed. If 
// not, stop the train.
function stopTrain() {
    if (trainPosition < 260) {
        clearInterval(animation);
    }
}

// //   todo: Check the train's current position and crash it
// //  if it's at the end of the line.