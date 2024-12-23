// Tasks on String Methods

//Input a string for manipulation
let string = "Enter a string";

// Convert the sentence to all uppercase and all lowercase and display the results.
console.log("Uppercase: ", string.toUpperCase());
console.log("Lowercase: ", string.toLowerCase());

//Count the total number of characters (including spaces).
console.log("Length of string is: ", string.length);

//Count how many times a specific character (e.g., 'a') appears in the string.
//Using the string that we already defined
let letter = "r";
let strLen = string.length;
console.log("String length: " + strLen);

let counter = 0;
for (let i = 0; i < strLen; i++) {
  if (string[i] == letter) {
    counter++;
  }
}
console.log(`${string} => ${letter} => ${counter}`);


