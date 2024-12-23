//Create a student object
let student = {
  name: "Usama",
  age: 22,
  class: "5th",
};
console.log("Student Details: ", student);
//Adding a new property
student.grade = "A";
console.log("Updated Student Details: ", student);

//Create a car object
let car = {
  make: "Toyota",
  model: "Corolla",
  year: 2021,
  color: "Blue",
};
car.color = "Red";
console.log("Updated car details:", car);

//Create multiple objects and store them in an array
let students = [
  { name: "Usama", age: 22, class: "12th" },
  { name: "Ali", age: 21, class: "11th" },
  { name: "Ahamd", age: 23, class: "12th" },
];
console.log("Students:", students);
