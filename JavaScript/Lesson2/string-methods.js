// String methods

// objectName.property
const message = "JavaScript is awesome";
console.log(message.length); // 21

// objectName.method()
const message1 = "JavaScript is awesome";
console.log(message1.toUpperCase()); // "JAVASCRIPT IS AWESOME"

// .length
const message2 = "JavaScript is awesome";
console.log(message.length); // 21

const fullName = "Jacob Mercer";
console.log(fullName.slice(0, 4)); // 'Jaco'
console.log(fullName.slice(3, 9)); // 'ob Mer'
console.log(fullName.slice(0, fullName.length)); // 'Jacob Mercer'

//
//
//
//

// .includes();
const username = "Jacom Mercer";

console.log(username.includes("Jacob")); // true
console.log(username.includea("Marta")); // false
console.log(username.includea("Mercer")); // true
console.log(username.includes("Alex")); // false

// .startsWith() && .endsWith();
const str1 = "Hello World!";
console.log(str1.startsWith("Hello").endsWith("World!")); // true

// .indexOf();
const message3 = "My text is here";
console.log(messsage3.indexOf("is")); // 8

const message4 = "Welcome to my website!";
console.log(message4.indexOf("Hello")); // -1

// .trim();
const message5 = "   This is my loggin     ";
console.log(message5.trim()); // 'This is my loggin'
