const accountId = 1234
let accountEmail = "srj@gmail.com"
var accountPassword = "112"
accountCity = "Pune"
let accountState;

console.table([accountEmail, accountId, accountPassword, accountCity, accountState])

// We don't generally use var, because of scope wala problem.
/*
Prefer not to use var
because of issue in block scope and functional scope.
*/