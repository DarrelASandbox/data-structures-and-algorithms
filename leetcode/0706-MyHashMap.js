/*
https://leetcode.com/problems/design-hashmap/
https://leetcode.com/problems/design-hashmap/discuss/1097755/JS-Python-Java-C%2B%2B-or-(Updated)-Hash-and-Array-Solutions-w-Explanation

Design a HashMap without using any built-in hash table libraries.

Implement the MyHashMap class:
- MyHashMap() initializes the object with an empty map.
- void put(int key, int value) inserts a (key, value) pair into the HashMap. If the key already exists in the map, update the corresponding value.
- int get(int key) returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key.
- void remove(key) removes the key and its corresponding value if the map contains the mapping for the key.

Input
["MyHashMap", "put", "put", "get", "get", "put", "get", "remove", "get"]
[[], [1, 1], [2, 2], [1], [3], [2, 1], [2], [2], [2]]
Output
[null, null, null, 1, -1, null, 1, null, -1]

Explanation
MyHashMap myHashMap = new MyHashMap();
myHashMap.put(1, 1); // The map is now [[1,1]]
myHashMap.put(2, 2); // The map is now [[1,1], [2,2]]
myHashMap.get(1);    // return 1, The map is now [[1,1], [2,2]]
myHashMap.get(3);    // return -1 (i.e., not found), The map is now [[1,1], [2,2]]
myHashMap.put(2, 1); // The map is now [[1,1], [2,1]] (i.e., update the existing value)
myHashMap.get(2);    // return 1, The map is now [[1,1], [2,1]]
myHashMap.remove(2); // remove the mapping for 2, The map is now [[1,1]]
myHashMap.get(2);    // return -1 (i.e., not found), The map is now [[1,1]]
*/

// Runtime: 281 ms	Memory: 131.5 MB
// Using Array
class MyHashMap {
  constructor() {
    this.data = [];
  }

  put(key, value) {
    this.data[key] = value;
  }

  get(key) {
    const value = this.data[key];
    return value !== undefined ? value : -1;
  }

  remove(key) {
    delete this.data[key];
  }
}

// Runtime: 228 ms	Memory: 55.8 MB
// Using Hash
class ListNode {
  constructor(key, value, next) {
    this.key = key;
    this.value = value;
    this.next = next;
  }
}

class MyHashMap {
  constructor() {
    this.size = 19997;
    this.mult = 12582917;
    this.data = new Array(this.size);
  }
  hash(key) {
    return (key * this.mult) % this.size;
  }

  /**
   * @param {number} key
   * @param {number} value
   * @return {void}
   */
  put(key, value) {
    this.remove(key);
    let h = this.hash(key);
    let node = new ListNode(key, value, this.data[h]);
    this.data[h] = node;
  }

  /**
   * @param {number} key
   * @return {number}
   */
  get(key) {
    let h = this.hash(key),
      node = this.data[h];
    for (; node; node = node.next) if (node.key === key) return node.value;
    return -1;
  }

  /**
   * @param {number} key
   * @return {void}
   */
  remove(key) {
    let h = this.hash(key),
      node = this.data[h];
    if (!node) return;
    if (node.key === key) this.data[h] = node.next;
    else
      for (; node.next; node = node.next)
        if (node.next.key === key) {
          node.next = node.next.next;
          return;
        }
  }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
