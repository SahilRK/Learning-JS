//Variables
//Declarations
//JavaScript has three kinds of variable declarations.

/* 
---- var ----
Declares a variable, optionally initializing it to a value.
---- let ----
Declares a block-scoped, local variable, optionally initializing it to a value.
---- const ----
Declares a block-scoped, read-only named constant.
*/

//Variables can be declared by unpacking Object Literals 
let new_obj = {
    foo: 'Hello',
    bar: 'Hi'
}

let {bar} = new_obj;
console.log(bar);

//Variable hoisting
//Though var and let can be declared without a value assignment, they differ when it comes to variable hoisting.
//For eg: variables using var can be defined after they are called, where as in let, variables have to be defined before being called since they throw an uncaught reference error.
console.log(b);
var b = 20;

console.log(c);
let c = 10;
//Uncaught ReferenceError: can't access lexical declaration 'c' before initialization

//**** NOTE *******
//The undefined value behaves as false when used in a boolean context. Eg:
var myArr = [];
if(myArr[0] === undefined){
    console.log("The value is undefined");
}
//undefined converts to NAN when used in a numeric context
var num;
console.log(2+num);
//The null value in a variable evaluates to 0 in numeric context
var null_num = null;
console.log(null_num);

//Variable scoping
//Variable declared using var
var a = 20;
if(true){
  var a = 10;
}
console.log(a);

//Variable declared using let & const
let a = 20;
if(true){
  let a = 10;
}
console.log(a);























