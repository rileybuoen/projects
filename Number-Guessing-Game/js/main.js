// May 23, 2021

class Game {
    constructor() {
        // the guess
        this.guess = 0;
        // the random number
        this.num = Math.floor(Math.random() * 100);
        console.log(this.num);
    }
    getGuess() {
        // gets the input and converts it from a string to and integer
        this.guess = parseInt(document.getElementById("inputBox").value, 10);
        console.log(this.guess);

        // calls getHint
        game.getHint(this.guess);
    }
    getHint(guess) {
        // compares the guess to the random number
        if (guess > this.num) {
            console.log("Guess too high!");
            return "Guess too high!";
        } else if (guess < this.num) {
            console.log("Guess too low!");
            return "Guess too low!";
        } else {
            game.guessCheck(guess);
        } 
    }
    guessCheck(guess) {
        // checks if guess is equal to the random number
        if (guess === this.num) {
            console.log("You Win!")
        } else {
            console.log("Try Again")
        }
    }
}

let game = new Game();

// button
const button = document.getElementById("submitButton");
button.addEventListener("click", game.getGuess);