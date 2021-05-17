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

//The Object class represents one of JavaScript's data types. It is used to store various keyed collections and more complex entities. Objects can be created using the Object() constructor or as a literal using the bracket notation

/************************ Constructor *************************/
//1: The Object constructor creates an object wrapper for the given value.
//2: If the value is undefined or null, it creates an empty object. Eg
let testObj = new Object();
console.log(testObj);
//Object {}

let testObj = new Object('hello');
console.log(testObj);
/* String
​0: "h"
​1: "e"
​2: "l"
​3: "l"
​4: "o" */

/*********************** Object.assign() **********************/
//The Object.assign() method copies all enumerable own properties from one or more source objects to a target object. It returns the target object
 let target = {a:1,b:2,c:{d:3}};
 let source = {a:2,b:21,c:{d:33}};
 let source1 = {a:2,b:21,c:{d:34}};
 Object.assign(target,source,source1);
 console.log(target)

//Properties in the target object are overwritten by properties in the sources if they have the same key. Later sources' properties overwrite earlier ones.Eg the source1 property overwrites source properties.
//The assign method only copies enumerable properties and own properties from a source object to a target object.
//If the source value is a reference to an object, it only copies the reference value. For Eg:
source = {a:1,b:{c:2,d:3}}
target = {a:2}
Object.assign(target,source);
source.a = 2;
console.log(target)
console.log(source)
//Target: Object { a: 1, b: {c:2,d:3} }
//Source: Object { a: 2, b: {c:2,d:3} }

//Properties on the prototype chain and non-enumerable properties cannot be copied
const obj = Object.create({ foo: 1 }, { // foo is on obj's prototype chain.
  bar: {
    value: 2  // bar is a non-enumerable property.
  },
  baz: {
    value: 3,
    enumerable: true  // baz is an own enumerable property.
  }
});

const copy = Object.assign({}, obj);
console.log(copy); // { baz: 3 }

/********************** Object.create() ***************************/
//The Object.create() method creates a new object, using an existing object as the prototype of the newly created object
const person = {
  printIntro: function(){
    console.log(`My name is ${this.name}. I am a ${this.job}.`)
  }
}

const me = Object.create(person);
me.name = 'Sahil';
me.job = 'Team Leader';

me.printIntro();
//My name is Sahil. I am a Team Leader.

/*********************** Object.defineProperty ******************/
//This method allows a precise addition to or modification of a property on an object. Normal property addition through assignment creates properties which show up during property enumeration (for...in loop or Object.keys method), whose values may be changed, and which may be deleted. This method allows these extra details to be changed from their defaults. By default, values added using Object.defineProperty() are immutable and not enumerable.
let person = {};
Object.defineProperty(person,'name',{
  enumerable: false,
  configurable: false,
  writable: false,
  value:'Sahil'
});

person.name = 'Sameer';
console.log(person);
//Object{name:"Sahil"}

//Modifying a property. Writable,Enumerable and Configurable are false by default.
//1: When an attribute is writable, the value can be reassigned.
let person = {};
Object.defineProperty(person,'age',{
  writable:true,
  value:12
})
person.age = 'Sahil';
console.log(person);
//Object{age:"Sahil"}

//2:When it is enumerable, the property can be picked by the target object using Object.assign or by the spread operator.
let person = {};
Object.defineProperty(person,'age',{
  writable:true,
  enumerable:false,
  value:12
})
person.age = 'Sahil';
console.log(person);

let person2 = Object.assign({},person);
console.log(person2);
//{} - Since person object has enumerable property set to false for age property, the value cannot be copied to person2 object.

//3: The configurable attribute controls at the same time whether the property can be deleted from the object and whether its attributes (other than value and writable) can be changed.
var o = {};
Object.defineProperty(o, 'a', {
  get() { return 1; },
  configurable: false
});
delete o.a
//false -- returns false because the object property is not configurable and hence cannot be deleted.

