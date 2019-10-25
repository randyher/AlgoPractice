// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let wordArray = str.split(" ");
  let output = [];
  for (let word of wordArray) {
    output.push(`${word[0].toUpperCase()}${word.slice(1)}`);
  }
  console.log(output.join(" "));
  return output.join(" ");
}

capitalize("hey how Are you friends i hope OKAY!");
