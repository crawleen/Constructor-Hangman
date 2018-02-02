var Word = require("./word.js");
var Letter = require("./letter.js");

var Game = function(){
  this.guessesLeft = 3;
  var newWord = new Word();
  newWord.pickRandomWord(); 
    
  this.guessLetter = function() {
  	console.log("\n\nnew ProgressWord = " + newWord.progressWord);  
    if (guessesLeft > 0) {    
      inquirer
        .prompt([
            {
              type: "input",
              message: "Guess a Letter!",
              name: "letter"
            }
      ]).then(function(inquirerResponse) {      
          var letterGuessed = inquirerResponse.letter.toUpperCase();
          var newLetter = new Letter(newWord.currentWord,letterGuessed);
          var positions = newLetter.positions();
          
          if(positions.length ===0){
            guessesLeft--;
            console.log("\n\nINCORRECT!!!!");
            console.log(guessesLeft + " guesses remaining!!!");
          }
          else{
            console.log("\n\nCORRECT!!!!");
            for (var i = 0 ; i < positions.length; i++) {
              newWord.progressWord[positions[i]] = letterGuessed;
            }
            
            newWord.progressWord.join(" ");
            console.log("\n\nnew ProgressWord = " + newWord.progressWord); 
            
            if(newWord.guesses() === 0){
              console.log("\n\nYou got it right! Next Word!");
              Game();
            }
            else
            {
              guessLetter();
            }   
          }           
      });
    }
    else {
      console.log("END OF GAME!");
    }
  };

  guessLetter();
}

module.exports = Game;