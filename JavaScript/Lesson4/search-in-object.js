// 03.11.2025

// for... in loop
const exampleObject = {
  a: 1,
  b: 2,
  c: 3,
};

for (const key in exampleObject) {
  console.log(key); // 'a', 'b', 'c'
  console.log(exampleObject[key]); // 1, 2, 3
}

// Object.keys(), Object.values(), Object.entries() methods
const example = {
  x: 10,
  y: 20,
  z: 30,
};

const keys = Object.keys(example);
console.log(keys); // ['x', 'y', 'z']

const values = Object.values(example);
console.log(values); // [10, 20, 30]

const entries = Object.entries(example);
console.log(entries); // [['x', 10], ['y', 20], ['z', 30]]

// Object array
const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Tell-Tale Heart",
    author: "Edgar Allan Poe",
    rating: 7.75,
  },
];

for (const book of books) {
  console.log(book); // {title: "...", author: "...", rating: ...}
  console.log(book.title); // "The Last Kingdom", "Beside Still Waters", "The Tell-Tale Heart"
  console.log(book.author); // "Bernard Cornwell", "Robert Sheckley", "Edgar Allan Poe"
  console.log(book.rating); // 8.38, 8.51, 7.75
}

// Example
const bookss = [
  { title: "The Last Kingdom", author: "Bernard Cornwell" },
  { title: "Beside Still Waters", author: "Robert Sheckley" },
  { title: "The Tell-Tale Heart", author: "Edgar Allan Poe" },
];

const authorToSearchFor = "Robert Sheckley";

for (const book of bookss) {
  if (book.author === authorToSearchFor) {
    console.log(book);
    console.log(book.title);
    console.log(book.rating);
  }
}

// Object Methods
const bookShelf = {
  books: ["The Last Kingdom"],
  getBooks() {
    return this.books;
  },
  addBook(bookName) {
    this.books.push(bookName);
  },
};

console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
bookShelf.addBook("The Mist");
bookShelf.addBook("Dream Guardian");
console.log(bookShelf.getBooks()); // ["The Last Kingdom", "The Mist", "Dream Guardian"]

// this
const bookShelf1 = {
  books: ["The Last Kingdom", "Dream Guardian"],
  getBooks() {
    return this.books;
  },
};

console.log(bookShelf1.getBooks()); // ["The Last Kingdom", "Dream Guardian"]
