const user = {
    username: "Sahil",
    price: 999,
    
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    },

}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "sahil"
//     console.log(this.username)
// }

// chai()

// const chai = function(){
//     let username = "sahil"
//     console.log(this.username)
// }


const chai = () => {
    let username = "sahil"
    console.log(this)
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// Implicit return
// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "sahil"})


console.log(addTwo(3,2));


// const myArr = [2, 5, 3, 2, 4]

// myArr.forEach() 

