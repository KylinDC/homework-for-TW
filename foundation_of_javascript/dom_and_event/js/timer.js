let result = document.getElementById('result');
let beginButton = document.getElementById('beginButton');
let endButton = document.getElementById('endButton');

let beginTime;
let endTime;

beginButton.addEventListener('click', function() {
  beginTime = Date.now();
  resetResult();
});

endButton.addEventListener('click', function() {
  endTime = Date.now();
  showResult();
});

function resetResult() {
  result.value = '';
}

function showResult() {
  let duration = endTime - beginTime;
  result.value = Math.round(duration / 1000);
}
