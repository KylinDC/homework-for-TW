let timer;
let timeCount;

function beginTiming() {
  initTimer();
  timeout();
}

function timeout() {
  showTimer(timeCount);
  timer = setTimeout("timeout()", 1000);
  timeCount += 1;
}

function endTiming() {
  clearTimeout(timer);
  showTimer(timeCount);
}

function initTimer() {
  result.value = '';
  timeCount = 0;
}

function showTimer(timeCount) {
  document.getElementById('result').value = timeCount;
}
