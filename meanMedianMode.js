// --Directions
// Given an array of numbers, calculate the mean, median, and mode.

const numbers = [11, 12, 12, 13, 14, 14, 15];
const numbersTwo = [15, 11, 23, 45, 78, 1];

function mean(array) {
  let sum = array.reduce((agg, item) => agg + item);
  return sum / array.length;
}

function median(array) {
  let sortedNums = array.sort((x, y) => x - y);
  if (sortedNums.length % 2 === 0) {
    return 0;
  } else {
    return 1;
  }
}

console.log(mean(numbers));
console.log(median(numbersTwo));
