// Declare a string using single quote
let felineType = "Cat";
let felineAction = "They meow quietly";

// Declare a string using single quote
let canineType = "Dog";
let canineAction = "They bark loudly";

/* Using bracket notation on a variable of string will output
1 character or undefined */
console.log(canineType[2]);
console.log(felineAction[7]);
console.log(canineAction[2]);
console.log(felineType[2]);

let longSentence =
  "Lorem hskjha jska n ajcl, sjn iujsahn bia  a" +
  "dsjkhjshjhskjahjkshkjh, sahdkjhkcjahsdkjhkjdshkjhhkj" +
  "sd bialak kajakji hi aimsn alanjal a jhamndni ajcnalna";

let longSecond =
  "Lorem hskjha jska n ajcl, sjn iujsahn bia  a \
  dsjkhjshjhskjahjkshkjh, sahdkjhkcjahsdkjhkjdshkjhhkj \
  sd bialak kajakji hi aimsn alanjal a jhamndni ajcnalna";

const alpha = "Hello";
const beta = " world";

const combinedVariables = alpha + beta;
console.log(combinedVariables);

const combined2 = alpha + 40;
console.log(combined2);

const combined3 = "The " + beta + " is vast.";
console.log(combined3);

const VALUE1 = 20;
const VALUE2 = 10;

console.log(
  "Thirty is " + (VALUE1 + VALUE2) + " and not " + (2 * VALUE1 + VALUE2)
);

console.log(`Thirty is ${VALUE1 + VALUE2} and not ${2 * VALUE1 + VALUE2}`);

let letter = "\u00A9";
console.log(letter);

let phrase = "My name Roger 0'Dell. \tHow are \n you doing today?";
console.log(phrase);

let phrase2 = "Let's try \\something \0";
console.log(phrase2);

const example_length = "sit uhua, asiuhasuh aoia";
console.log(example_length.length);

const msg = "Hello, world";
console.log(msg.at(-2));
console.log(msg.at(4));
console.log(msg.charAt(-1)); // char at does not work with negative sign
console.log(msg.includes("ell"));
console.log(msg.indexOf("w"));
console.log(msg.toUpperCase());