/******************  Object.properties ******************/ 
// Lets you define more than one property on an object. It is similar to Object.property, but helps define more properties.

let persons = {};
Object.defineProperties(persons,{
  'name':{
    value: 'Sahil',
    writable: true
  },
  'age':{
    value: 29,
    writable: true
  }
})

/************* Object.entries() ****************/
//This method returns an array of a given object's enumerable [key,value] pairs.

const person_details = {
  name: 'Sahil',
  age: 28
}
//Iterating the object.enteries
for(const[key,value] of Object.entries(person_details)){
  console.log(`My ${key} is ${value}`);
}
console.log(Object.entries(person_details));
//Array [ (2) […], (2) […] ]
​//0: Array [ "name", "Sahil" ]
//1: Array [ "age", 28 ]

/********************** Object.fromEntries() **************************/
//This method transforms a list of key-value pair into an object
const enteries = new Map([
  ['name','Sahil'],
  ['age',29]
])

const newPerson = Object.fromEntries(enteries)
console.log(newPerson)
//Object { name: "Sahil", age: 29 }


/* *************** Object.getOwnPropertyDescriptors() *************** */

//method returns all own property descriptors of a given object.

const obj = {
  name: 42
}

const descriptors = Object.getOwnPropertyDescriptors(obj);
console.log(descriptors.name.writable);
console.log(descriptors.name.value);

//************ Object.isExtensible() ***************/
//This method determines whether an object is extensible or not. If the object has been sealed,frozen or made non extensible then the value returned is false

const testObj = {
  name:"Sahil",
  age:29
}

const frTestObj = Object.freeze(testObj);
console.log(Object.isExtensible(frTestObj));
//false

//To freeze the current object, we can use Object.preventExtensions method

Object.preventExtensions(testObj);
console.log(Object.isExtensible(testObj))

// Sealed objects are by definition non-extensible.
var sealed = Object.seal(testObj);
Object.isExtensible(sealed); // === false

/* Object.keys() */
//The Object.keys() method returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.
const person = {
  name: "Sahil",
  age: 29,
  city: "Bangalore"
}
console.log(Object.keys(person));
//Array(3) [ "name", "age", "city" ]

/* Object.values() */
//The Object.values() method returns an array of a given object's own enumerable values, iterated in the same order that a normal loop would.
const person = {
  name: "Sahil",
  age: 29,
  city: "Bangalore"
}
console.log(Object.keys(values));
//Array(3) [ "Sahil", 29, "Bangalore" ]

/////////////////////// Instance methods ////////////////////////////

/* Object.prototype.hasOwnProperty() */
//method returns a boolean indicating whether the object has the specified property as its own property. Method does not check for a property in the object's prototype chain.

const person = {
  name: "Sahil",
  age: 29,
  city: "Bangalore"
}

console.log(person.hasOwnProperty('name')) //true
console.log(person.hasOwnProperty('name1')) //false

////////////////////////////////// STRINGS //////////////////////////////////////

//The String object is used to represent and manipulate a sequence of characters.

//1: Comparing Strings
//String comparision in Javascript is done using the <,>,==,=== operators. 
let name = "12";
let name1 = 12;
if(name == name1){
  console.log(true)
}
else{
  console.log(false)
}

//true

//The == operator performs a type conversion and hence the output turns out to be true. Whereas the === operator does a strict comparision which gives a false result for the same. Hence it is a better practice to use the === operator.

//To compare the strings devoid of the case, use === operator with uppercase conversion.

const strCompFunc = (str1,str2) => {
  return str1.toUpperCase() === str2.toUpperCase()
}

const welcomeMsg1 = "Hello";
const welcomeMsg2 = "hElLo"
strCompFunc(welcomeMsg1,welcomeMsg2);

//2: String length
//This instance method is used to calculate the length of the string which is calculated in UTF-16 code units.

