// let myName = "Sahil         "
// let myChannel = "SRJ      "

// console.log(myName.truelength());


let myHero = ["thor", "superman"]

let heroPower = {
    thor: "hammer",
    superman: "laser",

    getSuperPower: function (){
        console.log(`Superman power : ${this.superman}`)
    }
}

Object.prototype.sahil = function(){
    console.log("Sahil is present in all objects");
}

Array.prototype.heySahil = function(){
    console.log("Sahil says Hello");
    
}

// heroPower.sahil()
// myHero.sahil()

// myHero.heySahil();
// heroPower.heySahil();

// INHERITANCE

const User = {
    name: "mango",
    email: "mango@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User


// MODERN SYNTAX

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "      ChaiaurCode              "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True Length is ${this.trim().length}`);
}

anotherUsername.trueLength();
"Sahil".trueLength();
"ColdCoffee".trueLength();