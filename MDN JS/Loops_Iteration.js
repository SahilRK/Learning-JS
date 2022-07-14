// Loops are a programming construct to perform any action repeatedly for a set number of times. Eg: Asking someone to walk 5 steps. The below statement prints "Climbed step <step number>" 5 times
for(let step = 1; step <= 5; step++){
    //print the number of steps taken
    console.log(`Climbed step ${step}`);
}

//There are many different kinds of loops, but they all essentially do the same thing: they repeat an action some number of times. (Note that it's possible that number could be zero!)

//FOR LOOP
//A for loop repeats until a specified condition evaluates to false.
//FOR loop construct
for ([initialExpression]; [conditionExpression]; [incrementExpression]){
    statement
}

//DO WHILE LOOP
//The do...while statement repeats until a specified condition evaluates to false.

//DO WHILE Construct
do{
 statement
}while(condition)

//The statement in the do executes atleast once before the condition in the while statement is checked. If true, the statements in the do are executed till the condition in the while becomes false. If false, then it exits the loop;

//WHILE LOOP
//The while statement also repeats until a specified condition evaluates to be false.

//WHILE Construct
while(condition){

}

//The difference between do while and while is that, DO WHILE will atleast execute the statements once before checking for the condition where as WHILE will first check the condition before executing the statements. Examples as follows.

let n = 0;
let x = 0
do{
   console.log(`Value of n is ${n}`)
   n++;
}while(n < 0)

//This will print Value of n is 0
  
while(x < 0) //This condition does not satisfy hence it will exit the loop
{
  x++;
  console.log(`Value of x is ${x}`)
}



