import edu.princeton.cs.algs4.StdRandom;
import edu.princeton.cs.algs4.StdStats;

public class PercolationStats {
  private final int trials;
  private final double[] thresholds; // stores percolation threshold for each trial

  // perform independent trials on an n-by-n grid
  public PercolationStats(int n, int trials) {
    if (n <= 0 || trials <= 0) {
      throw new IllegalArgumentException("Grid size and number of trials must be greater than 0");
    }
    this.trials = trials;
    thresholds = new double[trials];

    // Run each trial
    for (int i = 0; i < trials; i++) {
      Percolation perc = new Percolation(n);
      int openSites = 0;

      // Randomly open sites until the system percolates
      while (!perc.percolates()) {
        int row = StdRandom.uniformInt(n);
        int col = StdRandom.uniformInt(n);

        // Open the site if it's not already open
        if (!perc.isOpen(row, col)) {
          perc.open(row, col);
          openSites++;
        }
      }

      // Record the percolation threshold for this trial
      thresholds[i] = (double) openSites / (n * n);
    }
  }

  // sample mean of percolation threshold
  public double mean() {
    return StdStats.mean(thresholds);
  }

  // sample standard deviation of percolation threshold
  public double stddev() {
    return StdStats.stddev(thresholds);
  }

  // low endpoint of 95% confidence interval
  public double confidenceLo() {
    return mean() - (1.96 * stddev() / Math.sqrt(trials));
  }

  // high endpoint of 95% confidence interval
  public double confidenceHi() {
    return mean() + (1.96 * stddev() / Math.sqrt(trials));
  }

  // test client (see below)
  public static void main(String[] args) {
    if (args.length != 2) {
      throw new IllegalArgumentException("Please provide grid size and number of trials as arguments");
    }

    int n = Integer.parseInt(args[0]);
    int trials = Integer.parseInt(args[1]);

    // Create PercolationStats object and run the experiment
    PercolationStats stats = new PercolationStats(n, trials);

    // Output the results
    System.out.printf("mean                    = %.16f%n", stats.mean());
    System.out.printf("stddev                  = %.16f%n", stats.stddev());
    System.out.printf("95%% confidence interval = [%.16f, %.16f]%n", stats.confidenceLo(), stats.confidenceHi());
  }
}