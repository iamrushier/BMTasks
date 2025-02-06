// Task 5: Callback Functions with map(), filter(), and **reduce()
// * Create a processData function that accepts an array of numbers
//      and a callback.
// * If the callback is filterOdd, filter out even numbers.
// * If the callback is doubleNumbers, double each number.
// * If the callback is calculateSum, return the sum of all numbers.
// Bonus Task: Implement a callback to find the maximum number in the array.

function processData(arr, func) {
  return func(arr);
}
const filterOdd = (arr) => arr.filter((num) => num % 2 !== 0);

const doubleNumbers = (arr) => arr.map((num) => num * 2);

const calculateSum = (arr) => arr.reduce((prev, curr) => prev + curr);

const getMax = (arr) => arr.reduce((prev, curr) => (prev > curr ? prev : curr));

arr = [65, 34, 1, 34, 5];

console.log("Odd numbers filtered:", processData(arr, filterOdd));
// Odd numbers filtered: [ 65, 1, 5 ]

console.log("Doubled numbers:", processData(arr, doubleNumbers));
// Doubled numbers: [ 130, 68, 2, 68, 10 ]

console.log("Sum of numbers:", processData(arr, calculateSum));
// Sum of numbers: 139

console.log("Maximum of numbers:", processData(arr, getMax));
// Maximum of numbers: 65
