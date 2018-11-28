function reverseString(message) {
  // wirte your code here
  let splitedString = message.split('');
  let reversedArray = splitedString.reverse();
  let joinedArray = reversedArray.join('');
  return joinedArray;
}
reverseString('hello'); // should return 'olleh'


function palindrome(message) {
  // wirte your code here
  if (message === reverseString(message)) {
    return true;
  }
  else {
    return false;
  }
}
palindrome('hello'); // should return false
palindrome('abcba'); // should return true


function alphabetSort(message) {
  // wirte your code here
  let splitedString = message.split('');
  let sortedArray = splitedString.sort();
  let joinedArray = sortedArray.join('');
  return joinedArray;
}
alphabetSort('hello'); // should return 'ehllo'


function countWords(message) {
  // wirte your code here
  let splitedString = message.split(' ');
  let arrayLength = splitedString.length;
  return arrayLength;
}
countWords('Good morning, I love JavaScript.'); // should return 5
