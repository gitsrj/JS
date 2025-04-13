// Immediately Invoked Function Expressions (IIFE)
// To remove global scope pollution

(function chai(){
    // named IIFE
    console.log("db connected");
})();  // this semicolon is very important.

( (name) => {
    console.log(`DB connected two ${name}`)
} )('sahil')

