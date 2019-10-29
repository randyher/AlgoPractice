// --Directions
// Given an array of numbers, calculate the mean, median, and mode.

const numbers = [11, 12, 12, 13, 14, 14, 15];
const numbersTwo = [15, 11, 23, 45, 78, 20];

function mean(array) {
  let sum = array.reduce((agg, item) => agg + item);
  return sum / array.length;
}

function median(array) {
  let sortedNums = array.sort((x, y) => x - y);
  let midPoint = Math.floor(array.length / 2);
  if (sortedNums.length % 2 === 0) {
    return (sortedNums[midPoint] + sortedNums[midPoint - 1]) / 2;
  } else {
    return sortedNums[midPoint];
  }
}

// console.log(mean(numbers));
console.log(median(numbersTwo));
