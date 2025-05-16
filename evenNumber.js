//find even numbers between 1-100
let i = 1;
for (i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log("Even numbers between 1-100 are: " + i);
    }
}


//
let positiveNumber = prompt("Enter a positive number: ");
let sum = 0;
for (let k = 1; k <= positiveNumber; k++) {
    sum += k;
}

console.log("The sum of numbers from 1 to " + positiveNumber + " is: " + sum);

