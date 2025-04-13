// var c = 300
let a = 300

if (true) {
    let a = 10
    const b = 20
    // c = 30
    // console.log("INNER: ", a);
}

// console.log("OUTER: ",a);
// console.log(b);
// console.log(c);


function One(){
    const username = "sahil"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two();
}

// One()

if(true){
    const username = "sahil"
    if (username === "sahil") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website)
}

// console.log(username)


// ++++++++++++++++++++++++++++++++ interesting ++++++++++++++++++++++++++++++++++++


console.log(addone(5));

function addone(num){
    return num+1
}


// console.log(addTwo(5));  //  Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num + 2
}

