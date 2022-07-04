const eqArrays = require('./eqArrays');

const assertArraysEqual = (arr1, arr2) => {
  let passEmoji = String.fromCodePoint(9989) + String.fromCodePoint(9989) + String.fromCodePoint(9989);
  let failEmoji = String.fromCodePoint(10060) + String.fromCodePoint(10060) + String.fromCodePoint(10060);
  if (eqArrays(arr1, arr2) === true) {
    console.log(`${passEmoji} Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`${failEmoji} Assertion Failed: ${arr1} !== ${arr2}`);
  }
}

module.exports = assertArraysEqual;

