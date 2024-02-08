function selectColor(x) {
  if (x == "red" || x == "blue" || x == "green") {
    return "true";
  } else if (x == "blue" || x == "green") {
    return "selected";
  } else if (x == "red") {
    return "invalid";
  }
}
let x = "blue";
console.log(selectColor(x));
