/*
 * Problem: Given an array of integers, return the second largest unique number
 * in the array. If it doesn’t exist, return -1.
 */

function findSecondLargestUnique(nums) {
  // 1. Use a Set to get only unique numbers from the array.
  const uniqueNums = [...new Set(nums)];

  // 2. Sort the unique numbers in descending order.
  uniqueNums.sort((a, b) => b - a);

  // 3. Check if a second largest number exists (i.e., array has at least 2 elements).
  if (uniqueNums.length >= 2) {
    // 4. Return the second element (index 1).
    return uniqueNums[1];
  } else {
    // 5. If there is no second largest unique number, return -1.
    return -1;
  }
}

// --- Sample Inputs & Outputs ---

// Example 1:
const input1 = [3, 5, 2, 5, 6, 6, 1];
console.log(`Input: [${input1}]`);
console.log(`Output: ${findSecondLargestUnique(input1)}`); // Expected: 5

console.log("---");

// Example 2:
const input2 = [7, 7, 7];
console.log(`Input: [${input2}]`);
console.log(`Output: ${findSecondLargestUnique(input2)}`); // Expected: -1

console.log("---");

// Additional Test Cases:
const input3 = [1, 2, 3, 4, 5];
console.log(`Input: [${input3}]`);
console.log(`Output: ${findSecondLargestUnique(input3)}`); // Expected: 4

const input4 = [10];
console.log(`Input: [${input4}]`);
console.log(`Output: ${findSecondLargestUnique(input4)}`); // Expected: -1

const input5 = [];
console.log(`Input: [${input5}]`);
console.log(`Output: ${findSecondLargestUnique(input5)}`); // Expected: -1