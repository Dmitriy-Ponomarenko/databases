// 29.10.2025 Branching in JavaScript

// Conditional statements allow you to execute different blocks of code based on certain conditions.
// if... else if... else
const func = (number, goal) => {
  if (number < goal) {
    return number * 2;
  } else if (number > goal) {
    return number - 50;
  } else {
    return number;
  }
};

func(50, 100); // 100
func(100, 100); // 100
func(150, 100); // 100

//
//
//
//

// switch... case... break... default
const getDayName = (dayNumber) => {
  let dayName;
  switch (dayNumber) {
    case 1:
      dayName = "Monday";
      break;
    case 2:
      dayName = "Tuesday";
      break;
    case 3:
      dayName = "Wednesday";
      break;
    case 4:
      dayName = "Thursday";
      break;
    case 5:
      dayName = "Friday";
      break;
    case 6:
      dayName = "Saturday";
      break;
    case 7:
      dayName = "Sunday";
      break;
    default:
      dayName = "Invalid day number";
  }
};

// Ternary operator
const checkAge = (age) => {
  return age >= 18 ? "Adult" : "Minor";
};

checkAge(20); // "Adult"

//
//
//
//

// Nested conditional statements
const categorizeNumber = (num) => {
  if (num > 0) {
    if (num % 2 === 0) {
      return "Positive even number";
    } else {
      return "Positive odd number";
    }
  } else if (num < 0) {
    if (num % 2 === 0) {
      return "Negative even number";
    } else {
      return "Negative odd number";
    }
  } else {
    return "Zero";
  }
};
