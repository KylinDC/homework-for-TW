var a = [5, 1, 8, 10, 4];

function descendingCompare(a, b) {
  return a >= b ? -1 : 1;
}

console.log(a.sort(descendingCompare));


var colors = ['Red', 'Green', 'White', 'Black'];

console.log(colors.join(' '));
console.log(colors.join('+'));
console.log(colors.join());


var b = [1, 2, 3, 4, 5];

function doubleAnArray(arr) {
  let doubledArray = [];
  for (let element of arr) {
    doubledArray.push(element * 2);
  }
  return doubledArray;
}

console.log(doubleAnArray(b));
