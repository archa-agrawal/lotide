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

const middle = (arr) => {
  const middleArr = [];

  if (arr.length < 3) {
    return middleArr;
  }
  if (arr.length % 2 !== 0) {
    const middleIndex = Math.floor(arr.length/2);
    middleArr.push(arr[middleIndex]);
  } else {
    const middleIndex = arr.length/2;
    middleArr.push(arr[middleIndex - 1], arr[middleIndex]);
  }
  return middleArr;
}
assertArraysEqual(middle([1]),[]) // => []
assertArraysEqual(middle([1, 2]), []) 
assertArraysEqual(middle([1, 2, 3]), [2]) // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]) // => [3]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]) // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]) // => [3, 4]