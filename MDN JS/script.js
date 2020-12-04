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





















