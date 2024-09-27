
/******************************************************************************
  1.	Command-Line Argument:
	  •	The program expects a single integer k. It will parse this and store it as an integer.
  2.	Reading Input:
	  •	The program uses StdIn.readString() to read strings from the input, which can be provided via redirection from a file or from standard input directly.
	  •	Each string is added to the RandomizedQueue.
  3.	Randomized Selection:
	  •	To ensure uniform randomness, the program calls rq.dequeue() k times, which will print k randomly chosen strings, each only once.
  4.	Performance:
	  •	Using the RandomizedQueue, the program ensures linear time relative to the input size because enqueue and dequeue operations are  O(1)  amortized.
	  •	The space used is linear in the size of n, where n is the number of strings read. This is within the requirement constraints.
  ******************************************************************************/

import edu.princeton.cs.algs4.StdIn;
import edu.princeton.cs.algs4.StdOut;

public class Permutation {
  public static void main(String[] args) {
    if (args.length != 1) {
      throw new IllegalArgumentException("Please provide a single integer k as the command-line argument.");
    }

    int k = Integer.parseInt(args[0]);
    RandomizedQueue<String> rq = new RandomizedQueue<>();

    // Read strings from standard input
    while (!StdIn.isEmpty()) {
      String item = StdIn.readString();
      rq.enqueue(item);
    }

    // Dequeue and print exactly k items
    for (int i = 0; i < k; i++) {
      StdOut.println(rq.dequeue());
    }
  }
}