// --- Simple Frequency Map

//For String

str = "Hey, I enjoy food";
sentence = "Woah there friends, how are yah!";

function freqMapOne(str) {
  let charArray = str.split("");
  let map = {};
  for (let char of charArray) {
    if (map[char]) {
      map[char]++;
    } else {
      map[char] = 1;
    }
  }
  return map;
}

console.log(freqMapOne(str));
