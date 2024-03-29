/*
Multiples of 3 and 5

Problem 1
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/

let count = 0;

function getSum(upTo) {
  for (let i = 1; i < upTo; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      count += i;
    }
  }
  return count;
}

console.log(getSum(1000));