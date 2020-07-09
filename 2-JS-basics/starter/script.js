/*var firstName = 'John';
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
/*
//-------------------------- if else statements -----------------------------------

var massMark = prompt("Enter Mark's weight in kg's");
var massJohn = prompt("Enter John's weight in kg's");

var heightMark = prompt("Enter Mark's height in meters");
var heightJohn = prompt("Enter John's height in meters");

var bmiMark = massMark/(heightMark*heightMark);
var bmiJohn = massJohn/(heightJohn*heightJohn);

// var higherBmiMark = bmiMark > bmiJohn;
// console.log("Is Mark's BMI higher than John's? "+higherBmiMark);
// console.log("BMI of Mark : "+bmiMark+" BMI of John : "+bmiJohn);

if(bmiMark > bmiJohn){
    console.log("Mark's BMI is higher than John's");
}
else{
    console.log("John's BMI is higher than Mark's");
}

//-------------------------- end of if else statements -----------------------------------
*/
//------------------- Logical Operators -----------------------//
/*
var age = 22;
if(age >= 13 && age < 20){
    console.log("John is a teenager");
}else if(age >= 20 && age < 30){
    console.log("John is a young man");
}else{
    console.log("John is a man");
}

//------------------------- Ternary operator ----------------
age >=18?console.log("He can drink beer"):console.log("He can drink juice");

var drink = age>=18?'beer':'juice';
console.log("John can drink "+drink);

//---------------------- Switch operator -----------------
var job = prompt("Enter the profession you would like to search");
switch(job){
    case 'teacher':
        console.log('The position of '+job+" is available.");
        break;
    case 'senior professor':
        console.log('The position of '+job+" is available.");
        break;
    case 'principal':
        console.log('The position of '+job+" is available.");
        break;
    default:
        console.log('This position is not available.');        
}

//----- switch for condtional statement ---
age = 31;
switch(true){
    case age < 13:
        console.log('He is a boy');
        break;
    case age >=13 && age < 20:
        console.log('He is a teenager');
        break;        
    case age >=20 && age < 30:
        console.log('He is a young man');
        break;
    default:
        console.log('He is a man');
}

//------------ Truthy and falsy values and equality operators -------------//

//falsy values are undefined, null, 0, '',NAN
//truthy values are everything else
var height = 23;
if(height){
    console.log('Variable has been defined');
}else{
    console.log('Variable has not been defined');
}

//Equality operators
// == operator does a type coersion ( converts to the type of the value before checking ). This is a non strict equality operator
if(height == '23'){
    console.log('The == returns true due to type coercion');
}else{
    console.log('The === operator returned this value because it does not do a type coercion');
}

if(height === '23'){
    console.log('The == returns true due to type coercion');
}else{
    console.log('The === operator returned this value because it does not do a type coercion');
}
*/

/*****************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)
4. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀


var gameCount = 0;
var totalScoreJohn = 0;
var totalScoreMike = 0;
while(gameCount < 3){
    var teamJohnScore = prompt("Enter John's team score in match"+(gameCount+1));
    var teamMikeScore = prompt("Enter Mike's team score in match"+(gameCount+1));
    totalScoreJohn = totalScoreJohn+parseInt(teamJohnScore);
    totalScoreMike = totalScoreMike+parseInt(teamMikeScore);
    console.log("John's team scored "+teamJohnScore+" in game"+(gameCount+1));
    console.log("Mike's team scored "+teamMikeScore+" in game"+(gameCount+1));
    gameCount += 1;
}
console.log("John's team scored "+totalScoreJohn+" in "+gameCount+" games");
console.log("Mike's team scored "+totalScoreMike+" in "+gameCount+" games");
if((totalScoreJohn/gameCount) > (totalScoreMike/gameCount)){
    console.log("John's team won the match");
}else{
    console.log("Mike's team won the match");
}


//----------- Functions------------//

//Function Statement
function calculateAge(birthYear){
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    return currentYear - birthYear;
}

var age = calculateAge(1992);
console.log(age);

//Function Expression
var jobDescription = function(job,firstName){
    switch(job){
        case 'teacher':
            return firstName+" teaches a subject at a school.";
        case 'driver':
            return firstName+" drives a car.";
        default:
            return 'no job like this exists';

    }
    return "hi";
}

console.log(jobDescription('teacher','Sahil'));


//---------Arrays--------//
var names = ['Sahil','Rahul','Sameer','Ankitha','Sadia'];
names[names.length - 1 ] = 'Hafsa';
names[names.length] = 'Sadia';

//push value at the end of an array
names.push('Vinay');

//add value to the beginning of the array
names.unshift('Pramod');

//to remove the last element
names.pop();
//to remove first element
names.shift();

//to get the index of an element in the array. It returns -1 if the element does not exist.
console.log(names.indexOf('Ankitha'));

console.log(names);

/*****************************
* CODING CHALLENGE 3
*/

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀

var tip_arr = [];
var final_bill_arr = [];

function tip_calculator(bill,hotel_name){
    var tip = 0;
    if(bill < 50){
        tip = bill*0.2;        
    }else if(bill >= 50 && bill <= 200){
        tip = bill*0.15;
    }else{
        tip = bill*0.10;
    }
    console.log("Tip for "+hotel_name+" is "+tip);
    tip_arr.push(tip);
    final_bill_arr.push(bill+tip);
}

tip_calculator(124,"hotel1");
tip_calculator(48,"hotel2");
tip_calculator(268,"hotel3");

console.log(tip_arr);
console.log(final_bill_arr);

//------- End of Arrays ---------//


//----------- Objects ------------- //
//Creating objects
//Type 1
var person = {
    firstname: 'John',
    lastname: 'Doe',
    age: 20,
    calcBirthYear: function(){
        return 2018 - this.age;
    }
}

var animal = {};
//var animal = new Object();
animal.type = 'Wild';
animal.category = 'Herbivore';

console.log(person);
console.log(animal);

person.age = person.age + 1;
console.log(person.firstname+"'s last name is "+person.lastname);
console.log(person.firstname+" turned "+person.age);
console.log(person.firstname+" was born in "+person.calcBirthYear(person.age));

*/

/*****************************
* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

var person1 = {
    fullName: 'Mark',
    mass:80,
    height:1.65,
    bmi: function(){
        return this.mass / ((this.height)*(this.height));
    }
} 

var person2 = {
    fullName:'John',
    mass:60,
    height:1.75,
    bmi: function(){
        return this.mass / ((this.height)*(this.height));
    }
}

// console.log(person1.fullName+" has a BMI of "+person1.bmi());
// console.log(person2.fullName+" has a BMI of "+person2.bmi());

if(person1.bmi() > person2.bmi()){
    console.log(person1.fullName+" has a higher BMI at "+person1.bmi());
}else{
    console.log(person2.fullName+" has a higher BMI at "+person2.bmi());
}

/*****************************
* CODING CHALLENGE 5
*/

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK 😀
*/

