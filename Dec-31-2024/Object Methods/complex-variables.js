//Get Keys with Specific Value Type
//Write a function getKeysOfType() that returns the keys of an object where the value is of a specific type (e.g., string, number).
function getKeysOfType(obj, type) {
  return Object.keys(obj).filter((key) => typeof obj[key] === type);
}
const myObject = { a: 1, b: "hello", c: true, d: 2 };
console.log(getKeysOfType(myObject, "string"));
console.log(getKeysOfType(myObject, "number"));

//Find Key with Maximum Value
//Write a function findMaxValueKey() that finds the key with the maximum value in an object with numeric values.
function findMaxValueKey(obj) {
  return Object.keys(obj).reduce(
    (maxKey, key) => (obj[key] > (obj[maxKey] || 0) ? key : maxKey),
    null
  );
}
const itsObject = { a: 10, b: 20, c: 15 };
console.log(findMaxValueKey(myObject));

//Manage Product Ratings
//Create an object for a product (name, reviews, ratings) with methods to:
//Add a new rating.
//Calculate the average rating.
const product = {
  name: "Smartphone",
  reviews: [],
  ratings: [],
  addRating(rating) {
    if (typeof rating === "number" && rating >= 0 && rating <= 5) {
      this.ratings.push(rating);
    } else {
      console.error("Rating must be a number between 0 and 5.");
    }
  },
  calculateAverageRating() {
    if (this.ratings.length === 0) return 0;
    return (
      this.ratings.reduce((sum, rating) => sum + rating, 0) /
      this.ratings.length
    );
  },
};
product.addRating(4.5);
product.addRating(3);
console.log(product.calculateAverageRating());
