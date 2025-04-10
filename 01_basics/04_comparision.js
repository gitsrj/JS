// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);   // comparisions convert null to a number, treating it as 0
console.log(null == 0);  // sometimes null gets converted into NaN sometimes in 0.
console.log(null >= 0);  // equality checks work differently than comparisions.

// Avoid these types of conversions, write clean code.
console.log(undefined == 0);
console.log(undefined > 0);

// ===

console.log("2" === 2);

