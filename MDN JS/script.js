//Variables
//Declarations
//JavaScript has three kinds of variable declarations.

/* 
---- var ----
Declares a variable, optionally initializing it to a value. The value is undefined
---- let ----
Declares a block-scoped, local variable, optionally initializing it to a value. The value is undefined
---- const ----
Declares a block-scoped, read-only named constant. A value has to be set otherwise an error is thrown.
*/

//Variables can be declared by unpacking Object Literals. 
let new_obj = {
    foo: 'Hello',
    bar: 'Hi'
}

let {bar} = new_obj;
console.log(bar);

//****************************** Global Variables ************************************/
/*
1: Global variables are in fact properties of the global object. 
2: In web pages, the global object is window, so you can set and access global variables using the window.<variable name> syntax. 
*/

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

/************************************************ HOISTING *******************************************************/

/**NOTE: Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. 
Inevitably, this means that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.
link to an article on hoisting https://www.digitalocean.com/community/tutorials/understanding-hoisting-in-javascript
*/

/* NOTE:
It’s important to keep a few things in mind when declaring JavaScript functions and variables.

1: Variable assignment takes precedence over function declaration
2: Function declarations take precedence over variable declarations
*/

/* NOTE: Values in variables are stored in their individual memory registers and are called by value. So even if one variable is assigned to another Eg: var a = 5; var b = a; the variable references to its location in the memory. Hence changing the value of one variable (eg a = 6) does not affect var b. */

//********************** Variable hoisting *************************/

//Though var and let can be declared without a value assignment, they differ when it comes to variable hoisting.
//Because variable declarations (and declarations in general) are processed before any code is executed, declaring a variable anywhere in the code is equivalent to declaring it at the top. This also means that a variable can appear to be used before it's declared. This behavior is called "hoisting", as it appears that the variable declaration is moved to the top of the function or global code
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
//NAN

//The null value in a variable evaluates to 0 in numeric context
var null_num = null;
console.log(null_num);
//0



//******************** Variable scoping **************************

/****** There are two ways in which scope works. *************/
//1: If a variable is redefined using the built in keyword let or var inside the block(if condition), then the variable declared using var changes to the new value, since it is not block scoped. But the variable declared using let changes only as long as the scope is inside the block and the value returns back to original as soon as the program exits the scope. This is because let creates a new variable inside the if block

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

//2: But if the variable is only reassigned, then, the output is the same in both cases since the variable is being reassigned
//Variable declared using var
var a = 20;
if(true){
  a = 10;
}
console.log(a);
//Output is 10

//Variable declared using let & const
let a = 20;
if(true){
  a = 10;
}
console.log(a);
//Output is 10

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

/********************************** VAR vs LET *****************************
1) var is hoisted( can be declared after it has been initialised ), where as let is not hoisted
2) Using let makes code redability and maintenance easier since it forces you to declare the variable and then use it.
3) Variables declared with let cannot be declared again, which makes more sense since it avoids confusion of multiple declarations.
4) Let fixes all such issues of VAR which were confusing to readers. Hence use let in place of var.
*/


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

/*********************** Data Structures and types ************************/
/*
Primitive data types in Javascript are data that is not an object and has no methods. 

There are 7 primitive data types

1: Boolean. true and false.
2: null. A special keyword denoting a null value. (Because JavaScript is case-sensitive, null is not the same as Null, NULL, or any other variant.)
3: undefined. A top-level property whose value is not defined.
4: Number. An integer or floating point number. For example: 42 or 3.14159.
5: BigInt. An integer with arbitrary precision. For example: 9007199254740992n.
6: String. A sequence of characters that represent a text value. For example: "Howdy"
7: Symbol (new in ECMAScript 2015). A data type whose instances are unique and immutable.

All primitives are immutable which means that they cannot be altered. This should not be confused with variables assigned primitive values.
*/
var a = "hello";
a.toUpperCase();
console.log(a);
//hello

/* As observed in the example, the value returned is the original value despite having called a method on the variable. This is because unless primitives are stored, their values dont change */

/************************************* Primitive Wrapper Objects *****************************************/ 

/********** new keyword ************/
//new keyword is used to create Objects.

/************************************* String Objects ***********************************************/
/* 
1: These are used to represent and manipulate a sequence of characters. 
2: Strings can be created as primitives or using string contructor.
*/
const str1 = "hello";
const str2 = new String("str obj")
console.log(typeof str1);
console.log(typeof str2);
//string
//object

//Strings can be specified using single, double quotes or backtick character(this can be used in template literals for string interpolation Eg: "Hi ${name} says hi").

//------------ Accessing Strings -------------
//They can be accessed in two ways.
//1: charAt() method.
str1.charAt(1);
//2: By treating it as an array object
str1[1];

