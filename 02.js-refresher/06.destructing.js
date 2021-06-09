// Destructuring: allows us to easily extract array elements or object properties and store them in variables. 
// It allows us to pull out single elements or properties and store them in variables for arrays and objects.

let a,b, rest;
[a, b] = [10, 20];

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// expected output: Array [30,40,50]


const hero = {
  name: 'Batman',
  realName: 'Bruce Wayne'
};

const { name, realName } = hero;

console.log(name, realName)