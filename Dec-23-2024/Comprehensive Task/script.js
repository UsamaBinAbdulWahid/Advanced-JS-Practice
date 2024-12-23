// Mini-database
let database = [
  { name: "Student1", age: 19, grade: "B" },
  { name: "Student2", age: 20, grade: "A" },
  { name: "Student3", age: 18, grade: "C" },
];

// Add a new object
let newStudent = { name: "Student4", age: 21, grade: "A+" };
database.push(newStudent);

// Update one of the objects
for (let student of database) {
  if (student.name === "Student3") {
    student.grade = "B+";
  }
}

// Delete an object
for (let i = 0; i < database.length; i++) {
  if (database[i].name === "Student1") {
    database.splice(i, 1);
    break;
  }
}

// Display all objects
console.log("Final database:", database);
