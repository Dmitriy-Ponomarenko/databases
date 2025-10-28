// 27.10.2025
// Array Creation and Initialization
const myArray = [10, 20, 30, 40, 50];

console.log("Original Array:", myArray); // Output: [10, 20, 30, 40, 50]

const mixedArray = [1, "two", true, null, { key: "value" }, [6, 7, 8]];

console.log("Mixed Array:", mixedArray); // Output: [1, "two", true, null, { key: "value" }, [6, 7, 8]]

//
//
//
//
//
//
//
//

// Array Methods Demonstration
const fruits = ["apple", "banana", "cherry"];
fruits.push("date");
console.log("After push:", fruits); // Output: ["apple", "banana", "cherry", "date"]

//
//

fruits.pop();
console.log("After pop:", fruits); // Output: ["apple", "banana", "cherry"]

//
//

fruits.shift();
console.log("After shift:", fruits); // Output: ["banana", "cherry"]

//
//

fruits.unshift("avocado");
console.log("After unshift:", fruits); // Output: ["avocado", "banana", "cherry"]

//
//

fruits.splice(1, 1, "blueberry");
console.log("After splice:", fruits); // Output: ["avocado", "blueberry", "cherry"]

//
//

fruits.sort();
console.log("After sort:", fruits); // Output: ["avocado", "blueberry", "cherry"]

//
//

fruits.reverse();
console.log("After reverse:", fruits); // Output: ["cherry", "blueberry", "avocado"]

//
//

fruits.forEach((fruit, index) => {
  console.log(`Fruit at index ${index}: ${fruit}`);
});
// Output:
// Fruit at index 0: cherry
// Fruit at index 1: blueberry
// Fruit at index 2: avocado

//
//
//
//
//
//
//
//

const words = ["JavaScript", "is", "amazing"];
console.log(words.join("")); // 'JavaScriptisamazing'
console.log(words.join(" ")); // 'JavaScript is amazing'
console.log(words.join("-")); // 'JavaScript-is-amazing'

//
//
//
//
//
//
//
//

function transformString(string) {
  const words = string.split("_");
  return words.join("-");
}

transformString("user_age"); // "user-age"
transformString("price_per_droid"); // "price-per-droid"

const name = "Mango";
const letters = name.split("");
console.log(letters); // ["M", "a", "n", "g", "o"]

const message = "JavaScript essentials";
const word = message.split(" ");
console.log(word); // ["JavaScript", "essentials"]

const slug = "amazing-french-recipes";
const slugParts = slug.split("-");
console.log(slugParts); // ["amazing", "french", "recipes"]

//
//
//
//
//
//
//
//

// Accessing Array Elements by Index
const planets = ["Earth", "Mars", "Venus"];
console.log(planets[0]); // 'Earth'
console.log(planets[1]); // 'Mars'
console.log(planets[2]); // 'Venus'

//
//
//
//

const planets2 = ["Earth", "Mars", "Venus"];

console.log(planets2.slice(0, 1)); // Output: ["Earth"]
console.log(planets2.slice(10, 6)); // Output: []
console.log(planets2.slice(1, 0)); // Output: []
console.log(planets2.slice(2)); // Output: ["Venus"]
console.log(planets2.slice(-2)); // Output: ["Mars", "Venus"]

//
//
//
//

const firstArray = ["Mercury", "Venus"];
const secondArray = ["Mars", "Jupiter"];
const result = firstArray.concat(secondArray);

console.log(result); // ["Mercury", "Venus", "Mars", "Jupiter"];
