

class Game {
    constructor() {
        this.guess = "";
        this.num = Math.floor(Math.random() * 100);
    }
    getGuess() {
        this.guess = document.getElementById("inputBox").value;
        return this.guess;
    }
    getHint() {
        if (this.guess > this.num) {
            console.log("Guess too hight!");
            return "Guess too high!";    
        } else if (guess < number) {
            console.log("Guess too low!");
            return "Guess too low!";    
        } else {
            guessCheck(); 
        } 
    }
    guessCheck() {
        if (this.guess === this.num) {
            console.log("You Win!")
        } else {
            console.log("Try Again")
        }
    }
}

let game = new Game();

console.log(game.getGuess());

const button = document.getElementById("submitButton");
button.addEventListener("click", game.getGuess);