function simpleFunction() {
  console.log("This is a simple function");
}

function simpleFunction2() {
  return "This is a simple function 2";
}

function simpleFunction3(msg) {
  console.log(msg);
}

simpleFunction();
console.log(simpleFunction2());
simpleFunction3("This is simple function 3");

const simple = simpleFunction2();
console.log(simple.toUpperCase());
simpleFunction3(1);

const squateFoot = function (length, width) {
  return length * width;
};

console.log(squateFoot(24, 25));
let able = 32;
function sample1() {
  let beta = "Hello";
  console.log(beta);
}

function sample2() {
  console.log(able);
}

sample2();

// Nested Function
function outerFunction(value1) {
  let charlie = 20;

  function innerFunction() {
    let total = charlie + value1;
    console.log(total);
  }

  innerFunction();
}
outerFunction(10);

// Closure function
function init() {
  const name = "John Smith";

  function displayName() {
    console.log(name);
  }
  displayName();
}
init();

function parent(value) {
  const num = 0;
  function child() {
    return value + num;
  }
  return child;
}

// console.log(parent(10));
const childFunc = parent(10);
console.log(childFunc);

function makeCounter() {
  let count = 0;
  return function () {
    return (count = count + 1);
  };
}
let counter = makeCounter();

console.log(counter());
console.log(counter());
console.log(counter());

function subtract(value1, value2 = 5) {
  return value1 - value2;
}
console.log(subtract(15, 7));
console.log(subtract(15));
