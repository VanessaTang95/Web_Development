//jshint esversion:6
/*
suppose:
 all the word in wordBank is in it lowercase
 all the word have the same length
*/

const wordBank = ["tea", "eat", "tee", "pea", "pet", "ape"];
const guess = "";
let guessCount = 0;
const previousGuessList = [];
const texts = [];

function selectWord(arr) {
  let index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

let secretWord = selectWord(wordBank);

console.log("secretWord:" + secretWord);


function judge(guess) {

  let matchCount = 0;
  let lowerWord = guess.toLowerCase();

  let temp = secretWord;
  let temp2 = lowerWord;
  for (let i = 0; i < temp.length; i++) {
    for (let j = 0; j < temp2.length; j++) {
      let charA = temp.charAt(i);
      let charB = temp2.charAt(j);
      if (charA === charB) {
        matchCount++;
        temp = temp.replace(charA, '0');
        temp2 = temp2.replace(charB, '1');
      }
    }
  }
  console.log("secretWord:" + secretWord);
  let result = {
    "guessCount": guessCount,
    "previousGuess": guess,
    "matchCount": matchCount
  };
  return result;
}


function addTexts(guessResult) {

  let matchCount = guessResult.matchCount;
  let lowerWord = guessResult.previousGuess.toLowerCase();
   if (lowerWord.length > secretWord.length) {
    texts.push("Invalid word!");
  } else if (matchCount === 0) {
    //nothing matched
    texts.push("Invalid word!");
    guessCount++;
  } else if (wordBank.indexOf(lowerWord) === -1) {
    //not in the wordbank
    texts.push("Invalid word!");
  } else if (matchCount === secretWord.length) {
    if (lowerWord.trim() === secretWord.toLowerCase().trim()) {
      //winning case
      texts.push("You win!");
    } else {
      texts.push(matchCount + " matches!");
      guessCount++;
    }
  } else {
    texts.push(matchCount + " matches!");
    guessCount++;
  }

}

function addPreviousGuess(p_Guess) {
  let check = previousGuessList.indexOf(p_Guess);
  if (check > -1) {
    texts.push("You already tried this word!");
  } else {
    previousGuessList.push(p_Guess);
  }
}

const words = {
  secretWord,
  selectWord,
  wordBank,
  judge,
  texts,
  addTexts,
  previousGuessList,
  addPreviousGuess
};

module.exports = words;
