// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function howManyVowels(str) {
  let count = 0;
  const vowelList = ["a", "e", "i", "o", "u"];
  for (let char of str) {
    if (vowelList.includes(char)) {
      count++;
    }
  }
  return count;
}

console.log(howManyVowels("hey how are you"));
