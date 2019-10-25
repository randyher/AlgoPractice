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

// [1, 2, 3, 4].print();

// 5. Cloning an object

const object = {
  a1: 1,
  a: {
    b: {
      c: 1
    }
  }
};

const cloneObj = { ...object, e: "Why does this not work" };

cloneObj.a1 = 2;
cloneObj.a.b.c = 4;

// console.log(object);
// console.log(cloneObj);

//Cloning an Array
let array = [1, 2, 3, 4];
let cloneArray = array.slice();

cloneArray[0] = 30;

// console.log(array);
// console.log(cloneArray);

// 6. Merge arrays but make sure they're sorted

const arrayA = [1, 2, 5, 7, 9];
const arrayB = [2, 5, 7, 12, 100];

function mergeArray(arrayA, arrayB) {
  return [...arrayA, ...arrayB].sort((numA, numB) => {
    return numA - numB;
  });
}

console.log(mergeArray(arrayA, arrayB));
