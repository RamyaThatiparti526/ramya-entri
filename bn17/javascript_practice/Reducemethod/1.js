const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
  console.log("acc:", accumulator, "currentValue:", currentValue);
  return accumulator + currentValue;
}, 0);
console.log(sum);
