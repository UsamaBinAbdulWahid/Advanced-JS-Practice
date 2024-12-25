//Leap Year Checker
function checkLeap(year) {
  if (year % 4 == 0 && year % 100 !== 0) {
    return true;
  } else if (year % 400 == 0) {
    return true;
  } else {
    return false;
  }
}
let year = parseInt(prompt("Please enter a year"));
if (checkLeap(year) == true) {
  document.write("<p>The year is leap</p>");
} else {
  document.write("The year is not leap");
}

// Positive, Negative, or Zero
function checkNumber(i) {
  if (i > 0) {
    console.log(`The number ${i} is positive`);
  } else if (i < 0) {
    console.log(`The number ${i} is negative`);
  } else {
    console.log(`The number ${i} is zero`);
  }
}
let i = parseInt(prompt("Please enter a number"));
checkNumber(i);

//Traffic Light Signal
function trafficSignal(color) {
  if (color === "red") {
    console.log("Stop.");
  } else if (color === "yellow") {
    console.log("Get Ready.");
  } else if (color === "green") {
    console.log("Go.");
  } else {
    console.log("Invalid color.");
  }
}
trafficSignal("red");
trafficSignal("yellow");
trafficSignal("green");
trafficSignal("blue");

function findLargest(i, j, k) {
  if (i > k && i > j) {
    console.log(i);
  } else if (k > i && k > j) {
    console.log(k);
  } else {
    console.log(j);
  }
}
findLargest(5, 6, 7);
