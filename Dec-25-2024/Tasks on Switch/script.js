//Month Name
function getMonthName(monthNumber) {
  let monthName;
  switch (monthNumber) {
    case 1:
      monthName = " January";
      break;
    case 2:
      monthName = "February";
      break;
    case 3:
      monthName = " March";
      break;
    case 4:
      monthName = "April";
      break;
    case 5:
      monthName = " May";
      break;
    case 6:
      monthName = "June";
      break;
    case 7:
      monthName = " July";
      break;
    case 8:
      monthName = "August";
      break;
    case 9:
      monthName = " September";
      break;
    case 10:
      monthName = "October";
      break;
    case 11:
      monthName = " November";
      break;
    case 12:
      monthName = "December";
      break;
    default:
      monthName = "Invalid Month";
  }
  return monthName;
}
console.log(getMonthName(1));

function convertGrade(marks) {
  let grade;

  switch (true) {
    case marks >= 90:
      grade = "A";
      break;
    case marks >= 80:
      grade = "B";
      break;
    case marks >= 70:
      grade = "C";
      break;
    case marks >= 60:
      grade = "D";
      break;
    case marks >= 50:
      grade = "E";
      break;
    default:
      grade = "F";
  }

  return grade;
}
console.log(convertGrade(85));
console.log(convertGrade(72));

function performOperation(num1, num2, operator) {
  let result;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        result = "Error: Division by zero";
      } else {
        result = num1 / num2;
      }
      break;
    case "%":
      result = num1 % num2;
      break;
    default:
      result = "Invalid operator";
  }

  return result;
}
console.log(performOperation(5, 3, "+"));
console.log(performOperation(5, 3, "-"));
console.log(performOperation(5, 3, "*"));
console.log(performOperation(5, 0, "/"));
console.log(performOperation(5, 3, "%"));
console.log(performOperation(5, 3, "^"));

function getSeason(monthNumber) {
  let season;

  switch (monthNumber) {
    case 12:
    case 1:
    case 2:
      season = "Winter";
      break;
    case 3:
    case 4:
    case 5:
      season = "Spring";
      break;
    case 6:
    case 7:
    case 8:
      season = "Summer";
      break;
    case 9:
    case 10:
    case 11:
      season = "Fall";
      break;
    default:
      season = "Invalid month number";
  }

  return season;
}
console.log(getSeason(1));
console.log(getSeason(4));
console.log(getSeason(7));
console.log(getSeason(10));
console.log(getSeason(13));
