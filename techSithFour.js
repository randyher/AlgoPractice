//Will the function work? Why not? Fix it..

const profile = {
  name: "Randy",
  getName: () => {
    console.log(`Hey ${this.name}`);
  }
};

// Fixes:

const profileTwo = {
  name: "Randy",
  getName: function() {
    console.log(`Hey ${this.name}`);
  }
};

const profileThree = {
  name: "Randy",
  getName: function() {
    console.log(`Hey ${profileThree.name}`);
  }
};

const profileFour = {
  name: "Randy",
  getName: function(arg) {
    console.log(`Hey ${arg.name}`);
  }
};
/////////////////////////////////////////
//Make Mil Time

function milTime(str) {
  let timeArray = str.split(":");

  // let lateOrEarly =
  if (timeArray[1].slice(2) == "PM") {
    let hour = parseInt(timeArray[0]) + 12;
    return hour + ":" + timeArray[1];
  } else {
    return timeArray.join(":");
  }
}
