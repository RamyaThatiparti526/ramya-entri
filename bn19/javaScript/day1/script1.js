function add(Num1, Num2) {
  return Num1 + Num2;
}
function sub(Num1, Num2) {
  return Num1 - Num2;
}
function division(Num1, Num2) {
  return Num1 / Num2;
}
function remainder(Num1, Num2) {
  return Num1 % Num2;
}
function multiply(Num1, Num2) {
  return Num1 * Num2;
}
function calculator(operation, Num1, Num2) {
  let result = operation(Num1, Num2);
  console.log(result);
}
calculator(add, 4, 6);
calculator(sub, 4, 6);
calculator(multiply, 4, 6);
calculator(remainder, 4, 6);
calculator(division, 89, 6);
