//------------------------------- Conditional statements -----------------------------
//A conditional statement is a set of commands that executes if a specified condition is true. JavaScript supports two conditional statements: if...else and switch.

//if...else statement
//Use the if statement to execute a statement if a logical condition is true. Use the optional else clause to execute a statement if the condition is false.
let a = 10;
let b = 20;
if(a > b){
    console.log("a is greater than b");
}else{
    console.log("b is greater than a");
}

//if always checks for true

//************************************* switch case *********************************************
//A switch statement allows a program to evaluate an expression and attempt to match the expression's value to a case label. If a match is found, the program executes the associated statement.

let personDes = prompt("Hi there! Please enter your designation");
switch(personDes){
  case "Associate Engineer":
    alert("You are going to be assigned to a senior engineer")
    break;
  case "Jr Software Engineer":
    alert("You have been assigned a module for development");
    break;
  case "Sr Software Engineer":
    alert("You have been assigned to train the associate engineers")
    break;
  default:
    alert("This role does not exist")
}

//NOTE: The optional break statement associated with each case clause ensures that the program breaks out of switch once the matched statement is executed, and then continues execution at the statement following switch. If break is omitted, the program continues execution inside the switch statement (and will evaluate the next case, and so on).

/* ************************* Exception handling statements **************************
You can throw exceptions using the throw statement and handle them using the try...catch statements. */

//throw statement
//try...catch statement

// The throw statement throws an exception

throw 'Error2';   // String type
throw 42;         // Number type

// ************************* try...catch..finally statement **************************
/*The try...catch statement marks a block of statements to try, and catch block specifies one or more responses should an exception be thrown.*/

  const getMonthName = function(moNum){
    moNum = moNum - 1;
    let monthList = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug,","Sep","Oct","Nov","Dec"];
    
    if(monthList[moNum]){
      return monthList[moNum]
    }else{
      throw "Invalid month"
    }
  }

  let userInput = prompt("Enter month number");
  try{
    getMonthName(userInput)
  }catch(e){
    console.log(`${e}. Please enter a valid month between 1 and 12`);
  }
/* 
The finally block contains statements to be executed after the try and catch blocks execute. Additionally, the finally block executes before the code that follows the try…catch…finally statement.

It is also important to note that the finally block will execute whether or not an exception is thrown. If an exception is thrown, however, the statements in the finally block execute even if no catch block handles the exception that was thrown.

You can use the finally block to make your script fail gracefully when an exception occurs. For example, you may need to release a resource that your script has tied up. For example, when we try writing data to a file and an error occurs, then no matter what happens, we close the file.*/

function f() {
  try {
    console.log(0);
    throw 'bogus';
  } catch(e) {
    console.log(1);
    return true;    // this return statement is suspended
                    // until finally block has completed
    console.log(2); // not reachable
  } finally {
    console.log(3);
    return false;   // overwrites the previous "return"
    console.log(4); // not reachable
  }
  // "return false" is executed now
  console.log(5);   // not reachable
}
console.log(f()); // 0, 1, 3, false

