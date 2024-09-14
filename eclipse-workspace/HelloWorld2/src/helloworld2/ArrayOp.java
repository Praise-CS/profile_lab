package helloworld2;

public class ArrayOp{
	 public static void main(String[] args) {
	 int[] numbers = new int[10];
	 // Populate the array with numbers 1 to 10
	 for (int i = 0; i < numbers.length; i++) {
	 numbers[i] = i + 1;
	 }
	 // Display the array
	 System.out.println("Original Array:");
	 for (int i = 0; i < numbers.length; i++) {
	 System.out.print(numbers[i] + " ");
	 }
	 System.out.println();
	 // Calculate and display the sum of the array
	 int sum = 0;
	 for (int i = 0; i < numbers.length; i++) {
	 sum += numbers[i];
	 }
	 System.out.println("Sum of the Array: " + sum);
	 // Reverse and display the array
	 System.out.println("Reversed Array:");
	 for (int i = numbers.length - 1; i >= 0; i--) {
	 System.out.print(numbers[i] + " ");
	 }
	 System.out.println();
	 }
	}
