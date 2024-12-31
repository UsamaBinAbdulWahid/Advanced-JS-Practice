//Add Index to Each Number
// /Write a function addIndexToNumbers() that adds the index of each element in the array to its value using map(). Use a try-catch block to handle errors.
const arr = [3, 5, 7, 8, 4, 3, 2];
function addIndexToNumbers(val) {
  try {
    const newArr = arr.map((value, index) => {
      return value + index;
    });
    console.log(newArr);
  } catch (error) {
    console.log(`Error: `, error.message);
  }
}
addIndexToNumbers();

//Filter Numbers Greater than Average
//Write a function filterAboveAverage() that filters numbers greater than the average of the array using filter() and reduce()
function filterAboveAverage(arr) {
  let newArr =
    arr.reduce((acc, val) => {
      return val + acc;
    }, 0) / arr.length;

  console.log(newArr);
  let filteredArr = arr.filter((num) => num > newArr);
  console.log(filteredArr);
}
filterAboveAverage(arr);

//Find the Longest Word
//Write a function findLongestWord() that finds the longest word in an array of strings using reduce().
let charArr = "This is a javascript";
function findLongestWord(charArr) {
  let newArr = charArr.split(" ").reduce((longestWord, currentWord) => {
    if (currentWord > longestWord) {
      return currentWord;
    } else {
      return longestWord;
    }
  }, "");
  console.log(newArr);
}

findLongestWord(charArr);
