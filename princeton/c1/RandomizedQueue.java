
/******************************************************************************
  Explanation

  1.	Resizing Array:
	  •	The RandomizedQueue uses a dynamic resizing array (queue) to manage items. This ensures that enqueue and dequeue are performed in amortized constant time.
	  •	The resize method doubles or halves the array size when necessary to keep operations efficient and prevent excessive memory usage.
  2.	Randomized Behavior:
	  •	The dequeue method selects a random item, swaps it with the last item, and removes it. This ensures that the item removed is chosen uniformly at random.
	  •	The sample method picks a random index without removing the item.
  3.	Iterator:
	  •	The iterator creates a copy of the current items, shuffles them, and iterates over the shuffled copy. This ensures that each iterator operates independently and maintains random order.
	  •	The shuffle method uses the Fisher-Yates shuffle algorithm for unbiased random shuffling.
  4.	Edge Case Handling:
	  •	IllegalArgumentException is thrown when trying to enqueue a null item.
	  •	NoSuchElementException is thrown when calling sample or dequeue on an empty queue.
	  •	UnsupportedOperationException is thrown for the remove method of the iterator.
  5.	Unit Testing:
	  •	The main method tests all public methods and verifies expected behavior, including edge cases.

  Performance

	  •	Time Complexity:
	    •	enqueue, dequeue, and sample:  O(1)  amortized.
	    •	Iterator operations (next, hasNext):  O(1) , and construction is  O(n)  with a shuffle.
	  •	Space Complexity:
	    •	Resizing array ensures efficient space usage.
	    •	Memory overhead for the iterator due to copying and shuffling is linear.
  ******************************************************************************/
import java.util.Iterator;
import java.util.NoSuchElementException;

import edu.princeton.cs.algs4.StdRandom;

public class RandomizedQueue<Item> implements Iterable<Item> {

  private Item[] queue;
  private int size;

  // construct an empty randomized queue
  public RandomizedQueue() {
    queue = (Item[]) new Object[2]; // initialize with a small array
    size = 0;
  }

  // is the randomized queue empty?
  public boolean isEmpty() {
    return size == 0;
  }

  // return the number of items on the randomized queue
  public int size() {
    return size;
  }

  // add the item
  public void enqueue(Item item) {
    if (item == null)
      throw new IllegalArgumentException("Cannot add null item.");
    if (size == queue.length)
      resize(2 * queue.length); // double the size of the array if full
    queue[size++] = item;
  }

  // remove and return a random item
  public Item dequeue() {
    if (isEmpty())
      throw new NoSuchElementException("Randomized queue is empty.");
    int randomIndex = StdRandom.uniformInt(size); // use StdRandom to get a random index
    Item item = queue[randomIndex];
    queue[randomIndex] = queue[size - 1]; // swap with the last item
    queue[size - 1] = null; // avoid loitering
    size--;
    if (size > 0 && size == queue.length / 4)
      resize(queue.length / 2); // shrink size if necessary
    return item;
  }

  // return a random item (but do not remove it)
  public Item sample() {
    if (isEmpty())
      throw new NoSuchElementException("Randomized queue is empty.");
    int randomIndex = StdRandom.uniformInt(size); // use StdRandom to get a random index
    return queue[randomIndex];
  }

  // resize the array to the new capacity
  private void resize(int capacity) {
    Item[] copy = (Item[]) new Object[capacity];
    for (int i = 0; i < size; i++) {
      copy[i] = queue[i];
    }
    queue = copy;
  }

  // return an independent iterator over items in random order
  public Iterator<Item> iterator() {
    return new RandomizedQueueIterator();
  }

  private class RandomizedQueueIterator implements Iterator<Item> {
    private int current;
    private final Item[] randomOrder;

    public RandomizedQueueIterator() {
      randomOrder = (Item[]) new Object[size];
      for (int i = 0; i < size; i++) {
        randomOrder[i] = queue[i];
      }
      StdRandom.shuffle(randomOrder); // use StdRandom to shuffle the array
      current = 0;
    }

    public boolean hasNext() {
      return current < randomOrder.length;
    }

    public Item next() {
      if (!hasNext())
        throw new NoSuchElementException();
      return randomOrder[current++];
    }

    public void remove() {
      throw new UnsupportedOperationException();
    }
  }

  // unit testing (required)
  public static void main(String[] args) {
    RandomizedQueue<Integer> rq = new RandomizedQueue<>();

    // Test adding elements
    rq.enqueue(1);
    rq.enqueue(2);
    rq.enqueue(3);
    rq.enqueue(4);
    System.out.println("Size after enqueuing 4 elements: " + rq.size()); // Should be 4

    // Test sampling
    System.out.println("Random sample: " + rq.sample());
    System.out.println("Size after sample (should not change): " + rq.size());

    // Test removing random elements
    System.out.println("Random dequeue: " + rq.dequeue());
    System.out.println("Size after dequeue: " + rq.size());

    // Test iterator
    System.out.print("Items in randomized order: ");
    for (int i : rq) {
      System.out.print(i + " ");
    }
    System.out.println();

    // Edge case tests
    try {
      rq.enqueue(null);
    } catch (IllegalArgumentException e) {
      System.out.println("Caught expected IllegalArgumentException for enqueue(null)");
    }

    try {
      RandomizedQueue<Integer> emptyRq = new RandomizedQueue<>();
      emptyRq.dequeue(); // should throw an exception since the queue is empty
    } catch (NoSuchElementException e) {
      System.out.println("Caught expected NoSuchElementException for dequeue on empty queue");
    }

    try {
      rq.iterator().remove();
    } catch (UnsupportedOperationException e) {
      System.out.println("Caught expected UnsupportedOperationException for iterator().remove()");
    }
  }
}