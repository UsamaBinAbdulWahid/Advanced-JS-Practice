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
