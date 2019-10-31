// --- Directions
// Given a string of a sentence, return the sentence with
// every word reversed

function reverseWord(str) {
  let wordArray = str.split(" ");
  return wordArray
    .map(word => {
      return word
        .split("")
        .reverse()
        .join("");
    })
    .join(" ");
}

console.log(reverseWord("Hey how is everybody doing?"));
