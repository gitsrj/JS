const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descriptor);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

// const myNewObject = Object.create(null)

const chai = {
    name: "green tea",
    price: 300,
    isAvailable: true,

    orderChai: function(){
        console.log("Chai nahi bani")
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {
    // writable: false,
    enumerable: false,
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`)
    }
}



