var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

function getMostFrequentElement(arr) {
  let mapOfElementFrequency = getMapOfElementFrequency(arr);
  let keyOfMaxValue = getKeyOfMaxValue(mapOfElementFrequency);
  return keyOfMaxValue;
}

function getMapOfElementFrequency(arr) {
  let mapOfElementFrequency = new Map();
  for (let element of arr) {
    if (mapOfElementFrequency.get(element)) {
      mapOfElementFrequency.set(element, mapOfElementFrequency.get(element) + 1);
    }
    else {
      mapOfElementFrequency.set(element, 1);
    }
  }
  return mapOfElementFrequency;
}

function getKeyOfMaxValue(map) {
  let maxValue = 0;
  let keyOfMaxValue;
  for (let [key, value] of map) {
    if (value > maxValue) {
      maxValue = value;
      keyOfMaxValue = key;
    }
  }
  return keyOfMaxValue;
}

console.log(getMostFrequentElement(a));
