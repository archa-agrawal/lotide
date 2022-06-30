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


const eqObjects = (obj1, obj2) => {

  for (let item in obj1) {
    
    if (obj1[item] instanceof Array) {
      let value = eqArrays(obj1[item], obj2[item])
      if (value === false) {
        return false
      }
    } else if (obj1[item] !== obj2[item]) {
      return false
    }
  }
  for (let item in obj2) {
    if (obj2[item] instanceof Array) {
      let value = eqArrays(obj2[item], obj1[item])
      if (value === false) {
        return false
      }
    } else if (obj2[item] !== obj1[item]) {
      return false
    }
  }
  return true
}

const assertObjectsEqual = (obj1, obj2) => {
  const inspect = require('util').inspect;
  let passEmoji = String.fromCodePoint(9989) + String.fromCodePoint(9989) + String.fromCodePoint(9989);
    let failEmoji = String.fromCodePoint(10060) + String.fromCodePoint(10060) + String.fromCodePoint(10060);
    if (eqObjects(obj1, obj2) === true) {
      console.log(`${passEmoji} Assertion Passed: ${inspect(obj1)} === ${inspect(obj2)}`);
    } else {
      console.log(`${failEmoji} Assertion Failed: ${inspect(obj1)} !== ${inspect(obj2)}`);
    }
}

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false