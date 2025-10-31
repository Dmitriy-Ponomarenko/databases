// 31.10.2025

// while
let count = 0;

while (count < 10) {
  console.log(`Count: ${count}`);
  count++;
}

// do... while

let count1 = 0;

do {
  console.log(`Count: ${count}`);
  count++;
} while (count < 5);

// for

for (let i = 0; i <= 20; i += 5) {
  console.log(i);
}

// break
function findNumber(max, target) {
  console.log("Log in the body of the function before the cycle");

  for (let i = 5; i <= max; i += 1) {
    console.log("Current counter value i:", i);

    if (i === target) {
      console.log(`Found the number $ {target}, interrupt the cycle`);
      break;
    }
  }

  console.log("Log in body function after cycle");
}

findNumber(10, 6);
console.log("Log after exiting function");
