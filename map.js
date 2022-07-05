
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

const words = ["ground", "control", "to", "major", "tom"];

const map = (array, callback) => {
  const result = [];

  for (const item of array) {
    result.push(callback(item))
  }

  return result;

}

const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(map(words, word => word[0]),[ 'g', 'c', 't', 'm', 't' ])
assertArraysEqual(map(words, word => word[2]),[ 'o', 'n', undefined, 'j', 'm' ])
assertArraysEqual(map(words, word => word[0] + 'eehhaa'),[ 'geehhaa', 'ceehhaa', 'teehhaa', 'meehhaa', 'teehhaa' ])

module.exports = map;