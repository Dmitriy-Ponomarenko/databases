// FOR iteration
// Iterate over an array of numbers
const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  console.log(`Number at index ${i}: ${numbers[i]}`);
}
// Output:
// Number at index 0: 1
// Number at index 1: 2
// Number at index 2: 3
// Number at index 3: 4
// Number at index 4: 5

// includes() method
// Check if an array includes certain values
const colors = ["red", "green", "blue"];
console.log(colors.includes("green")); // Output: true
console.log(colors.includes("yellow")); // Output: false

// FOR ... OF interation
// Iterate over an array of animals
const animals = ["dog", "cat", "rabbit"];
for (const animal of animals) {
  console.log(`Animal: ${animal}`);
}
// Output:
// Animal: dog
// Animal: cat
// Animal: rabbit

// map() method
// Create a new array with squares of the numbers
const squares = numbers.map((num) => num * num);
console.log("Squares:", squares); // Output: [1, 4, 9, 16, 25]

// filter() method
// Get even numbers from the array
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log("Even Numbers:", evenNumbers); // Output: [2, 4]

// reduce() method
// Sum all numbers in the array
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log("Sum:", sum); // Output: 15

// find() method
// Find the first even number in the array
const firstEven = numbers.find((num) => num % 2 === 0);
console.log("First Even Number:", firstEven); // Output: 2

// some() method
// Check if there is any negative number in the array
const hasNegative = numbers.some((num) => num < 0);
console.log("Contains Negative Number:", hasNegative); // Output: false

// every() method
// Check if all numbers are positive
const allPositive = numbers.every((num) => num > 0);
console.log("All Numbers Positive:", allPositive); // Output: true

//
//
//
//

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
