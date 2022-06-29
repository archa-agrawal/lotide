'use strict'

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

const assertArraysEqual = (arr1, arr2) => {
  let passEmoji = String.fromCodePoint(9989) + String.fromCodePoint(9989) + String.fromCodePoint(9989);
  let failEmoji = String.fromCodePoint(10060) + String.fromCodePoint(10060) + String.fromCodePoint(10060);
  if (eqArrays(arr1, arr2) === true) {
    console.log(`${passEmoji} Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`${failEmoji} Assertion Failed: ${arr1} !== ${arr2}`);
  }
}

const letterPositions = (sentence) => {
  const result = {}
  
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {    
      if (!result[sentence[i]]) {
        result[sentence[i]] = []
      }
      result[sentence[i]].push(i)
    }
  }
  return result
}

console.log(letterPositions('hello'))
console.log(letterPositions("lighthouse in the house"))