'...' is the spread and rest operator. It is called spread or rest depends on where we use it.

### Spread operator
#### Used to split up array elements OR object properties.

`const newArray = [ ...oldArray, 1, 2]`
`const newObject = { ...oldObject, newProp: 5 }`

Here `newArray` / `newObject` will pull out all `oldArray` / `oldObject` values(spread) and add them as new values.
**Important** if `oldObject` has `newProp` key then it will be overriden here with new value of `5`.

### Rest operator
#### Used to merge a list of function arguments into an array.


Here args can receive any number of arguments, it will be converted to an array.
```
function sortArgs(...args) {
  return args.sort()
}
```