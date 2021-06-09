let myName = "Mark"
const yourName = "Zack"

// Uncaught TypeError: invalid assignment to const 'yourName' -> Cannot assign to const/cannot change value once declared.
// yourName = "Zackery"
myName = "Marky"

console.log(yourName)
console.log(myName)