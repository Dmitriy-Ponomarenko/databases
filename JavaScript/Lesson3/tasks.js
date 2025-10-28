// slug in web development is a part of a URL which identifies a particular page in a human-readable way.
// It is usually derived from the page title and contains only lowercase letters, numbers, and hyphens.
// Example: In the URL "https://example.com/amazing-french-recipes", the slug is "amazing-french-recipes" instead of an ID like "12345" "https://example.com/12345".

// TASK 1
const slug = (title) => {
  return title.toLowerCase().split(" ").join("-");
};

console.log(slug("Top 10 benefits of React framework")); // "top-10-benefits-of-react-framework"
console.log(slug("Azure Static Web Apps are Awesome")); // "azure-static-web-apps-are-awesome"

// TASK 2
const makeArray = (firstArray, secondArray, maxLength) => {
  return firstArray.concat(secondArray).slice(0, maxLength);
};

console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]

// TASK 3
const filterArr = (numbers, val) => {
  const result = numbers.filter(function (num) {
    return num > val;
  });
  return result;
};

function filterArray(num, val) {
  return num.filter((num) => num > val);
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
