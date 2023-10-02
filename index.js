const findLongestWord = (sentence) => {
  const words = sentence.split(/\s+/);

  let longestWord = "";
  let maxWordLength = 0;
  let maxVowelCount = 0;

  function countVowels(word) {
    const vowels = ["a", "e", "i", "o", "u"];
    return word.split("").filter((char) => vowels.includes(char)).length;
  }

  for (const word of words) {
    const cleanedWord = word.replace(/[^a-z]/gi, "");

    if (cleanedWord.length > maxWordLength) {
      longestWord = cleanedWord;
      maxWordLength = cleanedWord.length;
      maxVowelCount = countVowels(cleanedWord);
    } else if (cleanedWord.length === maxWordLength) {
      const vowelCount = countVowels(cleanedWord);
      if (vowelCount > maxVowelCount) {
        longestWord = cleanedWord;
        maxVowelCount = vowelCount;
      }
    }
  }

  return longestWord;
};

// Example usage:
const sentence =
  "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers";
const sentenceTwo = "Test hello";
const longestWord = findLongestWord(sentence);
const longestWordTwo = findLongestWord(sentenceTwo);
console.log(longestWord);
console.log(longestWordTwo);
