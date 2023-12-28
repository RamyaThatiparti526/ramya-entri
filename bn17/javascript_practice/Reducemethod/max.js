// Sum Numbers

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
  console.log("acc:", accumulator, "currentValue:", currentValue);
  return accumulator + currentValue;
}, 0);
console.log(sum);

// Maximum Number

const numbers1 = [5, 8, 2, 12, 6];

const max = numbers1.reduce((accumulator, currentValue) => {
  return accumulator > currentValue ? accumulator : currentValue;
}, -Infinity);
console.log(max);

// Minimum Number

const numbers2 = [5, 8, 2, 12, 6];

const min = numbers2.reduce((accumulator, currentValue) => {
  return accumulator < currentValue ? accumulator : currentValue;
}, Infinity);
console.log(min);

// Concat Words

const words = ["Hello", " ", "world", "!"];

const sentence = words.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, "");
console.log(sentence);

// Concat Arrays

const arrays = [
  [1, 2],
  [3, 4],
  [5, 6],
];

const flattened = arrays.reduce((accumulator, currentValue) => {
  return accumulator.concat(currentValue);
}, []);
console.log(flattened);

//Frequency Finder

const colors = ["red", "blue", "green", "red", "blue", "red"];
const frequency = colors.reduce((accumulator, currentValue) => {
  accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
  return accumulator;
}, {});
console.log(frequency);
