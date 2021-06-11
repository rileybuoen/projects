// May 23, 2021

class Game {
    constructor() {
        // the guess
        this.guess = 0;
        // the random number
        this.num = Math.floor(Math.random() * 100);
        console.log(this.num);
        // turn counter
        this.counter = 10;
        // game state
        this.gameState = false;
    }
    getState() {
        // returns the current game state
        return this.gameState;
    }
    getGuess() {
        if (game.getState() === false) {
            // gets the input and converts it from a string to and integer
            this.guess = parseInt(document.getElementById("inputBox").value, 10);
            console.log(this.guess);

            // calls getHint
            game.getHint(this.guess);
        } else {
            console.log("The Game is Over")
        }
    }
    getHint(guess) {
        // compares the guess to the random number
        if (this.counter > 1 && guess > this.num) {
            this.counter--;

            console.log("Guess too high!");
            console.log(this.getTurnCount());

        } else if (this.counter > 1 && guess < this.num) {
            this.counter--;

            console.log("Guess too low!");
            console.log(this.getTurnCount());

        } else {
            game.guessCheck(guess);
        } 
    }
    getTurnCount() {
        return "Turns left: " + this.counter.toString();
    }
    guessCheck(guess) {
        // checks if guess is equal to the random number
        if (this.counter > 0 && guess === this.num) {
            console.log("You Win!");
            this.gameState = true;
        } else {
            console.log("Out of turns!");
            this.gameState = true;
        }
    }
}

let game = new Game();

// button
const button = document.getElementById("submitButton");
button.addEventListener("click", game.getGuess);