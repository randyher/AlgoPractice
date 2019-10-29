// --- Directions
// Given an array of numbers, find the output the minimum sum possible
// and the maximum sum possible if one number is removed

function findMinMax(array) {
  let smallestNum = Math.min.apply(null, array);
  let largestNum = Math.max.apply(null, array);
  let arraySum = array.reduce((acc, item) => acc + item);
  return [arraySum - smallestNum, arraySum - largestNum];
}

console.log(findMinMax([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// Get the count of the largest number in the array

function countMax(array) {
  const maxNum = Math.max.apply(null, array);
  let maxNumArray = [];

  for (let num of array) {
    if (num === maxNum) {
      maxNumArray.push(num);
    }
  }
  return maxNumArray.length;
}

console.log(countMax([5, 1, 2, 3, 4, 5, 4, 3, 5, 2, 5]));
