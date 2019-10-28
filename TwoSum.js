// --- Directions
// Given an array of numbers, return all pairs that add up to a
// given sum. The numbers can be used more than once.

function twoSum(array, n) {
  console.log("Hey");
  let output = [];
  for (let i = 0; i < array.length; i++) {
    for (let y = 1; y < array.length; y++) {
      console.log(array[i], array[y]);
      if (array[i] + array[y] == n) {
        output.push([array[i], array[y]]);
      }
    }
  }
  return output;
}
console.log(twoSum([1, 2, 3, 4], 4));
