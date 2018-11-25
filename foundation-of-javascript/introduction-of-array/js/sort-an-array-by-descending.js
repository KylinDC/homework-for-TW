var a = [5, 1, 8, 10, 4];

function descendingCompare(a, b) {
  return a >= b ? -1 : 1;
}

console.log(a.sort(descendingCompare));
