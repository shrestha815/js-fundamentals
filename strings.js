let fullName = 'John Doe';

//every string has a length property, spaces are also counted
console.log("The length of the string is "+ fullName.length); // 8

//accessing characters in a string
console.log(fullName[5])

//changing charaters into upper case
console.log(fullName.toUpperCase()) // JOHN DOE
///changing charaters into lower case
console.log(fullName.toLowerCase()) // john doe

//strings are immutable
// we cannot change the value of a string

//example of trimming 
// trimming is removing the spaces from the start and end of a string
let str = "   Hello World!   ";
console.log(str.trim()); // "Hello World!"