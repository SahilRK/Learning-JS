/* //Create a Constructor Function Person
var Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
} 

Person.prototype.calculateAge = function(){
    this.age = 2020 - this.yearOfBirth;
}

//Create an instantiate an object of the Person Function ( Class is called a constructor function in JS )
var john = new Person("john",1990,"student");
 */

//-----------------------------------------------------------------------------------------------------// 

//Creating Objects and using inheritance using Object.create

/* var personProto = {
    calculateAge : function(){
        this.age = 2020 - this.yearOfBirth;
        console.log(this.age);
    }
}

var john = Object.create(personProto, {
    name: { value: 'John'},
    yearOfBirth: { value: 1992},
    job: { value: 'Trainee'}
}) */

//-----------------------------------------------------------------------------------------------------// 

/*
//PASS BY VALUE AND PASS BY REFERENCE

var age = 40;
var obj1 = {
    name: 'Sahil',
    yearOfBirth: '1992'
}

function changeVal(a,b){
    a = 10;
    b.yearOfBirth = 1996; 
  console.log("new value of age is "+a);
}

changeVal(age,obj1)

console.log(age);
console.log(obj1.yearOfBirth);

 */

//-----------------------------------------------------------------------------------------------------// 

/* 
 //PASSING FUNCTIONS AS ARGUMENTS
 var years = [1992,1926,1968,1995,2000,2015,2007];

 function arrayCalc(arr, func){
     var arrayRes = [];
     for(i = 0; i < years.length;i++){
        arrayRes.push(func(arr[i]));
     }
     return arrayRes;
 }

 function getAge(val){
     return 2020 - val;
 }

 function isAdult(val){
    if(val >= 18){
        return true
    }
    else{
        return false
    }
 }

 var ages = arrayCalc(years, getAge);
 var adultCheck = arrayCalc(ages, isAdult);
 */

 //-----------------------------------------------------------------------------------------------------// 

 //FUNCTIONS RETURNING FUNCTIONS ( WHAT FUNCTION STATEMENTS DO )

 /* function asInterviewQuestions(job){
    switch(job){
        case 'teacher':
            return function(name){
                console.log("Hi "+name+". What subject do you teach?");
            };      
        case 'designer':
            return function(name){
                console.log("Hi "+name+". Show me some of your designs.");
            }
        default:
            return function(name){
                console.log("Hi "+name+". What is your profession.");
            }    
    }
    
 }

 var teacherQuestion = asInterviewQuestions('teacher');
 var designerQuestion = asInterviewQuestions('designer');
 designerQuestion('Sahil'); 

 //The above example is also how a function expression works. The example for it is as written below
 var teacherQuestion = function(name){
     console.log("Hi "+name+". What do you teach?")
 }

 teacherQuestion('Sahil');
 */

//-----------------------------------------------------------------------------------------------------// 

//IFFE ( Immediately invoking function expressions )
/* function game(){
    var score = Math.random() * 10;
    console.log(score);
}

(function(goodLuck){
    var score = Math.random() * 10;
    console.log(score);
    console.log(score >= 5 - goodLuck);
})(1);
 */

 //CLOSURES- They are functions that return functions and can access the arguments passed to the parent function--------------
/* 
 function interviewQuesion(job){
     return function(name){
         if(job === 'teacher'){
             console.log("Hi "+name+". "+job+" is your profession.");
         }
         else if(job === 'designer'){
            console.log("Hi "+name+". "+job+" is your profession.");
         }
         else{
             console.log("Hi "+name+". What is your profession");
         }
     }
 }

 var teacherQuestion = interviewQuesion('teacher');
 teacherQuestion('Sahil');

 var designerQuestion = interviewQuesion('designer');
  designerQuestion('john'); */

  //------------------------------------------------------------------//

