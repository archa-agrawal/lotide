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

const without = (sourceArray, itemsToRemoveArray) => {
  const filteredArray = [];
  for (const element of sourceArray) {
    if (!itemsToRemoveArray.includes(element)) {
      filteredArray.push(element);
    }
  }
  return filteredArray;
}
assertArraysEqual([1,2,3], without([1, 2, 3], [1, 2, 3]))
assertArraysEqual(["1", "2", "3"], without(["1", "2", "3"], [1, 2, 3]))
assertArraysEqual([1, 2, 3], without([1, 2, 3], [1]))
assertArraysEqual(["1", "2", "3"], without(["1", "2", "3"], []))


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); 
assertArraysEqual(words, ["hello", "world", "lighthouse"]);