let x = "Mozilla";
console.log(`The length of the string ${x} is ${x.length}`)
//The length of the string Mozilla is 7

//Since the length property is a read only, there is no considerable effect if the length of the string is altered. The output does not change. Eg:
let x = "Mozilla";
console.log(`The length of the string ${x} is ${x.length}`)

x.length = 4;
console.log(`The length of the string ${x} is ${x.length}`)
//The length of the string Mozilla is 7

/************** String.concat() ********************/
//The concat() method concatenates the string arguments to the calling string and returns a new string.

//NOTE: It is strongly recommended that the assignment operators (+, +=) are used instead of the concat() method.
const str1 = 'Hello';
const str2 = 'Have a nice day';

console.log(str1.concat('. ', str2));
// expected output: "Hello. Have a nice day"

/************** String.includes() ********************/
//The includes() method performs a case-sensitive search to determine whether one string may be found within another string, returning true or false as appropriate.

const str = 'To be, or not to be, that is the question.'
str.includes("To bE")
//false

/************** String.endsWith() **************/
//The endsWith() method determines whether a string ends with the characters of a specified string, returning true or false.

const str = 'To be, or not to be, that is the question.'
str.endsWith("question.");
//true

//When the second argument, 'length' is used, then the string is cut short to that length and is checked for endsWith a certain string. Eg.
const str = 'To be, or not to be,that is the question';
str.endsWith("be",19)
//true - though the string length is 42, the instance method cuts short the string to the length mentioned in the second argument and checks for endsWith. NOTE. This only temporarily cuts short the string for comparision. The original string length does not change.

/************************** String.indexOf *******************/
//The indexOf() method returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found. This method is case sensitive.

const para = "The quick brown fox jumps over the lazy dog, if the dog barked, was it really lazy?";

const searchTerm =  "dog";
const indexOfTerm = para.indexOf(searchTerm);

console.log(`The search term '${searchTerm}' was found at the location '${indexOfTerm}'`);

console.log(`The second location of the search term '${searchTerm}' is '${para.indexOf(searchTerm,(indexOfTerm+1))}'`)
//The search term 'dog' was found at the location '40'
//The second location of the search term 'dog' is '52'

//Similarly String.lastIndexOf(searchTerm,fromIndex) returns the last occurance of a search term.
//The second location of the search term 'dog' is '52'

/* ********************* String.match() ********************** */
//The match() method retrieves the result of matching a string against a regular expression.

const text = "Hello I am Sahil1";
const regExp = /([A-Z][a-z])\w/g

const result = text.match(regExp);
console.log(result);
//Array["Hello","Sahil1"]


/* ************************ String.repeat ********************** */
//The repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.

const text = "Hello I am Sahil1. ";
console.log(`Hi let me introduce myself. ${text.repeat(5)}`)
//Hi let me introduce myself. Hello I am Sahil1. Hello I am Sahil1. Hello I am Sahil1. Hello I am Sahil1. Hello I am Sahil1.


esicQzoneDt.Select("Convert(EmployeeID,System.String)='"+empID.ToString+"'").Length

/* ******************* String.replace & String.replaceAll ********************** */
const text = "Hello from the dog. This dog is my pet. "
const regExp = /Dog/i

console.log(text.replace(regExp,"cat"));
//Hello from the cat. This dog is my pet.

const text = "Hello from the dog. This dog is my pet. "
const regExp = /Dog/gi

console.log(text.replaceAll(regExp,"cat"));
//Hello from the cat. This cat is my pet.

/* ALSO - Adding a global replace "/g" in the regex for replace, replaces all the matched strings*/

const text = "Hello from the dog. This dog is my pet. "
const regExp = /Dog/gi

console.log(text.replace(regExp,"cat"));
//Hello from the cat. This cat is my pet.

/* ************** String.slice **************** */
//The slice() method extracts a section of a string and returns it as a new string, without modifying the original string.

