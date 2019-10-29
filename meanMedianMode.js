// --Directions
// Given an array of numbers, calculate the mean, median, and mode.

const numbers = [11, 12, 12, 13, 14, 14, 15];
const numbersTwo = [15, 11, 23, 45, 78, 20];
const numbersThree = [1, 2, 3, 4, 5, 5, 5, 6, 6, 6, 6, 6, 7, 8, 8, 9, 9, 9];

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

function mean(array) {
  let map = {};
  let count = 0;
  let mostAppeared;
  for (let num of array) {
    if (map[num]) {
      map[num]++;
    } else {
      map[num] = 1;
    }
  }

  for (let num in map) {
    if (map[num] > count) {
      count = map[num];
      mostAppeared = num;
    }
  }
  return mostAppeared;
}

// console.log(mean(numbers));
// console.log(median(numbersTwo));
console.log(mean(numbersThree));
