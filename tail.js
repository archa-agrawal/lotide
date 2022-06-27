const assertEqual = function(actual, expected) {
  let passEmoji = String.fromCodePoint(9989) + String.fromCodePoint(9989) + String.fromCodePoint(9989);
  let failEmoji = String.fromCodePoint(10060) + String.fromCodePoint(10060) + String.fromCodePoint(10060);
  if (actual === expected) {
    console.log(`${passEmoji} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${failEmoji} Assertion Failed: ${actual} !== ${expected}`);
  }
};
const tail = (arr) => {
  return arr.slice(1);
};

const words = [];
console.log(tail(words)); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);