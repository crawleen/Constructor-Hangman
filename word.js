var Word = function() {
	this.words = ["PITCHFORK", "ARRAY", "INFERNO", "INFINITY", "FUNCTION","SATAN","PURGATORY","PERDITION","UNDERWORLD","OBJECT","VARIABLE","CONSOLE"];
	this.progressWord =  [];
  this.currentWord = "";

  this.pickRandomWord = function(){
    this.currentWord = this.words[Math.floor(Math.random() * this.words.length)].toUpperCase();
    //console.log("Current Word = " + this.currentWord);

    for (var i = 0; i < this.currentWord.length; i++) {
      this.progressWord[i] = "__"; 
    } 
  };
  this.guesses = function () {
      var toGuess = 0;
      for (var i in this.progressWord) {
          if (this.progressWord[i] === "__")
              toGuess++;
      }
      return toGuess;
  };
};

Word.prototype.printWord = function() {
  console.log("\n\n" + this.progressWord.join(" "));
};

module.exports = Word;

