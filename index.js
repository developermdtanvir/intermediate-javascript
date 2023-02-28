// Boolean expression return true or false

Boolean(10 > 5); // true
Boolean(5 > 10); // false
Boolean("javascript"); // true
Boolean(""); // false
Boolean(" "); // true

// array example
let miscellaneous = ["🥭", "🍌", "", false, "javascript", NaN];

let trueValue = miscellaneous.filter((items) => Boolean(items));

/*
// convert to Boolean() function short form !!

console.log(!!"Tanvir"); // true
console.log(!!0); // false
console.log(!!1); // true
console.log(!!""); // false
console.log(!!" "); // true
console.log(!!null, "null"); // false
console.log(!!undefined, "undefined"); // true

*/

/* Array Resizing */

let animals = ["🧸", "🐂", "🐐", "🦘"];

// we cane use array length property
animals.length = 3;

console.log(animals); // ["🐕‍🦺", "🐂", "🐐"]

/* multi-dimensional array */

let smile = ["😀", ["😍", "🥰"], ["🥶", "😰", "😨"], "🤢", "🤮"];
const smile2 = ["😀", ["😍", "🥰"], ["🥶", ["😰", "😨"], "🤢", "🤮"]];

// we can using array.flat() method
// console.log(smile.flat());
// console.log(smile2.flat(Infinity));

const captain = "Tanvir";

captain === "Tanvir" ? console.log("😍") : console.log("🤢");

// replace all occurances

const quotes =
  "React is a js framework & this framework is the most popular frontend framework right now";

console.log(quotes.replace(/framework/g, "library"));

// output : React is a js library & this library is the most popular frontend library right now

console.log({ quotes });
