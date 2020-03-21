var firstName = 'John';
// console.log(firstName);

// var LastName = 'Doe';
var age = 28;

// var fullAge =  true;
// console.log(fullAge);

//Variable mutation and type coersion
age = 'twenty eight';
console.log(firstName+' '+age);

//to get input from the user
var lastName = prompt("What is the last name of the person?");
console.log(firstName+' '+lastName);

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 
*/

var massMark = prompt("Enter Mark's weight in kg's");
var massJohn = prompt("Enter John's weight in kg's");

var heightMark = prompt("Enter Mark's height in meters");
var heightJohn = prompt("Enter John's height in meters");

var bmiMark = massMark / (heightMark^2);
var bmiJohn = massJohn/(heightJohn^2);

console.log("Is Mark's BMI higher than John's?")
