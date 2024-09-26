
/******************************************************************************
 *  Compilation:  javac FixedCapacityStack.java
 *  Execution:    java FixedCapacityStack
 *  Dependencies: StdIn.java StdOut.java
 *
 *  Generic stack implementation with a fixed-size array.
 *
 *  % more tobe.txt
 *  to be or not to - be - - that - - - is
 *
 *  % java FixedCapacityStack 5 < tobe.txt
 *  to be not that or be
 *
 *  Remark:  bare-bones implementation. Does not do repeated
 *  doubling or null out empty array entries to avoid loitering.
 *
 ******************************************************************************/

import java.util.Iterator;
import java.util.NoSuchElementException;

import edu.princeton.cs.algs4.StdIn;
import edu.princeton.cs.algs4.StdOut;

public class FixedCapacityStack<Item> implements Iterable<Item> {
  private Item[] a; // holds the items
  private int n; // number of items in stack

  // create an empty stack with given capacity
  public FixedCapacityStack(int capacity) {
    a = (Item[]) new Object[capacity]; // no generic array creation
    n = 0;
  }

  public boolean isEmpty() {
    return n == 0;
  }

  public void push(Item item) {
    a[n++] = item;
  }

  public Item pop() {
    return a[--n];
  }

  public Iterator<Item> iterator() {
    return new ReverseArrayIterator();
  }

  // an array iterator, in reverse order
  public class ReverseArrayIterator implements Iterator<Item> {
    private int i = n - 1;

    public boolean hasNext() {
      return i >= 0;
    }

    public Item next() {
      if (!hasNext())
        throw new NoSuchElementException();
      return a[i--];
    }
  }

  public static void main(String[] args) {
    int max = Integer.parseInt(args[0]);
    FixedCapacityStack<String> stack = new FixedCapacityStack<String>(max);
    while (!StdIn.isEmpty()) {
      String item = StdIn.readString();
      if (!item.equals("-"))
        stack.push(item);
      else if (stack.isEmpty())
        StdOut.println("BAD INPUT");
      else
        StdOut.print(stack.pop() + " ");
    }
    StdOut.println();

    // print what's left on the stack
    StdOut.print("Left on stack: ");
    for (String s : stack) {
      StdOut.print(s + " ");
    }
    StdOut.println();
  }
}
