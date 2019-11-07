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
