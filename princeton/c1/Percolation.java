import edu.princeton.cs.algs4.WeightedQuickUnionUF;

public class Percolation {
  private final int n; // grid size
  private final boolean[][] grid; // n-by-n grid of blocked/open sites
  private final WeightedQuickUnionUF uf; // union-find structure
  private final int topVirtual; // virtual top site
  private final int bottomVirtual; // virtual bottom site
  private int openSites; // count of open sites

  // creates n-by-n grid, with all sites initially blocked
  public Percolation(int n) {
    if (n <= 0) {
      throw new IllegalArgumentException("n must be greater than 0");
    }
    this.n = n;
    grid = new boolean[n][n];
    uf = new WeightedQuickUnionUF(n * n + 2); // including two virtual sites
    topVirtual = n * n; // virtual top site index
    bottomVirtual = n * n + 1; // virtual bottom site index
    openSites = 0;
  }

  // converts 2D (row, col) to a 1D index for union-find structure
  private int xyTo1D(int row, int col) {
    return row * n + col;
  }

  // opens the site (row, col) if it is not open already
  public void open(int row, int col) {
    validateIndices(row, col);
    if (!isOpen(row, col)) {
      grid[row][col] = true;
      openSites++;
      int current = xyTo1D(row, col);

      // Connect to virtual top if in the top row
      if (row == 0) {
        uf.union(current, topVirtual);
      }

      // Connect to virtual bottom if in the bottom row
      if (row == n - 1) {
        uf.union(current, bottomVirtual);
      }

      // Connect to adjacent open sites
      if (row > 0 && isOpen(row - 1, col)) { // above
        uf.union(current, xyTo1D(row - 1, col));
      }
      if (row < n - 1 && isOpen(row + 1, col)) { // below
        uf.union(current, xyTo1D(row + 1, col));
      }
      if (col > 0 && isOpen(row, col - 1)) { // left
        uf.union(current, xyTo1D(row, col - 1));
      }
      if (col < n - 1 && isOpen(row, col + 1)) { // right
        uf.union(current, xyTo1D(row, col + 1));
      }
    }
  }

  // is the site (row, col) open?
  public boolean isOpen(int row, int col) {
    validateIndices(row, col);
    return grid[row][col];
  }

  // is the site (row, col) full?
  public boolean isFull(int row, int col) {
    validateIndices(row, col);
    return uf.find(xyTo1D(row, col)) == uf.find(topVirtual);
  }

  // returns the number of open sites
  public int numberOfOpenSites() {
    return openSites;
  }

  // does the system percolate?
  public boolean percolates() {
    return uf.find(topVirtual) == uf.find(bottomVirtual);
  }

  // validate row and col indices
  private void validateIndices(int row, int col) {
    if (row < 0 || row >= n || col < 0 || col >= n) {
      throw new IllegalArgumentException("Invalid row or column index");
    }
  }

  // test client (optional)
  // public static void main(String[] args) {
  //   Scanner scanner = new Scanner(System.in);
  //   System.out.print("Enter grid size n: ");
  //   int n = scanner.nextInt();
  //   Percolation perc = new Percolation(n);

  //   System.out.println("Enter row and column pairs to open sites (type 'done' to finish):");
  //   while (scanner.hasNext()) {
  //     if (scanner.hasNextInt()) {
  //       int row = scanner.nextInt();
  //       int col = scanner.nextInt();
  //       perc.open(row, col);
  //     } else {
  //       String input = scanner.next();
  //       if (input.equalsIgnoreCase("done")) {
  //         break;
  //       }
  //     }
  //   }

  //   System.out.println("Percolates: " + perc.percolates()); // Check if the system percolates
  //   System.out.println("Number of open sites: " + perc.numberOfOpenSites());
  //   scanner.close();
  // }
}
