//Insert Character Between Words
//Write a function insertCharacter() that inserts a specific character (e.g., -) between each word in a string using split() and join(). Include error handling with try-catch.
function insertCharacter(str, char) {
  try {
    return str.split(" ").join(char);
  } catch (error) {
    console.error("An error occurred:", error.message);
    return "";
  }
}
console.log(insertCharacter("Hello World", "-"));

//Remove Non-Alphanumeric Characters
//Write a function removeSpecialCharacters() that removes all non-alphanumeric characters from a string.
function removeSpecialCharacters(str) {
  return str.replace(/[^a-zA-Z0-9 ]/g, "");
}
console.log(removeSpecialCharacters("Hello@# World!!")); // "Hello World"

//Alternate Case
//Write a function alternateCase() that converts all even-indexed letters to uppercase and odd-indexed letters to lowercase.
let arr = "Hello Worlds";
let splitArr = arr.split("");
console.log(splitArr);
function alternateCase(arr) {
  let newArr = splitArr
    .map((val, index) => {
      if (index % 2 == 0) {
        return val.toUpperCase();
      } else {
        return val.toLowerCase();
      }
    })
    .join("");
  console.log(newArr);
}
alternateCase(arr);
