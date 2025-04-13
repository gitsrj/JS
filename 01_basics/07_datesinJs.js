// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString('en-IN'));
// console.log(myDate.toLocaleString('en-IN'));

// console.log(typeof myDate);

// let myCreatedDate = new Date(2025, 2, 11);
// let myCreatedDate = new Date(2025, 2, 11, 5, 3);
// let myCreatedDate = new Date("2025-01-11");
let myCreatedDate = new Date("03-11-2025");
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth()+1);

// String Interpolation
// `Current Month is ${newDate.getMonth()+1}`

newDate.toLocaleString('default', {
    weekday: "long",
})

