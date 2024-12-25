//Palindrome Checker
function isPalindrome(str) {
  let cleanStr = str.toLowerCase().replace(/\s/g, "");
  let reversedStr = cleanStr.split("").reverse().join("");
  return cleanStr === reversedStr;
}

// Example usage:
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false
