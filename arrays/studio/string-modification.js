const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let newStr = (str.slice(3,10)+str.slice(0,3));

//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`${str} and ${newStr}.`);
//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let num = input.question("How many letters will be relocated? ");
let newStr2 = (str.slice(num,10)+str.slice(0,num));

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if (num > str.length){
    console.log(`Reduce input number to ${str.length}`);
} else { 
    console.log(`${newStr2}`);
}