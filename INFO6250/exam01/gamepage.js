//jshint esversion:6
const gameWeb = {
  gamePage: function(words) {
    return `
    <!DOCTYPE html>
    <html>
      <head>

        <link rel="stylesheet" href="/gamepage.css">
        <title>Word Guessing Game</title>
      </head>
      <body>
      <div id="game-page">
        <div class="display-panel">
        <h1>Word Guessing Game</h1>
        <p>We have a wordbank which contains several ${words.wordBank[0].length}-letter-word. See if you can guess it. </p>
          <div class="game-rule">
            <h3>Rules:</h3>
            <ul>
            If your guess contains the letter of Secret Word, you will get a number of matched letter.
            </ul>
            <ul>
            If your guess's length is longer than the secret word length, you will get a warning.
            </ul>
            <ul>
            If your guess's letters matched all of secert word, but your guess is not in the wordbank, you will get a warning.
            </ul>
            <ul>
            If your guess is the secret word, you will get a notification about winning. You can restart the game!
            </ul>
            </div>
      </div>
        <div class="operate-panel">
        ${gameWeb.getGuess(words)}
        ${gameWeb.getGameRestart()}
        ${gameWeb.getPreviousGuess(words)}
        ${gameWeb.getNotification(words)}
        </div>

      </div>
      </body>
    </html>

    `;
  },

  getGuess: function(words) {
    return `<div class="guess-panel">
        <form action='/game' method="POST">
          <label for="guessField">Enter a guess:</label>
          <input type="text" id="guessField" name="guessField" class="guessField" value="">
          <input type="submit" class="guessSubmit" name="guessSubmit" value="Submit">
          <input class="userName" name="userName" value=${words.currentUser} type="hidden"/>
          </form>
        </div>`;
  },

  getPreviousGuess: function(words) {
    return Object.values(words.previousGuessList).map(previousGuess=>
      `
        <span class="previousGuess">
          ${previousGuess}
          </span>`).join('');
  },

  getNotification: function(words) {
    return words.texts.map(text =>
      ` <div class="notification">
        <p class="text">${text}</p>
        </div>`).join('');
  },

  getGameRestart: function(){
    return `
    <div class="restart">
      <form action='/' method='POST'>
      <button type="submit" name="userName" value="">Restart Game</button>
      </form>
    </div>
    `;
  }

};

module.exports = gameWeb;
