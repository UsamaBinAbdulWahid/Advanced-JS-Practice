// Variables and Data Types

// Variable Declaration and Reassignment:
let mutableVariable = 10; // Using let for variables that can be reassigned.
const constantVariable = 20; // Using const for variables that cannot be reassigned.
var oldStyleVariable = 30; // Using var (older syntax, less preferred).

// Reassigning values to let and var:
mutableVariable = 15; // Allowed
oldStyleVariable = 35; // Allowed

// constantVariable = 25; // This will throw an error "Cannot reassign block" because const variables cannot be reassigned.

/* Identify Data Types:
Declaring variables of different types and logging their types. */
const stringVariable = "Hello, World!"; // String\const numberVariable = 42; // Number
const booleanVariable = true; // Boolean
const objectVariable = { key: "value" }; // Object
const arrayVariable = [1, 2, 3]; // Array

// Logging data types
console.log(typeof stringVariable); // "string"
console.log(typeof numberVariable); // "number"
console.log(typeof booleanVariable); // "boolean"
console.log(typeof objectVariable); // "object"
console.log(typeof arrayVariable); // "object"

// String Manipulation
const myName = "Usama"; // Replace with your name.
console.log(`Welcome, ${myName}!`); // Printing a welcome message.

const fullName = "Usama Wahid";
const favoriteQuote =
  "The only limit to our realization of tomorrow is our doubts of today.";
console.log(`${fullName} says: "${favoriteQuote}"`); // Combining and printing a meaningful message.

// Calculating the total number of characters in the favorite quote.
console.log(`The quote has ${favoriteQuote.length} characters.`);

// Part 2: Working with Numbers
// Creating 10 variables using var, let, and const.
let num1 = 5,
  num2 = 10;
const num3 = 15,
  num4 = 20;
var num5 = 25;
let num6 = 30,
  num7 = 35;
const num8 = 40,
  num9 = 45;
var num10 = 50;

// Calculating the SUM and printing the result.
const sum =
  num1 + num2 + num3 + num4 + num5 + num6 + num7 + num8 + num9 + num10;
console.log(`SUM: ${sum}`);

// Finding the AVERAGE and printing the result.
const average = sum / 10;
console.log(`AVERAGE: ${average}`);

// Multiplying all numbers and printing the PRODUCT.
const product =
  num1 * num2 * num3 * num4 * num5 * num6 * num7 * num8 * num9 * num10;
console.log(`PRODUCT: ${product}`);

// Identifying the largest and smallest numbers.
const numbers = [num1, num2, num3, num4, num5, num6, num7, num8, num9, num10];
const largest = Math.max(...numbers);
const smallest = Math.min(...numbers);
console.log(`Largest: ${largest}, Smallest: ${smallest}`);
