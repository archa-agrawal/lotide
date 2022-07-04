const assert = require('chai').assert;
const middle = require('../middle');


describe('middle', () => {
  it('should return empty array when array has only 1 value', () => {
    assert.deepEqual(middle([1]), []);
  });
  it('should return empty array when array has only 2 values', () => {
    assert.deepEqual(middle([1,2]), []);
  });
  it('should return middle number when array has more then 2 values', () => {
    assert.deepEqual(middle([1,2,3]), [2]);
  });
  it('should return middle value when array length is an odd number and more than 3', () => {
    assert.deepEqual(middle([1,2,3,4,5]), [3]);
  });
  it('should return 2 middle values when array length is even number', () => {
    assert.deepEqual(middle([1,2,3,4]), [2,3]);
  });
});