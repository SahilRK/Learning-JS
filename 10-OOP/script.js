//Important concepts in OOP

//1: Abstraction
//Ignoring details that dont matter, which allows us to get an overview about the concept being implemented, instead of messing up with things that dont matter

//2: Encapsulation
//Keeping methods and properties private in the class so that they are not accessible from outside the class. Some methods can be exposed as API.

//3: Inheritance
//Makes all the properties and methods of the parent class available to the child class, forming a hierarchical relationship between classes. This allows us to reuse common logic between the classes.

//4: Polymorphism
//A child class can overwrite a method that it inherited from a parent class

//********************* OOP in Javascript *************************/
/*
1: In javascript all objects are linked to a prototype object.
2: Prototypes contain properties and methods which the objects linked to that prototype can access. This is called prototypal inheritance. This is different from the normal inheritance since here the instance inherits from the class. In classical OOP, methods are copied from the class to the object.

There are 3 ways to implement OOPS.
*/
//1) Constructor function
/*
1) This function is called with a new operator to create an object instance.
2) Constructor functions always start with a calpital letter(in convention with OOP)
3) function expression or declaration can be used to create a constructor function. Arrow functions cannot be used since they dont have their own this keyword.
*/
const Person = function(name,birthYear){
    this.name = name;
    this.birthYear = birthYear;
    //Never create a method in a constructor since the method is added to every instance
}
//Creating methods on the constructor function using prototypal inheritance
Person.prototype.calcAge = function(){
    this.age = 2021-this.birthYear;
    console.log(this.age)
}

const person1 = new Person("Sahil",1992);
const person2 = new Person("Sameer",1992);
const person3 = new Person("Ankitha",1999);
console.log(person1,person2,person3);
person1.calcAge(); //29
person2.calcAge(); //29
person3.calcAge(); //22

//How is an object created using the new operator and the constructor function
/*
1) When a function is called using the new operator, an empty object is created.

2) Then the this keyword is set to the newly created object in the constructor function call. So inside the functions execution context, this is the new object. That is why in the function, the properties are set on the "this" keyword.

3) The new object is linked(__proto__ property) to the constructor function's prototype property(eg: Person.prototype as seen above). __proto__ always points to an Object's prototype.

4) The new object is returned from the function call.

The ability of an object to look up for properties and methods in a prototype is called prototype chain.

The prototype seen above "Person.prototype" is an object. The prototype of Person.prototype is Object.prototype.
Object.prototype is the last in the prototype chain and its __proto__ property points to null(__proto__:null)

*/

