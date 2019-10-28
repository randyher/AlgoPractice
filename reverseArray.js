// --- Directions
// Given a array, return a new array with the reversed
// order of elems

function reverseArray(array) {
  // return array.reverse(); this works, but in ase they don't want this
  let output = [];
  for (let elem of array) {
    output = [elem, ...output];
  }
  return output;
}

console.log(reverseArray([1, 2, 3, 4, 5]));
