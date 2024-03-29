// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, n) {
  let chunk = [];
  for (let elem of array) {
    let last = chunk[chunk.length - 1];

    if (!last || last.length === n) {
      chunk.push([elem]);
    } else {
      last.push(elem);
    }
  }
  return chunk;
}

console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3));
