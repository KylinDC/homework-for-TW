var a = [1, 2, 3, 4, 5];

function doubleAnArray(arr) {
  let doubledArray = [];
  for (let element of arr) {
    doubledArray.push(element * 2);
  }
  return doubledArray;
}
console.log(doubleAnArray(a));
