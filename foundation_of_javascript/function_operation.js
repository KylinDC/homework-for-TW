function reverseString(message) {
  let splitedString = message.split('');
  let reversedArray = splitedString.reverse();
  let joinedArray = reversedArray.join('');
  return joinedArray;
}
reverseString('hello');


function palindrome(message) {
  if (message === reverseString(message)) {
    return true;
  }
  else {
    return false;
  }
}
palindrome('hello');
palindrome('abcba');


function alphabetSort(message) {
  let splitedString = message.split('');
  let sortedArray = splitedString.sort();
  let joinedArray = sortedArray.join('');
  return joinedArray;
}
alphabetSort('hello');


function countWords(message) {
  let splitedString = message.split(' ');
  let arrayLength = splitedString.length;
  return arrayLength;
}
countWords('Good morning, I love JavaScript.');
