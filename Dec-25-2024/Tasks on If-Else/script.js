//Print Numbers Using a Loop
function printNumbers(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}
printNumbers(5);

//Print Numbers in Reverse
function printReverse(n) {
  for (let i = n; i >= 1; i--) {
    console.log(i);
  }
}
printReverse(4);

//Calculate the Factorial of a Number
let number = prompt("Enter the number");
let fact = 1;
if (number == 0) {
  console.log(`The factorial of 0 is 1`);
} else if (number < 0) {
  console.log(`The factorial of negative numbers is not possible`);
} else {
  for (i = 1; i <= number; i++) {
    fact = fact * i;
  }
  console.log(`The factorial of ${number} is ${fact}.`);
}

//Fibonacci Sequence
let digit = prompt("Enter a number");
let a = 0,
  b = 1;
i = 0;
console.log(a);
console.log(b);
while (i < digit) {
  i++;
  let temp = a + b;
  a = b;
  b = temp;
  console.log(temp);
}

//Nested Loops for Patterns
let valueOfStars = prompt("Please enter a value");
for (i = 1; i <= valueOfStars; i++) {
  for (j = 1; j <= i; j++) {
    document.write("*");
  }
  document.write("</br>");
}
