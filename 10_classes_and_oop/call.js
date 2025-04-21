function SetUsername(username){
    // complex DB Calls
    this.username = username
    console.log("Called")
}

function createUser(username, email, password){
    // SetUsername(username)  -> reference is given only and not the actual call, so we need to call it explicitely.
    SetUsername.call(this, username);   // 'this' is optional but it gives the current context so it works properly now.

    this.email = email;
    this.password = password;
}

const chai = new createUser("chai", "chai@fb", "123");
console.log(chai)

// call: gives the current execution context to the called function.