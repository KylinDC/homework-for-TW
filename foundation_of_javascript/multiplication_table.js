function logMultiplicationTable(num) {
  for (let i = 1; i <= num; i++) {
    let a = [];
    for (let t = 1; t <= num; t++) {
      if (t <= i) {
        a.push(i + '*' + t + '=' + i * t);
      }
    }
    console.log(a.join(" "));
  }
}

logMultiplicationTable(9);
