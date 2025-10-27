import java.util.Arrays;

public class SndLargest {

    public int findSecondLargestUnique(int[] nums) {
        if (nums == null || nums.length < 2) {  // if array is null or it's lenght is less then 2 then return -1;
            return -1;
        }

        long largest = Long.MIN_VALUE; 
        long secondLargest = Long.MIN_VALUE;

        for (int num : nums) {
            if (num > largest) {
                secondLargest = largest;
                largest = num;
            } else if (num > secondLargest && num < largest) {
                secondLargest = num;
            }
        }

        if (secondLargest == Long.MIN_VALUE) {
            return -1;
        } else {
            return (int) secondLargest;
        }
    }

    public static void main(String[] args) {
        SndLargest sol = new SndLargest();

        int[] input1 = {3, 5, 2, 5, 6, 6, 1};
        System.out.println("Input: " + Arrays.toString(input1));
        System.out.println("Output: " + sol.findSecondLargestUnique(input1));
        System.out.println(" ");

        int[] input2 = {7, 7, 7};
        System.out.println("Input: " + Arrays.toString(input2));
        System.out.println("Output: " + sol.findSecondLargestUnique(input2));
        System.out.println(" ");

        int[] input3 = {1, 2, 3, 4, 5};
        System.out.println("Input: " + Arrays.toString(input3));
        System.out.println("Output: " + sol.findSecondLargestUnique(input3));
        System.out.println(" ");

        int[] input4 = {10};
        System.out.println("Input: " + Arrays.toString(input4));
        System.out.println("Output: " + sol.findSecondLargestUnique(input4));
        System.out.println(" ");

        int[] input5 = {};
        System.out.println("Input: " + Arrays.toString(input5));
        System.out.println("Output: " + sol.findSecondLargestUnique(input5));
    }
}