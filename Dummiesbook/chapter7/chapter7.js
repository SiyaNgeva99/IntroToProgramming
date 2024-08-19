// document.getElementById("lefteye").style.backgroundColor = "purple";
// document.getElementById("head").style.transform = "rotate(15deg)";

// //Put a 2‐pixel‐wide, solid black border around his body.
// document.getElementById("body").style.border = "2px black solid";

// //Round the corners of his mouth.
// document.getElementById("mouth").style.borderRadius = "4px";

// //Put yellow dots around his right eye.
// document.getElementById("righteye").style.border = "4px yellow dotted";
// //Change the text color.
// document.getElementById("body").style.color = "#FF0000";
// // Give Douglas hair.
// document.getElementById("head").style.borderTop = "5px black solid";


//Tilt Douglas’s head to the other side.
document.getElementById("head").style.transform = "rotate(-15deg)";
document.getElementById("nose").style.borderRadius = "50%";
document.getElementById("rightarm").style.backgroundColor = "green"; 

let rightEye = document.getElementById("righteye");
 rightEye.addEventListener("click", moveUpDown);

 function moveUpDown (e) {
    let robotPart = e.target;
    let t = 0;

    let id = setInterval(frame, 10); // this will draw every 10 ms

    function frame () { 
        robotPart.style.top = t + "%"; 
        t++;
        if (t === 20) {
            clearInterval(id);
        }
    }
 }


 let leftEye = document.getElementById("lefteye");
 leftEye.addEventListener("click", moveUpDown);


 let leftArm = document.getElementById("leftarm");
 leftArm.addEventListener("click", moveRightLeft);

 function moveRightLeft(e) {
    let robotPart = e.target;
    let left = 0;

    let id = setInterval(frame, 10);

    function frame () {
        robotPart.style.left = left + "%"; 
        left++;
        if (left === 70) {
            clearInterval(id);
        }
    }

 }