/*The slice method accepts two parameters.
1) startIndex: The zero-based index at which to begin extraction. 
2) endIndex: The zero-based index at which to stop extraction. The character at this index will not be included. If endIndex is omitted or undefined, or greater than str.length, slice() extracts to the end of the string
*/

let str1 = 'The morning is upon us.';
let str2 = str1.slice(1, 8);
console.log(str2)  // OUTPUT: he morn

/* **************** String.prototype.split() *********************
The split() method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.  The division is done by searching for a pattern; where the pattern is provided as the first parameter in the method's call. 

Sting.split(separator,limit)
//Separator(optional): The pattern describing where each split should occur.  The separator can be a simple string or it can be a regular expression.
//Limit: splits the string at each occurrence of the specified separator, but stops when limit entries have been placed in the array. Any leftover text is not included in the array at all.
*/
//1: A single character separator is the easiest and is used to split a delimited(separated by a character.Eg:",",":","?") string. Eg:
const str = "Hello this is a dog who is a part of a house";
const result = str.split(" ");
console.log(result);
//Array(12) [ "Hello", "this", "is", "a", "dog", "who", "is", "a", "part", "of", … ]

//2: By multiple characters in which the whole character sequence should be found.
const str = "Hello this is a dog who is a part of a house";
const result = str.split("is",3);
console.log(result)
//Array(3) [ "Hello th", " ", " a dog who " ]

//3: By using regex as the separator, if the string contains the regex pattern based separators, the string is split based on the pattern.
const str = "He llo this is a dog who is a part of this house";
const regexp = /\s/g
const result = str.split(regexp);
console.log(result)
//Array(13) [ "He", "llo", "this", "is", "a", "dog", "who", "is", "a", "part", … ]


/* ****************************************************** MAP *********************************************************** */

//The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value may be used as a key or value
//A Map object iterates its elements in insertion order — a for...of loop returns an array of [key, value] for each iteration

//Key Equality

//Key equality is based on the sameValueZero(+0 and -0 are the same) alog. In the current ECMAScript specification, -0 and +0 are considered equal, although this was not so in earlier drafts.
//NaN is considered the same as NaN (even though NaN !== NaN) and all other values are considered equal according to the semantics of the === operator.


//Objects vs. Maps

//Object is similar to Map—both let you set keys to values, retrieve those values, delete keys, and detect whether something is stored at a key. For this reason (and because there were no built-in alternatives), Object has been used as Map historically.
//Difference between Map and Objects
/* 
1: Accidental Keys
MAP - A Map does not contain any keys by default. It only contains what is explicitly put into it.
Objects - An Object has a prototype, so it contains default keys that could collide with your own keys if you're not careful.

2: Key types
MAP: A Map's keys can be any value (including functions, objects, or any primitive).
Object: Must be either a String or a Symbol

3: Key Order
MAP: The keys in Map are ordered in a simple, straightforward way: A Map object iterates entries, keys, and values in the order of entry insertion.
Object: Although the keys of an ordinary Object are ordered now, this was not always the case, and the order is complex. As a result, it's best not to rely on property order.

4: Size
MAP: The number of items in a Map is easily retrieved from its size property.
Object: Object.keys(<obj>).length - This
Object.keys or Object.getOwnPropertyNames does not work for symbolic properties. To return them you need to use Object.getOwnPropertySymbols.

var person = {
  [Symbol('name')]: 'John Doe',
  [Symbol('age')]: 33,
  "occupation": "Programmer"
};

const propOwn = Object.getOwnPropertyNames(person);
console.log(propOwn.length); // 1

let propSymb = Object.getOwnPropertySymbols(person);
console.log(propSymb.length); // 2

//NOTE: Hence the size of the object can be incorrect if there are a mix of symbols and strings.The below code can be used as a workaround

const objTotLength = Object.getOwnPropertyNames(person).length+ Object.getOwnPropertySymbols(person).length;

5: Iteration: 
MAP: Is an iterable nad hence can be directly iterated. It is based on the iterable protocol which allows JavaScript objects to define or customize their iteration behavior, such as what values are looped over in a for...of construct. In order to be iterable, an object must implement the @@iterator method, which means that it must have a property with @@iterator key.
Object: Object does not implement an iteration protocol, and so objects are not directly iterable using the JavaScript for...of statement (by default).

NOTE: An object can implement the iteration protocol, or you can get an iterable for an object using Object.keys or Object.entries.
The for...in statement allows you to iterate over the enumerable properties of an object.

6: Performance
MAP: Performs better in scenarios involving frequent additions and removals of key-value pairs.
Object: Not optimized for frequent additions and removals of key-value pairs.

7: Serialisation and parsing
MAP: Does not have native support for both serialisation and parsing
Object: Has native support for both serialisation and parsing
*/

