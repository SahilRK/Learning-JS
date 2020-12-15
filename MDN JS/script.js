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

//****************************** Global Variables ************************************/
//Global variables are in fact properties of the global object. In web pages, the global object is window, so you can set and access global variables using the window.variable syntax.

//***************************** Constants *****************************************/
const PI = 3.1415;
/*
1: Constants can be declared with the const keyword. 
2: Once declared, their value cannot be changed.
3: They must be initialized, otherwise they throw errors stating missing = in declaration.
4: They cannot be redeclared as a function or a variable with the same name( this can be done using var and let ).
*/

const myobj = {'Name':'Sahil'};
myobj.Name = 'Ankitha';
//However the properties assigned to an object as seen above are not protected and hence can be altered. The contents in an array also can be altered just like objects.


//********************** Variable hoisting *************************

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



//******************** Variable scoping **************************

//Variable declared using var
var a = 20;
if(true){
  var a = 10;
}
console.log(a);
//Output is 10

//Variable declared using let & const
let a = 20;
if(true){
  let a = 10;
}
console.log(a);
//Output is 20

//In the above example we can notice the difference between declaring variables using let and var. Since let is a block scoped variable, the variable is redeclared inside the block as a new variable and the value assigned to it (value is 10) remains only as long as it is in the scope. It then returns back to the original value(20) as soon as it exits the block. Since var is function scoped, it is not affected by block statements and remains to be a global variable as long as it is outside a function block.

var a = 20;
function one(){
  var a = 10;
}
one();
console.log(a);
//20

//In the above example, both let and var behave the same, since the variable "a" with the value 10 is local only to the function block.
//** NOTE: Function blocks affect both var and let since the variable declared inside them is local and only remains as long as it is inside the function.

//******************************* Function hoisting *************************************/
//*** Function declaration ***
bar();
function bar(){
  console.log("Hi this is bar");
}
//hello

//*** Function expression ***
bar();
var bar = function(){
  console.log("hello");
}
//TypeError: bar is not a function

//In the above examples, function hoisting is only applicable on function declaration, i.e, the function can be called before it is declared. But the same is not applicable for function expression which throws an error stating that the function being called does not exist.





