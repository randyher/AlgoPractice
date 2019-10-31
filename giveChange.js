// --- Directions
// Given a number total, get the amount of change that needs to be
//returned

function giveChange(total) {
  let output = {};
  const totalCents = total * 100;
  //get dollars
  const dollars = Math.floor(totalCents / 100);
  output["dollars"] = dollars;
  //getting remaining cents after removing dollars
  let remainder = totalCents - dollars * 100;
  //get quarters
  const quarters = Math.floor(remainder / 25);
  output["quarters"] = quarters;
  //getting remaining cents after removing quarters
  remainder = remainder - quarters * 25;
  //getting dimes
  const dimes = Math.floor(remainder / 10);
  output["dimes"] = dimes;
  //getting remaining cents after removing dimes
  remainder = remainder - dimes * 10;
  //getting nickles
  const nickles = Math.floor(remainder / 5);
  output["nickles"] = nickles;
  //get remaining cents after removing nickles
  remainder = remainder - nickles * 5;
  //assining whats left to pennies
  output["pennies"] = remainder;
  return output;
}

console.log(giveChange(23.47));
