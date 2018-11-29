function reverseString(message) {
  let splitedString = message.split('');
  let reversedArray = splitedString.reverse();
  let joinedArray = reversedArray.join('');
  return joinedArray;
}
reverseString('hello');


function palindrome(message) {
  return (message === reverseString(message));
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
  return splitedString.length;
}
countWords('Good morning, I love JavaScript.');
