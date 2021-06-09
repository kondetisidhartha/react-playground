class SuperClass {

  // In ES6, it is mandatory to write properties in constructor class
  constructor() {
    // properties are like "variables" attached to classes/objects.
    this.superText = "This is from super class."
  }

  // In ES7, we can assign properties directly inside classes.
  superTextES7 = "This is property text in super class outside constructor"

  // Methods are like "functions" attached to classes/objects
  printFromSuperClass() {
    console.log(this.superText)
  }
}

class ChildClass extends SuperClass {
  constructor() {
    // Mandatory to call super method in child class when extended (inheritance)
    super()
    this.childText = "This is from child class"
    this.superText = "This is overriden super class text in child class"
  }

  // ES6 methods
  printFromChildClass() {
    console.log(this.childText)
  }

  // ES7 methods
  printFromChildClassES7 = () => console.log(this.childText)
}

const newSuperClassObject = new SuperClass()
const newChildClassObject = new ChildClass()

newSuperClassObject.printFromSuperClass()
newChildClassObject.printFromChildClass()
newChildClassObject.printFromChildClassES7()

console.log(newChildClassObject.superText)
console.log(newSuperClassObject.superTextES7)