//Key value in map can be set like an object as seen below.
let person = new Map();
person['name'] = 'Sahil';
person['age'] = 29;

console.log(person);
​/*
Map(0)
age: 29
name: "Sahil"
size: 0
<entries>
<prototype>: Map.prototype { … }
*/
//But that way of setting a property does not interact with the Map data structure. It uses the feature of the generic object. The value of 'bla' is not stored in the Map for queries. Other operations on the data fail: Eg:
wrongMap.has('bla')    // false
wrongMap.delete('bla') // false
console.log(wrongMap)  // Map { bla: 'blaa', bla2: 'blaaa2' }

//The correct way to use maps to store data is using the set(key,value) method
let person = new Map();
person.set('name','Sahil');
person.set('name','Sameer');
//Map { name → "Sameer" } - map takes the latest value, when trying to set another value on the same key
person.set('age',29);
person.set('address',{'home':'F4','city':'bangalore'});
console.log(person);
/* 
Map(3)
size: 2
<entries>
0: name → "Sahil"
1: address → Object { home: "F4", city: "bangalore" }
*/
person.get('age')
person.delete('age')
console.log(person);

/***************** MAP.size ******************/
//The size accessor property returns the number of elements in a Map object
person.size;
//2

/***************** MAP.clear() ******************/
//The clear() method removes all elements from a Map object.
person.clear();
//0

/***************** MAP.delete() ******************/
//The delete() method removes the specified element from a Map object by key.
//returns true if an element in the Map object existed and has been removed, or false if the element does not exist.
person.delete('age');
//true

/******************** MAP.get() ***********************/
//The get() method returns a specified element from a Map object. If the value that is associated to the provided key is an object, then you will get a reference to that object and any change made to that object will effectively modify it inside the Map object.
//returns the element associated with the specified key, or undefined if the key can't be found in the Map object.
person.get('age');
//29

/* ************** Map.has()******************* */
//The has() method returns a boolean indicating whether an element with the specified key exists or not.
//true if it exists, otherwise false
person.has('age');
//true

/* ************** Map.set()******************* */
//The set() method adds or updates an element with a specified key and a value to a Map object.
//returns the MAP object
person.set('name','Sahil');
//true

////////// Iteration methods

/* ************** Map.keys()******************* */
//The keys() method returns a new Iterator object that contains the keys for each element in the Map object in insertion order.
//returns a new Mao iterator object
const persIter = person.keys();
for(key of perIter){
  console.log(key);
}
//name
//age
//address

//OR 

console.log(persIter.next().value);
//name
console.log(persIter.next().value);
//age
console.log(persIter.next().value);
//address

/* ************** Map.values()******************* */
//The values() method returns a new Iterator object that contains the values for each element in the Map object in insertion order.
//returns a new Mao iterator object

const persIter = person.values();
for(value of perIter){
  console.log(value);
}
//Sahil
//29
//Object { home: "F4", city: "bangalore" }

//OR 

