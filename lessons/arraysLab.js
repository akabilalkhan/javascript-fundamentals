// TASK 1
// Array of ice cream flavors
const iceCreamFlavors = [
  "Vanilla",
  "Chocolate",
  "Strawberry",
  "Mint Chocolate Chip",
  "Cookie Dough",
  "Rocky Road",
  "Butter Pecan",
  "Cookies and Cream",
  "Pistachio",
  "Neapolitan",
];

// Function to print out the ice cream flavors
function printIceCreamFlavors(flavors) {
  flavors.forEach((element) => console.log(element));
}
// Function call
printIceCreamFlavors(iceCreamFlavors);

// TASK 2
// Function to join ice cream flavors using ' & ' and print out the result
function printJoinedFlavors(flavors) {
  const joinedFlavors = flavors.join(" & ");
  console.log(joinedFlavors);
}
// Function call
printJoinedFlavors(iceCreamFlavors);
