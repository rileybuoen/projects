/*
Exercises from Chapter 2
of Eloquent Javascript
June 5, 2021
*/


// Looping a Triangle

let triangle = "#";
while (triangle.length < 8) {
    console.log(triangle)
    triangle += "#";
}

// FizzBuzz

for (let num = 0; num < 101; num++) {
    if ((num % 5) && (num % 3) === 0) {
        console.log("FizzBuzz")
    } else if (num % 3 === 0) {
        console.log("Fizz");
    } else if (num % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(num)
    }
}


// Chessboard

let size = 8;
for (let i = 0; i < size; i++) {
    if (i % 2 === 0) {
        let row = "";
        for (let j = 0; j < size; j++) {
            if (j % 2 === 0) {
                row += " ";
            } else {
                row += "#";
            }
        }
        console.log(row);
    } else {
        let row = "";
        for (let k = 0; k < size; k++) {
            if (k % 2 === 0) {
                row += "#";
            } else {
                row += " ";
            }
        }
        console.log(row);
    }
}