console.log(persIter.next().value);
//Sahil
console.log(persIter.next().value);
//29
console.log(persIter.next().value);
//Object { home: "F4", city: "bangalore" }

/* ************** Map.entries()******************* */
//The entries() method returns a new Iterator object that contains the [key, value] pairs for each element in the Map object in insertion order. In this particular case, this iterator object is also an iterable, so the for-of loop can be used
//returns a new Mao iterator object
const perIter = person.entries();
for([key,value] of perIter){
  console.log(key);
  console.log(value);
}
//name
//Sahil
//age
//29
//address
//Object { home: "F4", city: "bangalore" }

/* ************** Map.forEach()******************* */
//The forEach() method executes a provided function once per each key/value pair in the Map object, in insertion order. It is not invoked for keys which have been deleted. However, it is executed for values which are present but have the value undefined.
/*
callback is invoked with three arguments:

the entry's value
the entry's key
the Map object being traversed
*/

//If a thisArg parameter is provided to forEach, it will be passed to callback when invoked, for use as its this value.

person.forEach((value,key)=>{
  console.log(`Value for ${key} is ${value}`)
});
//Value for name is Sahil
//Value for age is 29
//Value for address is [object Object]

//************** Relation with Array objects

//A 2d arr can be transform to a Map since the construct of a 2d array is similar to a map with the first element in the inner array being the key and second being a value.
let arr2d = [['name','Sahil'],['age',29]]
let arrToMap = new Map(arr2d);

arrToMap.get('age');
//29

//Array.from can be used to transform a map back to a 2d array
let mapToArr = arrToMap.from(arrToMap);

//to convert the outputs of keys() or values() to array, we can do the following
let mapKeysArr = Array.from(arrToMap.keys());
console.log(mapKeysArr);
//["name","age"]




/* **************************************************** SET ********************************************************** */
//1: The Set object lets you store unique values of any type, whether primitive values or object references
//2: Set objects are collections of values. You can iterate through the elements of a set in insertion order. A value in the Set may only occur once; it is unique in the Set's collection.
//3: Because each value in the Set has to be unique, the value equality will be checked. In an earlier version of ECMAScript specification, this was not based on the same algorithm as the one used in the === operator. Specifically, for Sets, +0 (which is strictly equal to -0) and -0 were different values. However, this was changed in the ECMAScript 2015 specification. See "Key equality for -0 and 0" in the browser compatibility table for details.
//4: NaN and undefined can also be stored in a Set. All NaN values are equated (i.e. NaN is considered the same as NaN, even though NaN !== NaN).

/******* Set constructor *******/
const set1 = new Set([1,2,3,4,5]);

/******* Set size *******/
//The size accessor property returns the number of (unique) elements in a Set object.
const setSize = set1.size;
//5

/******* Set add *******/
//The add() method appends a new element with a specified value to the end of a Set object.
set1.add(6);

/******* Set clear *******/
//The clear() method removes all elements from a Set object.
set1.clear();
set1.size;
//0

/******* Set delete *******/
//The delete() method removes a specified value from a Set object, if it is in the set.
set1.delete(2);
console.log(set1);

/* Set.has */
//The has() method returns a boolean indicating whether an element with the specified value exists in a Set object or not.
set1.has(6);
//false

/* Set.values() */
//The values() method returns a new iterator object that contains the values for each element in the Set object in insertion order.
const set1 = new Set([1,2,3,4,5]);
const valInSet = set1.values()
console.log(valInSet.next().value)
//1
console.log(valInSet.next().value);
//2

/* Set.prototype.entries() */
//The entries() method returns a new Iterator object that contains an array of [value, value] for each element in the Set object, in insertion order. For Set objects there is no key like in Map objects. However, to keep the API similar to the Map object, each entry has the same value for its key and value here, so that an array [value, value] is returned.

const valInSet = set1.entries();
for(let[value,value1] of valInSet){
  console.log(value);
}
/*
1
2
3
4
5
*/
