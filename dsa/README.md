# Part 1: DSA - Second Largest Unique Number

## Problem
Given an array of integers, return the **second largest unique number** in the array. If it doesn’t exist, return -1.

## Approach
My approach to solving this problem is as follows:

1.  **Handle Uniqueness:** I first create a `Set` from the input array. This automatically removes all duplicate numbers, leaving only unique elements.
2.  **Convert and Sort:** I convert the `Set` back into an array and then sort this array in descending order (from largest to smallest).
3.  **Find Second Largest:**
    * If the sorted array of unique numbers has two or more elements, the second largest number will be at index 1.
    * If the array has fewer than two elements (meaning there was 0 or 1 unique number), then a second largest number does not exist, and I return -1 as per the requirement.

## Complexity
* **Time Complexity:** $O(N \log N)$
    * Creating the `Set` is $O(N)$.
    * Sorting the unique numbers is $O(K \log K)$, where $K$ is the number of unique elements ($K \le N$).
    * In the worst case, all $N$ elements are unique, making the dominant operation the sort, which is $O(N \log N)$. This is better than the required $O(N^2)$.
* **Space Complexity:** $O(K)$ or $O(N)$ in the worst case, to store the unique elements in the `Set` and the new array.

## How to Run
You can run this solution using Node.js:
```bash
node solution.js