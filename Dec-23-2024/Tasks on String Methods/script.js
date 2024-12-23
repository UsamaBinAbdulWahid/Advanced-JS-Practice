// Tasks on String Methods

//Input a string for manipulation
let sentence = "Enter a sentence or something";

// Convert the sentence to all uppercase and all lowercase and display the results.
console.log("Uppercase: ", sentence.toUpperCase());
console.log("Lowercase: ", sentence.toLowerCase());

//Count the total number of characters (including spaces).
console.log("Length of sentence is: ", sentence.length);

//Count how many times a specific character (e.g., 'a') appears in the string.
//Using the string/sentence that we already defined
let letter = "r";
let strLen = sentence.length;
console.log("Sentence length: " + strLen);

let counter = 0;
for (let i = 0; i < strLen; i++) {
  if (sentence[i] == letter) {
    counter++;
  }
}
console.log(`${sentence} => ${letter} => ${counter}`);

//Extract the first word and the last word from a sentence and display them separately.
let word = sentence.split(" ");
console.log("First word is: ", word[0]);
console.log("Last word is: ", word[word.length - 1]);

//Input a string and remove all the spaces. Display the modified string.
let stringWithSpaces = "Remove all spaces in this string!";
console.log("String without spaces:", stringWithSpaces.replace(/\s/g, ""));

//Check if starts or ends with specific word
let specifiedWordStarts = "Nothing";
let specifiedWordEnds = "True";
console.log(
  `Start with: '${specifiedWordStarts}':`,
  sentence.startsWith(specifiedWordStarts)
);
console.log(
  `Ends with: '${specifiedWordEnds}':`,
  sentence.endsWith(specifiedWordEnds)
);

//Split sentence into array of words
console.log("Array of words is:", sentence.split(""));
