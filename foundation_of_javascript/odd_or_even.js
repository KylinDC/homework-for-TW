for (let i = 0; i <= 20; i++) {
  if (isAnEven(i) === true) {
    console.log(i + '是偶数。');
  }
  else {
    console.log(i + '是奇数。');
  }
}

function isAnEven(num) {
  return num % 2 === 0 ? true : false;
}
