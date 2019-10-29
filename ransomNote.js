// --- Directions
// Given a magazine of words and a ransom note, determine if
// it’s possible to “cut out” and create the ransom note from the magazine
//words.

const magazine =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

function makeMap(words) {
  const wordArray = words.split(" ");
  let output = {};
  for (let word of wordArray) {
    if (output[word]) {
      output[word]++;
    } else {
      output[word] = 1;
    }
  }
  return output;
}

function ransomNote(str, magazine) {
  const strMap = makeMap(str);
  const magMap = makeMap(magazine);

  for (let word in strMap) {
    if (strMap[word] > magMap[word] || !magMap[word]) {
      return false;
    }
  }
  return true;
}
console.log(ransomNote("sit ad est sint", magazine)); //should be true
console.log(ransomNote("sit ad est love", magazine)); //should be false
