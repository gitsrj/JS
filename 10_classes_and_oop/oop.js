const user = {
    username: "SRJ",
    loginCount: 10,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from DB")
        // console.log(`USername : ${this.username}`)
        console.log(this)
    }

}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);


// const promiseOne = new Promise()
const date = new Date()

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }

    return this;
}

const userOne = new User("Sahil", 12, true)
const userTwo = new User("Code", 11, false);
// console.log(userOne)
console.log(userTwo.constructor)
