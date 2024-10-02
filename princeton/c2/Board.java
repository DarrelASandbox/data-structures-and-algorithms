import java.util.Arrays;

import edu.princeton.cs.algs4.Stack;
import edu.princeton.cs.algs4.StdOut;
import edu.princeton.cs.algs4.StdRandom;

public class Board {

  private final int[] board;
  private final int size;
  private final int swapTileA;
  private final int swapTileB;

  // create a board from an n-by-n array of tiles,
  // where tiles[row][col] = tile at (row, col)
  public Board(int[][] tiles) {
    if (tiles == null || tiles.length != tiles[0].length) {
      throw new IllegalArgumentException();
    }

    board = new int[tiles.length * tiles.length];
    size = tiles.length;

    int i = 0;
    for (int[] row : tiles) {
      for (int t : row) {
        board[i++] = t;
      }
    }

    int[] swapPair = getRandomPair();
    swapTileA = swapPair[0];
    swapTileB = swapPair[1];
  }

  // string representation of this board
  public String toString() {
    StringBuilder sBoard = new StringBuilder();
    sBoard.append(size + "");
    for (int i = 0; i < board.length; ++i) {
      if (i % size == 0)
        sBoard.append("\n");
      sBoard.append(board[i] + " ");
    }
    return sBoard.toString();
  }

  // board dimension n
  public int dimension() {
    return size;
  }

  // number of tiles out of place
  public int hamming() {
    int outOfPlace = 0;
    for (int i = 0; i < board.length - 1; ++i) {
      if (board[i] == 0)
        continue;
      if (board[i] != i + 1)
        ++outOfPlace;
    }

    if (board[board.length - 1] != 0)
      ++outOfPlace;

    return outOfPlace;
  }

  // sum of Manhattan distances between tiles and goal
  public int manhattan() {
    int sum = 0;
    for (int i = 0; i < board.length; ++i) {
      if (board[i] == 0)
        continue;

      int[] iColRow = getColRow(i);
      int[] goalColRow = getColRow(board[i] - 1);

      sum += Math.abs(iColRow[0] - goalColRow[0]) + Math.abs(iColRow[1] - goalColRow[1]);
    }
    return sum;
  }

  private int[] getColRow(int p) {
    int[] colRow = new int[2];
    colRow[0] = p / size;
    colRow[1] = p % size;
    return colRow;
  }

  // is this board the goal board?
  public boolean isGoal() {
    for (int i = 0; i < board.length; ++i) {
      if (board[i] == 0)
        continue;
      if (board[i] - 1 != i)
        return false;
    }
    if (board[board.length - 1] != 0)
      return false;
    return true;
  }

  // does this board equal y?
  public boolean equals(Object y) {
    if (y == this)
      return true;
    if (y == null)
      return false;
    if (y.getClass() != this.getClass())
      return false;
    return Arrays.equals(board, ((Board) y).board);
  }

  // all neighboring boards
  public Iterable<Board> neighbors() {
    int[] movements = { 1, -1, size, -size };
    Stack<Board> ns = new Stack<>();
    int blankPos = Arrays.stream(board).filter(i -> 0 == board[i]).findFirst().getAsInt();

    for (int mov : movements) {
      if (blankPos + mov < 0
          || blankPos + mov >= board.length
          || Math.abs(mov) != size && ((blankPos % size) + mov == size)
          || Math.abs(mov) != size && ((blankPos % size) + mov == -1))
        continue;

      int[] swappedBoard = swap(new int[0], blankPos, blankPos + mov);
      ns.push(new Board(map2DArray(swappedBoard)));
    }
    return ns;
  }

  private int[] swap(int[] swappedBoard, int from, int to) {
    if (swappedBoard.length == 0)
      swappedBoard = board.clone();

    swappedBoard[from] = swappedBoard[from] + swappedBoard[to];
    swappedBoard[to] = swappedBoard[from] - swappedBoard[to];
    swappedBoard[from] = swappedBoard[from] - swappedBoard[to];

    return swappedBoard;
  }

  // a board that is obtained by exchanging any pair of tiles
  public Board twin() {
    return new Board(map2DArray(swap(new int[0], swapTileA, swapTileB)));
  }

  private int[][] map2DArray(int[] oneDArray) {
    int[][] twoDArray = new int[size][size];
    int row = -1;
    for (int i = 0; i < oneDArray.length; ++i) {
      if (i % size == 0)
        ++row;
      twoDArray[row][i % size] = oneDArray[i];
    }
    return twoDArray;
  }

  private int[] getRandomPair() {
    int[] pair = new int[2];
    pair[0] = getRandomNum();
    do {
      pair[1] = getRandomNum();
    } while (pair[0] == pair[1]);
    return pair;
  }

  private int getRandomNum() {
    int random;
    do {
      random = StdRandom.uniformInt(0, board.length);
    } while (board[random] == 0);
    return random;
  }

  // unit testing (not graded)
  public static void main(String[] args) {
    int[] a = { 0, 1, 3 };
    int[] c = { 4, 2, 5 };
    int[] d = { 7, 8, 6 };
    int[][] g = { a, c, d };

    int[] e1 = { 1, 0, 3 };
    int[] e2 = { 4, 2, 5 };
    int[] e3 = { 7, 8, 6 };
    int[][] e = { e1, e2, e3 };

    Board b = new Board(g);
    Board boardC = b.twin();
    StdOut.println(boardC);
    System.out.println(boardC.toString());

    for (Board n : boardC.neighbors())
      StdOut.println(n.toString());

    StdOut.println(b.equals(new Board(e))); // Compare with `e`
    StdOut.println(b.equals(boardC)); // Compare with `boardC`
  }
}