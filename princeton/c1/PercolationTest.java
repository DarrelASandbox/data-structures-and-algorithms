import edu.princeton.cs.algs4.StdIn;
import edu.princeton.cs.algs4.StdOut;

public class PercolationTest {

  public static void main(String[] args) {
    int n = StdIn.readInt(); // Read grid size from input
    Percolation percolation = new Percolation(n);

    while (!StdIn.isEmpty()) {
      int row = StdIn.readInt();
      int col = StdIn.readInt();
      percolation.open(row, col); // Open the site based on the input

      StdOut.println("Open site: (" + row + ", " + col + ")");
    }

    StdOut.println("System percolates: " + percolation.percolates());
    StdOut.println("Number of open sites: " + percolation.numberOfOpenSites());
  }
}