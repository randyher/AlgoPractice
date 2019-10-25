// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function makeCharMap(str) {
  let output = {};
  for (let char of str) {
    if (output[char] >= 1) {
      output[char] += 1;
    } else {
      output[char] = 1;
    }
  }
  return output;
}

function maxChar(str) {
  const charMap = makeCharMap(str);
  console.log(charMap);
}

console.log(maxChar("LalalaBabaNonoMooooooo"));
