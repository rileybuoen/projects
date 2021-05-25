const randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber);

let previousGuesses = [];
const results = ["Congratulations! You got it right!", "Wrong!"];
const hints = ["Guess too high!", "Guess too low!"];

const guessesLabel = document.getElementById('guesses');
const resultLabel = document.getElementById('result');
const hintLabel = document.getElementById('hint');

function myfuntion() {
    let guess = document.getElementById('inputBox').value;
    if (guess === randomNumber) {
        console.log("Yes");
        // guessesLabel.innerHTML = previousGuesses.join(" ");
        // resultLabel.innerHTML = result[0];
    } else if (guess > randomNumber) {
        console.log("No");
        // previousGuesses.push(guess);
        // guessesLabel.innerHTML = previousGuesses.join(" ");
        // resultLabel.innerHTML = results[1];
        // resultLabel.style.backgroundColor = "red";
        // hintLabel.innerHTML = hints[0];
    } else if (guess < randomNumber) {
        console.log("No");
        // previousGuesses.push(guess);
        // guessesLabel.innerHTML = previousGuesses.join(" ");
        // resultLabel.innerHTML = results[1];
        // resultLabel.style.backgroundColor = "red";
        // hintLabel.innerHTML = hints[1];
    } else {
        console.log("There was an error!");
    }
}

// when the button is pressed, call main function
const button = document.getElementById('submitButton');
button.addEventListener("click", myfuntion);