const tail = require('../tail');
const assert = require('chai').assert;

// const words = ['hall', 'room', 'door', 'window'];
// console.log(tail(words)); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 4);

describe('tail', () => {
  it('should return empty array if an empty array is passed', () => {
    assert.deepEqual(tail([]), [])
  });
  it('should return empty array if input array has only 1 value', () => {
    assert.deepEqual(tail([1]), [])
  });
  it('should return an array without its 0th value', () => {
    assert.deepEqual(tail([1,2,3,4]), [2,3,4])
  });
  it('should not mutate the input array', () => {
    const inputArray = [1,2,3,4];
    tail(inputArray)
    assert.deepEqual(inputArray, [1,2,3,4])
  });
});