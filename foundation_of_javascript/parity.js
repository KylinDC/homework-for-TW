for (let i = 0; i <= 20; i++) {
  if (isOdd(i)) {
    console.log(i + '是奇数。');
  }
  else {
    console.log(i + '是偶数。');
  }
}

function isOdd(num) {
  return num % 2 !== 0;
}
