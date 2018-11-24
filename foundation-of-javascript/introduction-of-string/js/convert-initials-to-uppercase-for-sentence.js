var sentence = "good afternoon, mr mike.";

function convertInitialsToUppercaseForSentence(sentence) {
  let words = sentence.split(" ");
  let convertedWords = [];
  for (let i = 0; i < words.length; i++) {
    convertedWords.push(convertInitialsToUppercaseForWord(words[i]));
  }
  return convertedWords.join(" ");
}

function convertInitialsToUppercaseForWord(word) {
  return word[0].toUpperCase() + word.slice(1);
}
console.log(convertInitialsToUppercaseForSentence(sentence));
