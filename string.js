// template strings

// //Backticks ``
// // let str = "hello";
// // let str = "hello om";
// let str = `hello om namaskar!`;

// console.log(str);

// let str1 = "om\n" + "namskar";
// let str2 = `om
// namaskar`;
// console.log(str1);
// console.log(str2);

// let y = "Bond";
// console.log(`my name is ${y}, james ${y}...`);

let one = 1;
let two = 2;
// let sum = `adding ${one} and ${two} gives me ${one + two}`;
// console.log(sum);

// tagged template

let tagged = function (strArray, ...vals) {
  console.log(strArray);
  console.log(vals);
};

// tagged`adding ${one} and ${two} gives me ${one + two}`;

console.log("hello world".startsWith("hell")); //true
console.log("hello world".endsWith("orld")); //true
console.log("hello world".endsWith("blah")); //false
console.log("hello world".includes("orl")); //true
console.log("hello world".repeat(3)); //hello world hello world hello world

let raw = String.raw`not a new line:\n`;
console.log(raw);
