// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

const midpoint = (list) => {
  let node = list.head;
  let pointer1 = node;
  let pointer2 = node;

  while (pointer2.next && pointer2.next.next) {
    pointer1 = pointer1.next;
    pointer2 = pointer2.next.next;
  }

  return pointer1;
};

module.exports = midpoint;
