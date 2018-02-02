var Letter = function(word,guessedLetter){
	this.word = word;
	this.letter = guessedLetter;
	//this.lettersGuessed = [];

	this.positions = function() {
		var positions = new Array();
		for (var i = 0 ; i < this.word.length; i++) {
		    if (this.word[i] === this.letter){
		        positions.push(i);
		    }
		}
		return positions;
	};    
 };

 module.exports = Letter;


 
    