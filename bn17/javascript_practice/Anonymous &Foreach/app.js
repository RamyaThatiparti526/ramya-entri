const arr = [1, 6, 8, 4, 2];

arr.forEach(function (val) {
  console.log(val);
});

let sum_value = 0;

function average(ele) {
  sum_value = sum_value + ele;
}

function avg(ele) {
  average(ele);
}
arr.forEach(avg);
console.log(sum_value / 5);
