// singleton

// object literals

// Object.create

const mySym = Symbol("key1")


const JsUser = {
    name: "Sahil",
    "full name": "Sahil Jaiswal",
    [mySym]: "mykey1",
    age: 20,
    location: "Pune",
    email: "srj@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "Srj@chatgpt.com";
// Object.freeze(JsUser)
JsUser.email = "Srj@microsoft.com";
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
}

JsUser.greeting2 = function(){
    console.log(`Hello Js User ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());
