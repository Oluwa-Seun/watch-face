import clock from "clock";
import * as document from "document";

clock.granularity = "seconds";

let hourHand = document.getElementById("hours");
let minHand = document.getElementById("mins");
let secHand = document.getElementById("secs");



function hoursToAngle(hours, minutes) {
    let hourAngle = (360 / 12) * hours;
    let minAngle = (360 / 12 / 60) * minutes;
    return hourAngle + minAngle;
}


function minutesToAngle(minutes) {
    return (360 / 60) * minutes;
}

function secondsToAngle(seconds) {
    return (360 / 60) * seconds;
}

function updateCloc() {
    let today = new Date();
    let hours = today.getHours() % 12;
}