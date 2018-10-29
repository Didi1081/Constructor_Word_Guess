


function Letter (character) {
    this.character = character;
    this.guess = false;
    this.isGuessed = function(){
        if(this.guess){
            return this.character
        }else {
            return '_'
        }
    }
    this.checkChar = function(guessChar) {
        if(guessChar === this.character) {
            console.log('in true')
            this.guess = true
        }
    }
}


// var a = new Letter('b');
// var newLetter = new Letter('z');
// var whatever = new  Letter('o');
// console.log(a);
// console.log(newLetter);

module.exports = Letter;

