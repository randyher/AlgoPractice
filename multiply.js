// Write a function that multiplies two integers without using the built-in function
// For example, multiply(2,4) returns 8, multiply (7,3) returns 21

function multiply(x, y) {
  let output = 0;
  let smallestNumber;
  let largestNumber;
  x > y ? (smallestNumber = y) : (smallestNumber = x);
  x > y ? (largestNumber = x) : (largestNumber = y);

  for (i = 0; i < Math.abs(smallestNumber); i++) {
    output += Math.abs(largestNumber);
  }

  if (x < 0 && y < 0) {
    return Math.abs(output);
  } else if (x < 0 || y < 0) {
    return 0 - output;
  }

  return output;
}

multiply(5, 3);
