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

//*** ACCESS ***//
//Accessing the array
let first_fruit = fruits[0];
let last_fruit = fruits[fruits.length - 1];

//*** PUSH ***//
//Adding an item to the array
let fruits = new Array('Apple','Orange','Banana');
fruits.push('Papaya');
console.log(fruits);


//*** POP ***//
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

/** FOR EACH **/
//The for each method executes the callback function on each element
//forEach() executes the callback function once for each array element; unlike map() or reduce() it always returns the value undefined and is not chainable. The typical use case is to execute side effects at the end of a chain.
//forEach() does not mutate the array on which it is called

const num_array = [1,2,null,4,5];
let mod_num_array = [];
num_array.forEach(e=>{
  console.log(e*2)
  mod_num_array.push(e*2);
})
console.log(mod_num_array);

//** NOTE: There is no way to stop or break a forEach unless the loop throws an exception
//** NOTE: forEach does not wait for promises. Kindly make sure you are aware of the implications while using promises(or async functions) as forEach callback.
//It skips any element that is uninitialized. Eg:
const num_arr = [1,2,,5,,7];
let numCallbackRuns = 0
num_arr.forEach(e=>{
    console.log(e)
    ++numCallbackRuns;
})
console.log(numCallbackRuns)
//As seen in the console log above, the returned value is 4, which indicates that the blank or uninitialized values were skipped.
//Using a forEach loop, the array can be modified as well
let num_arr = [1,3,5,8,12,9,15];
num_arr.forEach((num,idx)=>{
  if(num%2 == 0){
    num_arr.splice(idx,1);
  }
});
console.log(num_arr);
//Array(6) [ 1, 3, 5, 12, 9, 15 ] - As seen in the following array result, when the element reaches 8, it removes it from the array, and shifts the whole array to one position up(to the lower index value). Hence the element after 8(which is 12) gets skipped since it moves to the position of 8 which has already been iterated.

//Flattening an array using for each
function flattenArr(arr){
  let result = [];
  arr.forEach(ele=>{
    if(Array.isArray(ele)){
      result.push(...flattenArr(i))
    }
    else{
      result.push(ele);
    }
  });
  return result
}

flattenArr(1,2,3,[4,5,[6,7,[8,9],10],11],12);

/** INCLUDES **/
//If the fromIndex parameter(arr.includes(valueToFind,fromIndex)) is greater than or equal to the array length, then the array is not searched.
let arr = ['a', 'b', 'c']

arr.includes('c', 3)    // false
arr.includes('c', 100)  // false

/* MAP */
/* map calls a provided callback function once for each element in an array, in order, and constructs a new array from the results. callback is invoked only for indexes of the array which have assigned values (including undefined).

It is not called for missing elements of the array; that is:
indexes that have never been set;
indexes which have been deleted. */
const numArr = [1,2,3,4,5];
const numArrProd = numArr.map(e=>e*2);

//Since map() returns back an array, using it when the returned array is not required will be an anti pattern.

/* REDUCE */
//The reduce method executes a reducer function that is provided for each element and returns a single output value
const numArr = [1,2,3,4,5];
const reducer = (accu,currVal) => accu+currVal;

console.log(numArr.reduce(reducer,5))

//the first time that the callback is called, if the initial value is present, for eg in the array above, then the accumulator takes the value of the initial value and the currentValue is equal to the first value in the array. If the initalValue is not mentioned then the accumulator takes the first value in the array and the currentValue takes the second value in the array.

//NOTE: If the array is empty and no initialValue is provided, then a TypeError is thrown. It is always safer to provide an initial value, since even if the array turns out to be empty, the initialValue is returned back and the callback is not called.

/* SLICE */
//The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

const animals = ['lion','tiger','dog','cat','elephant'];
console.log(animals.slice(2,4));
//Array [ "dog", "cat" ]

/********************************************* OBJECTS ****************************************************/

//The Object class represents one of JavaScript's data types. It is used to store various keyed collections and more complex entities. 





