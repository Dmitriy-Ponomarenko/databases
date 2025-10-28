const fruits = ["apple", "banana", "cherry", "date"];

fruits.forEach((fruit, index) => {
  console.log(`Fruit at index ${index}: ${fruit}`);
});
// Output:
// Fruit at index 0: apple
// Fruit at index 1: banana
// Fruit at index 2: cherry
// Fruit at index 3: date

//
//
//
//

const planets = ["Earth", "Mars", "Venus"];

console.log(planets.slice(0, 1)); // Output: ["Earth"]
console.log(planets.slice(10, 6)); // Output: []
console.log(planets.slice(1, 0)); // Output: []
console.log(planets.slice(2)); // Output: ["Venus"]
console.log(planets.slice(-2)); // Output: ["Mars", "Venus"]

// 28.10.2025

const array = [10, 20, 20, 30, 40, 50, 50];
console.log(array);

const newArray = [...new Set(array)];
console.log(newArray); // Output: [10, 20, 30, 40, 50]

const newArray2 = Array.from(new Set(array));
console.log(newArray2); // Output: [10, 20, 30, 40, 50]

const newArray3 = array.filter((item, index) => array.indexOf(item) === index);
console.log(newArray3); // Output: [10, 20, 30, 40, 50]

// Array.from() method
// Create an array from a string
const str = "hello";
const charArray = Array.from(str);
console.log("Character Array:", charArray); // Output: ['h', 'e', 'l', 'l', 'o']

// Task 1: Create an array of numbers and use map() to create a new array with each number doubled.
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);
console.log("Doubled Numbers:", doubled); // Output: [2, 4, 6, 8, 10]

// Task 2: Create an array of strings and use filter() to create a new array with only the strings that have more than 3 characters.
const strings = ["hi", "hello", "hey", "greetings", "yo"];
const LongString = strings.filter((str) => str.length > 3);
console.log("Long Strings:", LongString); // Output: ["hello", "greetings"]

// Task 3: Create an array of numbers and use reduce() to calculate the product of all the numbers in the array.
const numss = [1, 2, 3, 4];
const product = numss.reduce((acc, cur) => acc * cur, 1);
console.log("Product of Numbers:", product); // Output: 24
// Array.prototype.reduce() method makes it possible to reduce an array to a single value by executing a reducer function on each element of the array, resulting in a single output value.

const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
myArr.splice(5, 0, 5.5);
console.log(myArr); // Output: [1, 2, 3, 4, 5, 5.5, 6, 7, 8, 9, 10]
myArr.splice(5, 2);
console.log(myArr); // Output: [1, 2, 3, 4, 5, 7, 8, 9, 10]
