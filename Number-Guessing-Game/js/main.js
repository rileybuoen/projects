// May 23, 2021

const guesses = [];

class Game {
    constructor() {
        this.guess = 0;
        this.num = Math.floor(Math.random() * 100);
        console.log(this.num);
        this.counter = 10;
        this.gameOver = false;
    }
    getState() {
        // returns the current game state
        return this.gameOver;
    }
    // getGuess() {
    //     return parseInt(document.getElementById("inputBox").value, 10);
    // }
    guessCheck() {
        this.guess = parseInt(document.getElementById("inputBox").value, 10);
        if (game.getState() === false && !guesses.includes(this.guess)) {
            game.getHint(this.guess);
            guesses.push(this.guess);
            document.getElementById("guesses").innerHTML = guesses;
        } else if (guesses.includes(this.guess)) {
            console.log("Already guessed");
        } else {
            console.log("Game Over!");
        }
    }
    // getGuess() {
    //     if (game.getState() === false && !guesses.includes(this.guess)) {

    //         // gets the input and converts it from a string to and integer
    //         this.guess = parseInt(document.getElementById("inputBox").value, 10);
    //         console.log(this.guess);

    //         // calls getHint
    //         game.getHint(this.guess);
    //     } else if (guesses.includes(this.guess)) {
    //         console.log("Already guessed!")
    //     } else {
    //         console.log("The Game is Over")
    //     }
    // }
    getHint(guess) {
        // compares the guess to the random number
        if (this.counter > 1 && guess > this.num) {
            this.counter--;

            document.getElementById("hint").innerHTML = "Guess too high!";
            document.getElementById("counter").innerHTML = this.getTurnCount();
            console.log("Guess too high!");
            console.log(this.getTurnCount());

        } else if (this.counter > 1 && guess < this.num) {
            this.counter--;

            document.getElementById("hint").innerHTML = "Guess too Low!";
            document.getElementById("counter").innerHTML = this.getTurnCount();
            console.log("Guess too low!");
            console.log(this.getTurnCount());

        } else if (isNaN(guess)) {
            console.log("Not a number");
        } else {
            game.winCheck(guess);
        } 
    }
    getTurnCount() {
        return "Turns left: " + this.counter.toString();
    }
    winCheck(guess) {
        // checks if guess is equal to the random number
        if (this.counter > 0 && guess === this.num) {
            console.log("You Win!");
            this.gameOver = true;
        } else {
            console.log("Out of turns!");
            this.gameOver = true;
        }
    }
}

let game = new Game();

const button = document.getElementById("submitButton");
button.addEventListener("click", game.guessCheck);