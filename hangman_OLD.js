var inquirer = require("inquirer");
var Word = require("./word.js");
var Letter = require("./letter.js");

// // creates the printInfo method and applies it to all programmer objects
// Programmer.prototype.printInfo = function() {
//   console.log("Name: " + this.name + "\nPosition: " + this.position +
//   "\nAge: " + this.age + "\nLanguages: " + this.language);
// };

function Game(){
  var guessesLeft = 3;
  var newWord = new Word();
  newWord.pickRandomWord(); 
  console.log("\n\nnew ProgressWord = " + newWord.progressWord);    
  var guessLetter = function() {
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

Game();




  
