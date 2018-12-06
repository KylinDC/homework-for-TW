let counter = document.getElementById("counter");

function showCounter() {
  if (!isCounterExist()) {
    initCounter();
  }
  counter.innerHTML = localStorage.getItem('counterNumber');
}

function adder() {
  let counterNumber = parseInt(localStorage.getItem('counterNumber'));
  counterNumber += 1;
  saveCounter(counterNumber);
  showCounter();
}

function initCounter() {
  localStorage.setItem('counterNumber', 0);
}

function saveCounter(counterNumber) {
  localStorage.setItem('counterNumber', counterNumber);
}

function isCounterExist() {
  return localStorage.getItem('counterNumber') ? true : false;
}
