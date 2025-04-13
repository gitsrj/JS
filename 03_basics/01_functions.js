
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
// console.log(loginUserMessage());

// Rest operator 
function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 100, 2000));

const user = {
    username: "sahil",
    prices: 199,
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 234
})

const myNewArr = [200, 344, 231, 893]

function returnSecondVal(getArray){
    // console.log(`Second element of ${getArray} is ${getArray[1]}`)
    return getArray[1]
}

// console.log(returnSecondVal(myNewArr));
console.log(returnSecondVal([122, 456, 532]));
