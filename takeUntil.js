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

const takeUntil = (array, callback) => {
   const result = [];
   
   for (const item of array) {
     if (callback(item)){
       return result;
     }
     result.push(item);
   }
   return result;
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
assertArraysEqual(takeUntil(data1, x => x < 0),[ 1, 2, 5, 7, 2 ]) ;

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
assertArraysEqual(takeUntil(data2, x => x === ','), [ "I've", 'been', 'to', 'Hollywood' ]);

assertArraysEqual(takeUntil(data1, x => x < 9), [])

assertArraysEqual(takeUntil(data1, x => x > 9), [1, 2, 5, 7, 2, -1, 2, 4, 5])