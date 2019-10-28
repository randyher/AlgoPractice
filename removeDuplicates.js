// --- Directions
// Write a function that removes duplicates
// from an array

function removeDuplicates(arr) {
  let output = [];
  for (let elem of arr) {
    if (!output.includes(elem)) {
      output.push(elem);
    }
  }
  return output;
}

console.log(removeDuplicates([1, 1, 2, 3, 3, 4, 5, 6, 6, 6, 6, 7, 8, 9, 9]));
