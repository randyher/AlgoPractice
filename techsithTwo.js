// 1. Staring with an array, [1,2,5,7], give me the sum of all the elements

function addElems(array) {
  return array.reduce((acc, item) => acc + item);
}

// console.log(addElems([1, 2, 3, 7]));

// 2. Write a function that has both work: add(1,2) and add(1)(2)

function addNums(num1, num2) {
  if (num1 && num2) {
    return num1 + num2;
  } else {
    return function(numTwo) {
      return num1 + numTwo;
    };
  }
}

// console.log("First Way:", addNums(1, 2));
// console.log("Second Way:", addNums(1)(2));

//3. We have an array of [1...100], but one is missing. How can we find it

function findMissing(array) {
  let allNumbers = [];
  for (let i = 1; i <= array.length; i++) {
    allNumbers.push(i);
  }
  for (let num of allNumbers) {
    if (!array.includes(num)) {
      return num;
    }
  }
}

console.log(findMissing([2, 1, 3, 6, 5, 4, 7, 8, 10]));
