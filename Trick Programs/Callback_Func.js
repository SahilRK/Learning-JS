//Performing operations on numbers with their indexes.
const numbers = [5,10,15,20,25];

const add = (num1,num2) => {
    //The first number is the number passed by the map function and the second is the index of the number
    console.log(num1+" --- "+num2);
    return num1*num2
}

const newNumArr = numbers.map(add)
/*
5 --- 0
10 --- 1
15 --- 2
20 --- 3
25 --- 4
*/

//Passing callbacks with more than one value.
const numbers = [1,2,3,4,5];
let a = 10;

const add = (num1,num2) => {
    return num1*num2
}

//To pass multiple values to the named callback function, we call the function inside the anonymous function
const newNumArr = numbers.map(function(n){
    return add(n);
})