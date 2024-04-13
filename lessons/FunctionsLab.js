// Task 1: adding two strings
function addStrings(s1, s2) {
  console.log(s1 + s2);
}
// calling function
addStrings("Hello", "World");

// Task 2: adding two values with one is default
function addValues(val1, val2 = 15) {
  return val1 + val2;
}
// function calls
console.log(addValues(5));
console.log(addValues(5, 10));

// Task 3: arrow function of task 1
arrowFunction = (a, b) => a + b;
// calling arrow function using console log
console.log(arrowFunction("Hi", "Hello"));
