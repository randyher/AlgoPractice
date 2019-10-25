/* 1. Take the object and make a function that takes the object and 
outputs the values of the array
*/

let x = { a: 1, b: 2, c: 3 };

function grabValues(obj) {
  return Object.values(obj);
}

// console.log(grabValues(x));

// 2. Reverse String

let stringToReverse = "This is a string I want to reverse!";

function reverseString(str) {
  return str
    .split("")
    .reverse()
    .join("");
}

// console.log(reverseString(stringToReverse));

// 3. Make problemObj.getA().getB() work!

const problemObj = {
  a: 1,
  b: 2,
  getA() {
    console.log(this.a);
    return this; //THIS IS WHAT'S ADDED; RETURN THIS
  },
  getB() {
    console.log(this.b);
  }
};

// console.log(problemObj.getA().getB());

/* 4. If I have an array, like [1,2,3], I want to be able to run
[1,2,3].print() in order to log '1,2,3'
*/

Array.prototype.print = function() {
  console.log(this.toString());
};

[1, 2, 3, 4].print();
