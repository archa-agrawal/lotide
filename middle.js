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

module.exports = middle;