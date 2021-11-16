//////////////////PROBLEM 1////////////////////
/* Create a copy of the faveColors array called 'colorCopy' 
using the slice method. */


//CODE HERE
const faveColors = ['red', 'green', 'black']
let colorCopy = faveColors.splice(0,1,2)

//////////////////PROBLEM 2////////////////////
/* Add a fourth color to the end of the 'colorCopy' 
array using the push method. */

//CODE HERE
let colorCopy = ['red','green','black']
colorCopy.push('pink')
//////////////////PROBLEM 3////////////////////
/*
  Using an array method, create a new array called 'middleNums' 
  from the 
  numbers array that will capture only the middle numbers (2, 3, 4).
*/

//CODE HERE
let arrmiddleNums = [2, 3, 4]
  console.log (arrmiddleNums [1])



//////////////////PROBLEM 4////////////////////
/* 
  Create a function called 'bigOrSmall' that takes in one parameter, 
  'arr', 
  which will be an array of numbers. 
  Inside of the bigOrSmall function, create a new array called
   'answers'. 
  Then, loop over the passed in arr parameter, and check to see 
  if the number in the
  array is GREATER than 100. 
  If it is, push 'big' as a string to the answers array. 
  If the number is LESS than or EQUAL to 100, push 'small' 
  as a string 
  to the answers array. 
  Return the answers array inside of the function.
*/

// CODE HERE
function bigOrSmall(arr){
  answersArr =[44,65,77,88,95,45]
 for(let i = 0; i > 100; i++){
   answersArr[i]
 }
 if (answersArr > 100) {
   console.log('big')
 }
 if (answersArr < 100) {
  console.log('small')
}}
