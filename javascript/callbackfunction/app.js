function callbackTest() {
  console.log("Hi this is for callback function");
}

function add(n1, n2, func) {
  console.log(n1 + n2);
  func();
}

let a = 7;
let b = 7;
add(a, b, callbackTest);

//  call chestappudu and parameters pass chesinapudu function name to rayali but function lo e name ina undachu  ex : add(a, b, callbackTest) but manam function lo func ani rasamu...
