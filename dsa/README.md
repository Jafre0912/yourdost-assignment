Note1: I have already solved a similar problem recently on GeeksforGeeks here:
-> https://www.geeksforgeeks.org/problems/second-largest3735/1

Note2: if array is null or it's lenght is less then 2 then return -1;


Here's my Approach:
1)Created two variables — largest and secondLargest, both set to very small values(Long.MIN_VALUE).
then went through each element in the array:
2)If the number is greater than largest, update secondLargest = largest and made largest = number.
3)Else if the number is smaller than largest but greater than secondLargest, update secondLargest = number.
4)After checking all numbers, if secondLargest was never updated then return -1.


Complexity:
Time: O(N) because only one loop.
Space: O(1) because uses constant(no) extra space.


Run Command:
javac Solution.java
java Solution


O/P Sample:
Input: [1, 2, 3, 4, 5]
Output: 4

Input: [10]
Output: -1

Input: []

Input: [1, 2, 3, 4, 5]
Output: 4

Input: [10]
Output: -1

Input: []
Input: []
Output: -1
PS C:\jafar\yourdost-assignment\DSA>
