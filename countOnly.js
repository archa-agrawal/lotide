const assertEqual = function(actual, expected) {
  let passEmoji = String.fromCodePoint(9989) + String.fromCodePoint(9989) + String.fromCodePoint(9989);
  let failEmoji = String.fromCodePoint(10060) + String.fromCodePoint(10060) + String.fromCodePoint(10060);
  if (actual === expected) {
    console.log(`${passEmoji} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${failEmoji} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countOnly = (allItems, itemsToCount) => {
  
  const resultObj = {}

  for (let item of allItems) {

    if (!!resultObj[item]) {
      resultObj[item]++;
    } else if (!!itemsToCount[item]) {
      resultObj[item] = 1
    }
  }
  
  return resultObj
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
console.log(result1)

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);