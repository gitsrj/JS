
function sayMyName(){
    console.log("S");
    console.log("a");
    console.log("h");
    console.log("i");
    console.log("l");
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    // let result = number1+number2
    // return result

    return number1 + number2
}

const result = addTwoNumbers(5, 8)
// console.log(`Result is ${result}`);

function loginUserMessage(username = "Sam"){
    if(username === undefined){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("sahil"));
console.log(loginUserMessage());


