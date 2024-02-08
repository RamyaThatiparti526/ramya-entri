function rolldice() {
  var result = 0;
  var result1 = <i class="bi bi-dice-1"></i>;
  var result2 = <i class="bi bi-dice-2"></i>;
  var result3 = <i class="bi bi-dice-3"></i>;
  var result4 = <i class="bi bi-dice-4"></i>;
  var result5 = <i class="bi bi-dice-5"></i>;
  var result6 = <i class="bi bi-dice-6"></i>;
  var randomNumber = Math.random();

  if (randomNumber > 0 && randomNumber <= 0.23) {
    result = 1;
  } else if (randomNumber > 0.23 && randomNumber <= 0.46) {
    result = 2;
  } else if (randomNumber > 0.46 && randomNumber < 0.69) {
    result = 3;
  } else if (randomNumber > 0.69 && randomNumber < 0.76) {
    result = 4;
  } else if (randomNumber > 0.76 && randomNumber < 0.86) {
    result = 5;
  } else if (randomNumber > 0.86 && randomNumber < 0.99) {
    result = 6;
  }
  console.log(result);

  if (result == 1) {
    console.log(result1);
  } else if (result == 2) {
    console.log(result2);
  } else if (result == 3) {
    console.log(result3);
  } else if (result == 4) {
    console.log(result4);
  } else if (result == 5) {
    console.log(result5);
  } else if (result == 6) {
    console.log(result6);
  }
}
