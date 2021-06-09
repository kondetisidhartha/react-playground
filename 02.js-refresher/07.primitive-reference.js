// numbers, booleans, strings are primitive types, meaning if we assign other variable to this a new copy is assigned to new variable.
const numberOne = 10
const numberCopy = numberOne

// numberOne and numberTwo are two different copies.

// But arrays, objects are reference types, meaning both are pointed to same reference and change in one affects another.

const arrayOne = [1,2,3]
const arrayCopy = arrayOne
const arraySpread = [ ...arrayCopy ]
arrayCopy.push(4)
console.log(arrayOne) // [1,2,3,4]
console.log(arrayCopy) // [1,2,3,4]
console.log(arraySpread) // [1,2,3]