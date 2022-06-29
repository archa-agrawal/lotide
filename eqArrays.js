const assertEqual = function(actual, expected) {
  let passEmoji = String.fromCodePoint(9989) + String.fromCodePoint(9989) + String.fromCodePoint(9989);
  let failEmoji = String.fromCodePoint(10060) + String.fromCodePoint(10060) + String.fromCodePoint(10060);
  if (actual === expected) {
    console.log(`${passEmoji} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${failEmoji} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true) 
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false)

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true) 
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false)

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); 

