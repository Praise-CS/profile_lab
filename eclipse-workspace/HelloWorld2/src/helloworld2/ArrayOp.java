package helloworld2;

import java.util.Arrays;
public class ArrayOp {
	 public static void main(String[] args)
	 {
	 int[] numbers = new int[10];
	 // Populate the array with numbers 1 to 10
	 for (int index = 0; index < numbers.length; index++)
	 {
	 numbers[index] = index + 1;
	 }
	 // Display the array using Arrays.toString()
	 System.out.println("Original Array:"+  Arrays.toString(numbers));
	
	 System.out.println();
	 // Calculate and display the totalSum of the array
	 int totalSum = 0;
	 for (int index = 0; index < numbers.length; index++)
	 {
	 totalSum += numbers[index];
	 }
	 System.out.println("Sum of the Array: " + totalSum);
	 // Reverse and display the array using Arrays.toString()
	 System.out.println("Reversed Array:" + Arrays.toString(numbers));
	
	 System.out.println();
	 }
	}

