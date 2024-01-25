console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

class Person {
    constructor(name, pets, residence, hobbies = []) {
        this.name = name;
        this.pets = pets; //number
        this.residence = residence;
        this.hobbies = hobbies; //array
    }
  
    info() {}
    soundOff() {}
    addHobby(newHobby){this.hobbies.push(newHobby)}
    removeHobby(delHobby)
      {const delIndex = this.hobbies.indexOf(delHobby);
       if (delIndex !== -1) 
               {this.hobbies.splice(delIndex, 1)}}
    greeting() {console.log("Hello fellow person!")}
    }


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
class Coder extends Person {
    constructor(name, pets, residence, hobbies = []) {
        super(name, pets, residence, hobbies) 
        this.occupation = "Full Stack Web Developer";
    }
    greeting() {console.log("Hello fellow code ninja!")}
    }


// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
  // test Person class
  let frodo = 
      new Person("Frodo", 1, "100 Bag End", ["gardening"]);
  
  frodo.addHobby("Adventuring");
  frodo.addHobby("Ring wearing");
  frodo.removeHobby("gardening");
  console.log(frodo);
  frodo.greeting();

// test coder class
let chuckw = 
    new Coder("Chuck W", 2, "3554 Anne Marie Dr", ["writing", "chess"]);
    chuckw.addHobby("Softball");
    chuckw.addHobby("Leadership");
    chuckw.addHobby("Astronomy");
    chuckw.removeHobby("Leadership");

console.log(chuckw);
chuckw.greeting();

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

class Calculator {
    constructor(){
    this.result = 0;}
    add(op1, op2)
        {this.result = op1 + op2;
         return this.result}
    subtract(op1, op2)
        {this.result = op1 - op2;
         return this.result}
    multiply(op1, op2)
        {this.result = op1 * op2;
         return this.result}
    divide(op1, op2)
        {this.result = op1 / op2;
         return this.result}
    displayResult(){console.log(this.result)}
}
//test calculator
myCalc = new Calculator();
console.log(`Check add 25 + 5 = ${myCalc.add(25,5)}`);
console.log(`Check subtract 25 - 5 = ${myCalc.subtract(25,5)}`);
console.log(`Check multiply 25 * 5 = ${myCalc.multiply(25,5)}`);
console.log(`Check divide 25 / 5 = ${myCalc.divide(25,5)}`);
myCalc.displayResult();