// Task 1: precedence
function precedence() {
  problem1 = 10 + (32 * 12) / 3;
  problem2 = ((10 + 32) * 12) / 3;

  console.log("Problem 1: ", problem1);
  console.log("Problem 2: ", problem2);
}
precedence();

// Task 2: assignment operators
function assignmentOperators(p1, p2) {
  console.log("Using += we get: ", (p1 += p2));
  console.log("Using *= we get: ", (p1 *= p2));
  console.log("Using %= we get: ", (p1 %= p2));
}
assignmentOperators(2, 2);

// Task 3: comparison operators
function compareValues(value1, value2) {
  // Assigning each comparison operator to a const variable
  const isEqual = value1 == value2;
  const notEqual = value1 != value2;
  const strictEqual = value1 === value2;

  // Console log statements to describe each operator and their output
  console.log(`Value1 (${value1}) == Value2 (${value2}): ${isEqual}`);
  console.log(`Value1 (${value1}) != Value2 (${value2}): ${notEqual}`);
  console.log(`Value1 (${value1}) === Value2 (${value2}): ${strictEqual}`);
}

// Test the function with some values
console.log("Comparing 5 and 5");
compareValues(5, 5); // Output depends on the values: true, false, true
console.log("comparing 5 and '5'");
compareValues(5, "5"); // Output depends on the values: true, false, false
