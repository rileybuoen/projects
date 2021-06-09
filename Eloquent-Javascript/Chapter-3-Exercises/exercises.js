// Minimum

// Write a function min that takes two arguments and returns their minimum

function min (a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

// Solution

// function min(a, b) {
//     if (a < b) return a;
//     else return b;
// }

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

// Recursion

// Define a recursive function isEven corresponding to this description.
// The function should accept a single parameter (a positive, whole number) and return a boolean.
// Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?

function isEven(num) {
    function find(current) {
        if (current === 0) {
            return true;
        } else if (current === 1) {
            return false;
        } else if (current < 0) {
            return  isEven(-current);
        } else {
            return find(current - 2);
        }
    }
    return find(num);
}

// Solution

// function isEven(n) {
//     if (n == 0) return true;
//     else if (n == 1) return false;
//     else if (n < 0) return isEven(-n);
//     else return isEven(n - 2);
// }

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??

// Bean Counting

function countBs(string) {
    // let count = 0;
    // for (let i = 0; i < string.length; i++) {
    //     if (string[i] === "B") {
    //         count++;
    //     }
    // }
    // return count;
    return countChar(string, "B");
}

function countChar(string, char) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === char) {
            count++;
        }
    }
    return count;
}

// Solution

// function countChar(string, ch) {
//     let counted = 0;
//     for (let i = 0; i < string.length; i++) {
//       if (string[i] == ch) {
//         counted += 1;
//       }
//     }
//     return counted;
// }
  
//   function countBs(string) {
//     return countChar(string, "B");
// }

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));