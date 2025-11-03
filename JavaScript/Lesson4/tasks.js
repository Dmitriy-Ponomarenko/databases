// 03.11.2025

// Task 1:
const isEnoughCapacity = (products, containerSize) => {
  let total = 0;
  for (product of Object.values(products)) {
    total += product;
  }
  return containerSize >= total;
};

// Second way
const isEnoughCapacity1 = (products, containerSize) => {
  const totalProducts = Object.values(products).reduce(
    (acc, curr) => acc + curr,
    0
  );
  return totalProducts <= containerSize;
};

// Thirs way
const isEnoughCapacity2 = (products, containerSize) => {
  const totalProducts = 0;
  for (const key in products) {
    totalProducts += products[key];
  }
  return totalProducts <= containerSize;
};

console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true
console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false
console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)); // true
console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)); // false

// Task 2:
const calcAverageCalories = (days) => {
  const totalCalories = days.reduce((acc, curr) => acc + curr.calories, 0);
  return days.length === 0 ? 0 : totalCalories / days.length;
};

// No reduce way
const calcAverageCalories1 = (days) => {
  let totalCalories = 0;
  for (const day of days) {
    totalCalories += day.calories;
  }
  return days.length === 0 ? 0 : totalCalories / days.length;
};

console.log(
  calcAverageCalories([
    { day: "monday", calories: 3010 },
    { day: "tuesday", calories: 3200 },
    { day: "wednesday", calories: 3120 },
    { day: "thursday", calories: 2900 },
    { day: "friday", calories: 3450 },
    { day: "saturday", calories: 3280 },
    { day: "sunday", calories: 3300 },
  ])
); // 3180

console.log(
  calcAverageCalories([
    { day: "monday", calories: 2040 },
    { day: "tuesday", calories: 2270 },
    { day: "wednesday", calories: 2420 },
    { day: "thursday", calories: 1900 },
    { day: "friday", calories: 2370 },
    { day: "saturday", calories: 2280 },
    { day: "sunday", calories: 2610 },
  ])
); // 2270

console.log(calcAverageCalories([])); // 0

// Task3:
const profile = {
  username: "Jacob",
  playTime: 300,

  changeUsername(newName) {
    this.username = newName;
  },

  updatePlayTime(hours) {
    this.playTime += hours;
  },

  getInfo() {
    return `${this.username} has ${this.playTime} active hours!`;
  },
};

console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"
