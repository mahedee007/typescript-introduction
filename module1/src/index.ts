const course: string = "Next level course";
console.log(course);


const info : (string|number|boolean)[] = ["Course", "Mahedee", 40, true]


// Union Type

type MyType = string | number | boolean

let myVar : MyType = "Mahedee"
myVar = 40
myVar = true
// tupple
const info2 : [string,string,number,boolean] = ["Course", "Mahedee", 40, true]
