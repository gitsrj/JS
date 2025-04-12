const name = "Sahil"
const repoCount = 10

// console.log(name + repoCount + " Value");

// console.log(`Hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}`);

// String is an object
const gameName = new String('Sahil-R-J')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('R'));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-7, 4);
console.log(anotherString);

const newStringOne = "   srj    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://srj.com/srj%20rj"

console.log(url.replace('%20', '-'));

console.log(url.includes('srj'))

console.log(gameName.split('-'));
