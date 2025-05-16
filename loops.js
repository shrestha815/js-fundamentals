// simple for loop
// for(let i =0; i < 10; i++){
//     console.log("The value of i is: ",i);
// }

//for loop with sum of first 10 numbers
let sum = 0;
for (let i =1; i <=10; i++){
    sum += i;
}
console.log("Using a basic for loop, The sum of numbers from 1 to 10 is: ", sum);

// while loop for the same process
// a while loop is entry controlled as we check the condition before executing the loop
let summation = 0;
let j = 10;
while(j >= 0) {
    summation += j;
    j--;
}
console.log("Using a basic while loop, The sum of numbers from 10 to 0 is: ", summation);

// do while loop for the same process
// a do while loop is exit controlled as we check the condition after executing the loop
// this means that the loop will execute at least once
summation = 0;
j = 10;
do {
    summation += j;
    j--;
} while (j >= 0);

console.log("Using a do while loop, The sum of numbers from 10 to 0 is: ", summation);


// for of loop
let size = 0;
let fullName =  "Safal";
for (let letter of fullName ) {
    size++;
}
console.log("The size of the string is: ", size);

//for in loop
// for in loop is used to iterate over the properties of an object
// we have key and value pairs in an object
let person = {
    name: "Safal",
    age: 25,
    city: "Kathmandu",
    Degree: "Bachelors In Computer Scienece",
};
for (let key in person) {
    console.log(key + ": " + person[key]);
}

person.city = "New York";
console.log("The updated city is: ", person.city);

person.favoriteColor = "Blue";
console.log("The updated favorite color is: ", person.favoriteColor);

delete person.favoriteColor;