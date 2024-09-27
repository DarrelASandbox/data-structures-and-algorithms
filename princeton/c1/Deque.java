
/******************************************************************************
 	1.	Node<Item> Class: A helper class that represents each node in the doubly linked list.
  2.	Core Operations:
	    •	addFirst, addLast: Add new nodes at the front and back, respectively.
	    •	removeFirst, removeLast: Remove nodes from the front and back, respectively, while handling empty cases.
  3.	DequeIterator:
	    •	Implements Iterator<Item> to allow easy iteration from front to back.
	    •	The remove() method throws UnsupportedOperationException as required.
  4.	Edge Case Handling:
	    •	Null checks in addFirst and addLast.
	    •	Checks for empty deque in removeFirst and removeLast.
	    •	Iteration stops when next() has no more elements, and remove() is not supported.
  5.	Unit Testing:
	  •	Verifies the functionality and handling of edge cases, printing outputs to confirm correctness.

  Performance
	  •	Time Complexity: All operations (addFirst, addLast, removeFirst, removeLast, iterator) are  O(1) .
	  •	Space Complexity: Uses a doubly linked list to ensure efficient memory usage, adhering to the memory requirements.
  ******************************************************************************/

import java.util.Iterator;
import java.util.NoSuchElementException;

public class Deque<Item> implements Iterable<Item> {

  private Node<Item> first; // front of the deque
  private Node<Item> last; // back of the deque
  private int size; // number of items in the deque

  // Node class for a doubly linked list
  private static class Node<Item> {
    private Item item;
    private Node<Item> next;
    private Node<Item> prev;
  }

  // construct an empty deque
  public Deque() {
    first = null;
    last = null;
    size = 0;
  }

  // is the deque empty?
  public boolean isEmpty() {
    return size == 0;
  }

  // return the number of items on the deque
  public int size() {
    return size;
  }

  // add the item to the front
  public void addFirst(Item item) {
    if (item == null)
      throw new IllegalArgumentException("Cannot add null item.");
    Node<Item> oldFirst = first;
    first = new Node<>();
    first.item = item;
    first.next = oldFirst;
    first.prev = null;
    if (isEmpty())
      last = first;
    else
      oldFirst.prev = first;
    size++;
  }

  // add the item to the back
  public void addLast(Item item) {
    if (item == null)
      throw new IllegalArgumentException("Cannot add null item.");
    Node<Item> oldLast = last;
    last = new Node<>();
    last.item = item;
    last.prev = oldLast;
    last.next = null;
    if (isEmpty())
      first = last;
    else
      oldLast.next = last;
    size++;
  }

  // remove and return the item from the front
  public Item removeFirst() {
    if (isEmpty())
      throw new NoSuchElementException("Deque is empty.");
    Item item = first.item;
    first = first.next;
    size--;
    if (isEmpty())
      last = null;
    else
      first.prev = null;
    return item;
  }

  // remove and return the item from the back
  public Item removeLast() {
    if (isEmpty())
      throw new NoSuchElementException("Deque is empty.");
    Item item = last.item;
    last = last.prev;
    size--;
    if (isEmpty())
      first = null;
    else
      last.next = null;
    return item;
  }

  // return an iterator over items in order from front to back
  public Iterator<Item> iterator() {
    return new DequeIterator(first);
  }

  private class DequeIterator implements Iterator<Item> {
    private Node<Item> current;

    public DequeIterator(Node<Item> first) {
      current = first;
    }

    public boolean hasNext() {
      return current != null;
    }

    public Item next() {
      if (!hasNext())
        throw new NoSuchElementException();
      Item item = current.item;
      current = current.next;
      return item;
    }

    public void remove() {
      throw new UnsupportedOperationException();
    }
  }

  // unit testing (required)
  public static void main(String[] args) {
    Deque<Integer> deque = new Deque<>();

    // Test adding elements to the front and back
    deque.addFirst(1);
    deque.addLast(2);
    deque.addFirst(0);
    System.out.println("Expected size (3): " + deque.size());

    // Test iterator
    System.out.print("Deque contains (front to back): ");
    for (int i : deque) {
      System.out.print(i + " ");
    }
    System.out.println();

    // Test removing elements from the front and back
    System.out.println("Remove first: " + deque.removeFirst()); // should be 0
    System.out.println("Remove last: " + deque.removeLast()); // should be 2
    System.out.println("Expected size (1): " + deque.size());

    // Edge case tests
    try {
      deque.addFirst(null);
    } catch (IllegalArgumentException e) {
      System.out.println("Caught expected IllegalArgumentException for addFirst(null)");
    }

    try {
      deque.removeFirst();
      deque.removeFirst(); // this should throw an exception since deque is now empty
    } catch (NoSuchElementException e) {
      System.out.println("Caught expected NoSuchElementException for removeFirst() on empty deque");
    }

    // Properly handle the UnsupportedOperationException for the iterator's remove method
    try {
      deque.iterator().remove();
    } catch (UnsupportedOperationException e) {
      System.out.println("Caught expected UnsupportedOperationException for iterator().remove()");
    }
  }
}