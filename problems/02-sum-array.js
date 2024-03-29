/***********************************************************************
Write a recursive function called `sumArray` that takes an array of integers
and returns the value of all the integers added together. Your array may
include a mix of positive and negative integers!

Examples:

sumArray([1, 2, 3]); //  6
sumArray([0, 1, -3]); //  -2
sumArray([1, 2, 3, 4, 5]); // 15
***********************************************************************/

// function sumArray(arr) {
//   debugger;
//   if (arr.length === 0) {
//     return 0;
//   }

//   return arr[0] + sumArray(arr.slice(1));
// }

function sumArray(arr) {
  /// this checks if the arr is empty if it is it returns 0
if (arr.length === 0) {
  return 0;
}
// this stores the popped element
let ele = arr.pop();
// this calls the function again with the arr and adds the elements as the call stack comes back after the final call when popping of the frames because each frame evaluates to the ele
return sumArray(arr) + ele;
}

console.log(sumArray([1, 2, 3])); //  6

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumArray;
} catch (e) {
  module.exports = null;
}
