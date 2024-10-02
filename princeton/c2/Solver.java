import java.util.Comparator;

import edu.princeton.cs.algs4.In;
import edu.princeton.cs.algs4.MinPQ;
import edu.princeton.cs.algs4.Stack;
import edu.princeton.cs.algs4.StdOut;

public class Solver {

  private class SearchNode {
    private final Board board;
    private final int moves;
    private final SearchNode previous;
    private final int manhattan;

    public SearchNode(Board b, int m, SearchNode prev) {
      board = b;
      moves = m;
      previous = prev;
      manhattan = b.manhattan();
    }
  }

  private class SearchNodeComparator implements Comparator<SearchNode> {
    public int compare(SearchNode o1, SearchNode o2) {
      int o1Manhattan = o1.manhattan;
      int o2Manhattan = o2.manhattan;
      int o1Priority = o1Manhattan + o1.moves;
      int o2Priority = o2Manhattan + o2.moves;

      if (o1Priority < o2Priority)
        return -1;
      if (o1Priority > o2Priority)
        return 1;
      if (o1Manhattan > o2Manhattan)
        return 1;
      if (o1Manhattan < o2Manhattan)
        return -1;

      return 0;
    }
  }

  private final Stack<Board> solution = new Stack<>();
  private boolean solved;

  // find a solution to the initial board (using the A* algorithm)
  public Solver(Board initial) {
    if (initial == null)
      throw new IllegalArgumentException();

    solved = false;
    MinPQ<SearchNode> mainPQ = new MinPQ<SearchNode>(new SearchNodeComparator());
    MinPQ<SearchNode> twinPQ = new MinPQ<SearchNode>(new SearchNodeComparator());

    mainPQ.insert(new SearchNode(initial, 0, null));
    twinPQ.insert(new SearchNode(initial.twin(), 0, null));

    SearchNode minPriority;
    SearchNode twinPriority;
    boolean alternate = true;

    while (!mainPQ.isEmpty()) {
      // TODO: the following can be KISSed, it's repeated code controlled by one bool var
      if (alternate) {
        minPriority = mainPQ.delMin();

        if (minPriority.board.isGoal()) {
          solved = true;
          SearchNode path = minPriority;
          do {
            solution.push(path.board);
            path = path.previous;
          } while (path != null);
          break;
        }

        for (Board n : minPriority.board.neighbors()) {
          if (minPriority.previous != null && minPriority.previous.board.equals(n))
            continue;

          mainPQ.insert(new SearchNode(n, minPriority.moves + 1, minPriority));
        }
      } else {
        twinPriority = twinPQ.delMin();

        if (twinPriority.board.isGoal()) {
          solved = false;
          break;
        }

        for (Board n : twinPriority.board.neighbors()) {
          if (twinPriority.previous != null && twinPriority.previous.board.equals(n))
            continue;

          twinPQ.insert(new SearchNode(n, twinPriority.moves + 1, twinPriority));
        }
      }
      alternate = !alternate;
    }
  }

  // is the initial board solvable? (see below)
  public boolean isSolvable() {
    return solved;
  }

  // min number of moves to solve initial board; -1 if unsolvable
  public int moves() {
    return solved ? solution.size() - 1 : -1;
  }

  // sequence of boards in a shortest solution; null if unsolvable
  public Iterable<Board> solution() {
    return solution.size() > 0 ? solution : null;
  }

  // test client (see below) 
  public static void main(String[] args) {
    // create initial board from file
    In in = new In(args[0]);
    int n = in.readInt();
    int[][] tiles = new int[n][n];
    for (int i = 0; i < n; i++)
      for (int j = 0; j < n; j++)
        tiles[i][j] = in.readInt();
    Board initial = new Board(tiles);

    // solve the puzzle
    Solver solver = new Solver(initial);

    // print solution to standard output
    if (!solver.isSolvable())
      StdOut.println("No solution possible");
    else {
      StdOut.println("Minimum number of moves = " + solver.moves());
      for (Board board : solver.solution())
        StdOut.println(board);
    }
  }
}