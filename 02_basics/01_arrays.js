// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ["shaktiman", "IronMan"]

const myArr2 = new Array(1, 2, 3, 4, 5)

// Array Methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(8)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

// const newArr = myArr.join()

// console.log(typeof newArr)
// console.log(myArr);

// slice, splice

console.log("A ", myArr);

const myN1 = myArr.slice(1, 3)

console.log(myN1);
console.log("B ", myArr)

// Original Array get manipulated.
const myN2 = myArr.splice(1, 3)
console.log("C ", myArr)
console.log(myN2);

