// 03.11.2025
// Objects in js

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  public: true,
  rating: 8.38,
};

console.log(book.title); // "The Last Kingdom"

const myTitle = book.title; // "The Last Kingdom"

const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  location: {
    country: "Jamaica",
    city: "Ocho Rios",
  },
  hobbies: ["swimming", "music", "sci-fi"],
};

const location = user.location;
console.log(location); // {country: "Jamaica", city: "Ocho Rios"}

const country = user.location.country;
console.log(country); // "Jamaica"

// There are two types of calling the data from an object

//  The first one is objectName.key
const customer = {
  custName: "Kiril",
  custAge: 24,
};

console.log(customer.age); // 24

// The second one is objectName["key"]
const example = {
  gg: "gg",
};

console.log(example["gg"]); // 'gg'

// Push something to an object
const animal = {
  name: "Mango",
  age: 5,
  hobby: "skydiving",
  premium: true,
  toys: ["ball", "frisbee"],
};

animal.mood = "happy";
animal["full name"] = "Mango the dog";
animal.toys.push("chew toy");

console.log(animal); // {name: "Mango", age: 5, hobby: "skydiving", premium: true, toys: Array(3), mood: "happy", "full name": "Mango the dog"}
