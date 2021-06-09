// Arrow functions : No more issues with 'this' keyword

const printThis = whatever => console.log(whatever)

printThis() // undefined
printThis(10) // 10
printThis('name') // name


const factorial = num => {
  if (num === 1) return 1
  return num * factorial(num - 1)
}

console.log(factorial(5)) // 120