/*
Challenge 1:
Write a JavaScript function that reverses a number.
Sample Data and output:
Example: 
x = 32243;
Expected Output: 34223
*/

function reverseString(inputString) {
    return inputString.split('').reverse().join('');
}

const userInput = 'Harsh Singh CS';
const reversedString = reverseString(userInput);
console.log(reversedString);
