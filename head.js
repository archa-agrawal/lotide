const assertEqual = function(actual, expected) {
  let passEmoji = String.fromCodePoint(9989) + String.fromCodePoint(9989) + String.fromCodePoint(9989);
  let failEmoji = String.fromCodePoint(10060) + String.fromCodePoint(10060) + String.fromCodePoint(10060);
  if (actual === expected) {
    console.log(`${passEmoji} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${failEmoji} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = (arr) => {
  return arr[0];
};


assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), 5);
assertEqual(head(["Hell", "Lighthouse", "Labs"]), "Hello");

