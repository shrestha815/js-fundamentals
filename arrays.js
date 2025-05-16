//An array of fruits
let fruits =["Apple", "Banana", "Orange", "Mango"];
let number = [1, 2, 3, 4, 5];

//array concatenation
let newArray = fruits.concat(number);
console.log(newArray);
console.log(fruits.length)

for (let fruit of fruits) {
    console.log("My favorite fruits are : " + fruit);
}

fruits.push("Pineapple");
fruits.push("Grapes");
let rem = fruits.pop();
console.log("The removed fruit is: " + rem );

//shift() removes the first element from an array
//unshift() adds an element to the beginning of an array
fruits.shift();
fruits.unshift("Strawberry");
console.log("The first fruit is: " + fruits[0]);


//template literals
let a  = 5;
let b = 10;

let sum = a + b;
console.log(`The sum of ${a} and ${b} is ${sum}`);

