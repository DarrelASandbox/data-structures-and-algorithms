
/******************************************************************************
 *
 *  Name:              Johanna Mesa Ramos
 *  Coursera User ID:  c02b4bb527298de170192d644483baeb
 *  Last modified:     08/2020
 *  Course: Algorithms, Part I https://www.coursera.org/learn/algorithms-part1
 *
 ******************************************************************************/
import java.util.ArrayList;
import java.util.List;
import java.util.TreeSet;

import edu.princeton.cs.algs4.Point2D;
import edu.princeton.cs.algs4.RectHV;
import edu.princeton.cs.algs4.StdDraw;

public class PointSET {

  private final TreeSet<Point2D> tree;

  public PointSET() {
    tree = new TreeSet<>();
  }

  private void checkNull(Object obj) {
    if (obj == null)
      throw new IllegalArgumentException("Parameter can't be null");
  }

  public boolean isEmpty() {
    return tree.isEmpty();
  }

  public int size() {
    return tree.size();
  }

  public void insert(Point2D p) {
    checkNull(p);
    tree.add(p);
  }

  public boolean contains(Point2D p) {
    checkNull(p);
    return tree.contains(p);
  }

  public void draw() {
    StdDraw.setPenRadius(0.015);
    StdDraw.setPenColor(StdDraw.BLUE);

    for (Point2D p : tree)
      p.draw();

    StdDraw.show();
  }

  public Iterable<Point2D> range(RectHV rect) {
    checkNull(rect);
    List<Point2D> points = new ArrayList<>();
    for (Point2D p : tree) {
      if (rect.contains(p))
        points.add(p);
    }
    return points;
  }

  public Point2D nearest(Point2D p) {
    checkNull(p);
    Point2D neighbour = null;
    double minDistance = Double.POSITIVE_INFINITY;

    for (Point2D candidate : tree) {
      double distance = p.distanceSquaredTo(candidate);
      if (distance < minDistance) {
        neighbour = candidate;
        minDistance = distance;
      }
    }

    return neighbour;
  }

}