//------------ Comparing strings ------------
/*
1: Strings can be compared using the >, <, ==, === operators
2: The difference between == and === is that == does a type conversion(coersion) where as === does a strict check without performing type conversion
*/

//** NOTE: String primitives and String Objects
/*
1: Javascript automatically converts primitive strings to objects, so that it is possible to pass string methods to it. 
2: While evaluating strings, Javascript treats primitives and objects differently. Primitives are evaluated as source code where as string objects are returned as objects.
Eg:
*/
let s1 = "2+2";
let s2 = new String("2+2");
console.log(eval(s1));
console.log(eval(s2));

//To convert a String object to a primitive, we can use the valueOf() method
console.log(eval(s2.valueOf()));

//------------- String Object ---------------

/*
1: The String constructor is used to create a new String object. 
2: When called instead as a function, it performs type conversion to a primitive string, which is usually more useful.

new String(thing) -- This syntax creates a string object
String(thing) -- This is used for type conversion to a primitive string
*/

//***NOTE: String(value) syntax can be used as a more reliable syntax for type conversion than the toString() method.
//For reference on Strings https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

/********************************** Number Objects ***********************************/
/* 
1: Number is a primitive wrapper object used to represent and manipulate numbers like 37 or -9.25.
2: The Number constructor contains constants and methods for working with numbers. 
3: Values of other types can be converted to numbers using the Number() function.
4: All numbers in Javascript are double precision 64bit binary values (double)
5: A number literal like 37 in JavaScript code is a floating-point value, not an integer. There is no separate integer type in common everyday use.
6: Number(value) can be used for type conversion of a different datatype like string into a primitive number type. If it cannot be converted, then NaN(Not a number is returned).
*/
var num1 = "123";
console.log(Number(num1));
//"123"

/********************************* Big Int Object ******************************************/
//BigInt is a built-in object that provides a way to represent whole numbers larger than (2(power 53) - 1) = 9007199254740991, which is the largest number JavaScript can reliably represent with the Number primitive and represented by the Number.MAX_SAFE_INTEGER constant. BigInt can be used for arbitrarily large integers.
//A BigInt is created by appending n to the end of an integer literal — 10n — or by calling the function BigInt().
const numb = BigInt(20);
console.log(numb);

//BigInt cannot be used with methods in the Math object and cannot be mixed with numbers in operations and must be coerced to the same type. Eg:
const numBig = BigInt(20);
const numInt = 20;
const sumNum = numBig+numInt;
//Uncaught TypeError: can't convert BigInt to number
//** To get rid of this error, the BigInt const has to be coerced into an Integer, but this has to be done carefully for large numbers and the number should not cross 9007199254740991, since this will result in an error.

/******************************* Boolean Object *****************************************/
/*
1: To create a boolean object, the value passed as the first parameter is converted to a boolean value, if necessary. 
2: If the value is omitted or is 0, -0, null, false, NaN, undefined, or the empty string (""), the object has an initial value of false. 
3: All other values, including any object, an empty array ([]), or the string "false", create an object with an initial value of true.Eg:
*/
var boolCheck = new Boolean(false);
if(boolCheck){
  console.log("The value of boolCheck is "+boolCheck);
}
//4: This behaviour does not apply to variables assigned the boolean primitive. Eg
var boolCheck = false;
if(boolCheck){
  console.log("The value of boolCheck is "+boolCheck);
  //This code will not be executed.
}
//Do not use a Boolean object to convert a non-boolean value to a boolean value. To perform this task, instead, use Boolean as a function, or a double NOT operator:
var x = Boolean(expression);     // use this...
var x = !!(expression);          // ...or this
var x = new Boolean(expression); // don't use this!

/***************************************** Symbol data type and Object ******************************************/
//1: In Javascript, symbols are a unique data type which can be created using the function Symbol.
let sym1 = Symbol("sym");
//2: Every symbol created, has a unique value. Eg
let sym1 = Symbol("sym");
let sym2 = Symbol("sym");
console.log(sym1 === sym2);
//3: No two symbols can be equal even if they are assigned in a similar way, since each symbol produces a unique value.
//4: Symbols can hence be used as object properties.
//5: Symbols cannot be implicitly coerced as they dont auto convert
alert(sym1)//TypeError: Cannot covert a Symbol value to String
//6: Converting it explicitly like this works
alert(sym1.toString());//Symbol(sym)
//----------- OR ---------------
alert(sym1.description);
//7: There is a global symbol registry holding all available symbols. The methods that access the registry are Symbol.for() and Symbol.keyFor(); these mediate between the global symbol table (or "registry") and the run-time environment.
//8: The method Symbol.for(tokenString) returns a symbol value from the registry, and Symbol.keyFor(symbolValue) returns a token string from the registry;

//9: Symbols do not support creation of an object wrapper around them (new Symbol()) due to it being an incomplete constructor;

/********************************************************** Literals **************************************************************/
//A literal in javascript is




