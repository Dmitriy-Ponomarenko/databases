const calcAverageCalories = (days) => {
  const totalCalories = days.reduce((acc, curr) => acc + curr.calories, 0);
  return days.length === 0 ? 0 : totalCalories / days.length;
};

const calcAverageCalories1 = (days) => {
  let totalCalories = 0;
  for (const day of days) {
    totalCalories += day.calories;
  }
  return days.length === 0 ? 0 : totalCalories / days.length;
};

const generateDays = (n) => {
  const days = [];
  for (let i = 0; i < n; i++) {
    days.push({ calories: Math.floor(Math.random() * 4000) });
  }
  return days;
};

const days = generateDays(10_000_000);

console.time("reduce");
calcAverageCalories(days);
console.timeEnd("reduce");

console.time("for..of");
calcAverageCalories1(days);
console.timeEnd("for..of");
