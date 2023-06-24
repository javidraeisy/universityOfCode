function addBefore(num) {
  var totalNum = 0;
  for (let i = 1; i <= num; i++) {
    totalNum += i;
  }
  return totalNum;
}

console.log(addBefore(5));
console.log(addBefore(2));
console.log(addBefore(897));

// Reference
// https://www.programiz.com/javascript/examples/sum-natural-number

/* Given Helpful Links
 Techniques for Adding the Numbers 1 to 100
    - https://betterexplained.com/articles/techniques-for-adding-the-numbers-1-to-100/
 Loops and Iteration
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
 1 + 2 + 3 + 4 + ⋯
    - https://en.wikipedia.org/wiki/1_%2B_2_%2B_3_%2B_4_%2B_⋯
*/