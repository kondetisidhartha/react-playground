// Spread operator
const oddNumbers = [ 1, 3, 5, 7, 9]
const evenNumbers = [ 2, 4, 6, 8]

const numbersSpread = [ ...oddNumbers, ...evenNumbers]
const numbersNoSpread = [ oddNumbers, evenNumbers]
console.log(numbersSpread.sort()) // Array(9) [1,2,3,4,5,6,7,8,9]
console.log(numbersNoSpread) // [[1,3,5,7,9],[2,4,6,8]]

// Rest operator
const filter = (...args) => {
  return args.filter(element => element === 1)
}

console.log(filter(1,2,3,4,1)) // [1,1] output as an array.