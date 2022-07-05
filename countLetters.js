const assertEqual = function(actual, expected) {
  let passEmoji = String.fromCodePoint(9989) + String.fromCodePoint(9989) + String.fromCodePoint(9989);
  let failEmoji = String.fromCodePoint(10060) + String.fromCodePoint(10060) + String.fromCodePoint(10060);
  if (actual === expected) {
    console.log(`${passEmoji} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${failEmoji} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = (string) => {
  const letterCount = {};

  for (let letter of string) {
    if (!!letterCount[letter]) {
      letterCount[letter]++;
    } else if (letter !== ' ') {
      letterCount[letter] = 1;
    }
  }
  return letterCount;
}
console.log(countLetters("lighthouse in the house"))

module.exports = countLetters;