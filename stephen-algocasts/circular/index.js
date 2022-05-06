// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

const circular = (list) => {
  let node = list.head;
  let pointer1 = node;
  let pointer2 = node;

  while (pointer2.next && pointer2.next.next) {
    pointer1 = pointer1.next;
    pointer2 = pointer2.next.next;
    if (pointer1 === pointer2) return true;
  }

  return false;
};

module.exports = circular;
