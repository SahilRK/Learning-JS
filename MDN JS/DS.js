/**************************************** Important Standard Objects *********************************************/

/**************************************** Arrays *********************************************/
//The JavaScript Array class is a global object that is used in the construction of arrays; which are high-level, list-like objects
//Neither the length of a JavaScript array nor the types of its elements are fixed
//Setting or accessing via non-integers using bracket notation (or dot notation) will not set or retrieve an element from the array list itself, but will set or access a variable associated with that array's object property collection.Eg:
let arr = [1,2,3]
arr["hi"] = "hello"
//OR arr.hi = "hello"
console.log(arr)

//Output
/*
0: 1
1: 2
2: 3
hi: "hello"
length: 3
<prototype>: Array []
*/

/******** Create an Array *******/
//Using the array constructor
let fruits = new Array('Orange','Apple','Banana');
//OR
//As a literal
let fruits = ['Orange','Apple','Banana'];
console.log(fruits);

//Accessing the array
let first_fruit = fruits[0];
let last_fruit = fruits[fruits.length - 1];

//Adding an item to the array
let fruits = new Array('Apple','Orange','Banana');
fruits.push('Papaya');
console.log(fruits);

//Removing an element from the end of the array. NOTE: The pop option does not accept any inputs.
let fruits = new Array('Apple','Orange','Banana');
fruits.pop();
console.log(fruits);

//Removing an element from the start of an array. NOTE: The shift option does not accept any inputs.
let fruits = new Array('Apple','Orange','Banana');
fruits.shift();
console.log(fruits);

//Add an item to the start of an array
let fruits = new Array('Apple','Orange','Banana');
fruits.unshift('Papaya');
console.log(fruits);

let fruits = new Array('Apple','Orange','Banana');
fruits[1] = 'Papaya';
console.log(fruits);
//NOTE: Performing the following replaces an item if there is already an item in the position. Otherwise it adds an item in that position.

//Find the index of an item
let fruits = new Array('Apple','Orange','Banana');
let fruit_idx = fruits.indexOf("Orange");
console.log(`Index of Orange is ${fruit_idx}`);

//Return array element at index location - EXPERIMENTAL
let fruits = new Array('Apple','Orange','Banana');
let fruit_idx = 2;
console.log(`Element at ${fruit_idx} is : ${fruits.at(fruit_idx)}`);

//Array elements are object properties, but trying to access an element 0 an array as follows throws a syntax error because the property name is not valid.
console.log(fruits.0) //a syntax error
//There is nothing special about this. Javascript properties that begin with a digit must be accessed using a bracket notation.

//To increase the length of the array
fruits.length = 20;

//Creating an array from an array like or iteratable object using Array.from() static method
    console.log(Array.from('foo'));
    //Array(3) ["f","o","o"]

    console.log(Array.from([1,2,3],x=> x+1));
    //Array(3) [2,3,4]

//Concatenate an array is a method to join two arrays
const arr1 = [1,2,3];
const arr2 = [5,6,7];
const arr_concat = arr1.concat(arr2);
console.log(arr_concat);
//[1,2,3,5,6,7]

//Every is an array instance method that tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value
const arr = [2,5,8,67,22];
console.log(arr.every(function(e){
  return e > 1
}))
//true
//The same output using arrow functions would be written as so
console.log(arr.every(e => e>1));

//Filter the array and get a new array out of the filtered values
const words = ['spray', 'limit', 'elite', 'exuberant', 'strike', 'present'];
const filt_words = words.filter(word => word.startsWith('s'));
console.log(filt_words);
//Array [ "spray", "strike" ]

let arr = [
  { id: 15 },
  { id: -1 },
  { id: 0 },
  { id: 3 },
  { id: 12.2 },
  { },
  { id: null },
  { id: NaN },
  { id: 'undefined' }
]

let invalid_enteries = 0;

function filterNum(item){
  if(Number.isFinite(item.id) && item.id !== 0){
    return true;
  }
  invalid_enteries++;
  return false;
}

const filtArr = arr.filter(filterNum);

console.log(filtArr);

//Find return the first matching element in the array and exits
let fruits = [
  {name: 'banana'},
  {name: 'apple'},
  {name: 'papaya'}
]

console.log(fruits.find(fruit => fruit.name.includes('ap')));
//Object { name: "apple" }








