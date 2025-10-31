// Logical operators

const a = true;
const b = false;

console.log(a && b); // false
console.log(a || b); // true
console.log(!a); // false

console.log(Boolean(true)); // true
console.log(Boolean(false)); // false

console.log(Boolean(NaN)); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(0)); // false
console.log(Boolean(3.14)); // true
console.log(Boolean(-10)); // true

console.log(Boolean("")); // false
console.log(Boolean("hello")); // true
console.log(Boolean("false")); // true

//
//
//
//

console.log("hello" && 5); // 5
console.log(5 && "hello"); // "hello"

console.log("mango" && "poly"); // "poly"
console.log("poly" && "mango"); // "mango"

console.log(3 && true); // true
console.log(true && 3); // 3

//
//
//
//

console.log("hello" && 0); // 0
console.log(0 && "hello"); // 0

console.log(3 && false); // false
console.log(false && 3); // false

console.log(0 && ""); // 0
console.log("" && 0); // ""

//
//
//
//

const a1 = 20;
console.log(a1 > 10 && a1 < 30); // true && true -> true

const b1 = 50;
console.log(b1 > 10 && b1 < 30); // true && false -> false
console.log(b1 > 80 && b1 < 120); // false && true -> false

//
//
//
//

console.log(true || false); // true
console.log(false || true); // true

console.log(5 || false); // 5
console.log(false || 5); // 5

console.log("hello" || 0); // "hello"
console.log(0 || "hello"); // "hello"
