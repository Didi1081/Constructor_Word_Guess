var Letter = require('./letters');




// var test = new Letter('e');

// console.log(test);

function Word (randomWord){
    this.lettersArray = [];

    this.makeLetters = function() {
        var wordSplit = randomWord.split("");

        wordSplit.forEach(element => {
            var letter = new Letter(element);
            this.lettersArray.push(letter);
        })

    }
    this.checkGuess = function(userGuess){
        this.lettersArray.forEach( letter => {
            letter.checkChar(userGuess);
        });

        console.log(this.lettersArray);

    }
    this.print = function(){
        this.lettersArray.forEach( ele => {
          console.log(ele.isGuessed())  
    })
   
}


}

var newWord = new Word('pizza');
newWord.makeLetters()
newWord.checkGuess('z');
newWord.checkGuess('p');
newWord.print();
