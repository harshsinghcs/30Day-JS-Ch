/*
Challenge 6
Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum.
*/
function sum(a,b){
    return(a === b) ? 6 * a : a + b
}
console.log("1 + 1: " + sum(1,1))
console.log("1 + 2: " + sum(1,2))