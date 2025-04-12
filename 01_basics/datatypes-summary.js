// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreVal = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id);
// console.log(anotherId);
// console.log(id == anotherId);

const bigNumber = 456789876523456n



// Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "srj",
    age: 20,
}

const myFunction = function(){
    console.log("hello world");
}

// console.log(typeof bigNumber);
// console.log(typeof myFunction);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non Primitive)

let myName = "Srj"

let anotherName = myName

anotherName = "gitsrj"

console.log(myName);
console.log(anotherName)

let userOne = {
    email: "user@gmai.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "userTwo@gmail.com"

console.log(userOne.email)
console.log(userTwo.email);
