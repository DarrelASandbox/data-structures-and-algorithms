# https://leetcode.com/problems/lru-cache/
# https://www.youtube.com/watch?v=7ABFKPK2hD4&t=441s

# Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

# Implement the LRUCache class:

# LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
# int get(int key) Return the value of the key if the key exists, otherwise return -1.
# void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
# The functions get and put must each run in O(1) average time complexity.

# Your LRUCache object will be instantiated and called as such:
# obj = LRUCache(capacity)
# param_1 = obj.get(key)
# obj.put(key,value)


class Node:
    def __init__(self, key: int, val: int):
        self.key, self.val = key, val
        self.prev = self.next = None


class LRUCache:
    def __init__(self, capacity: int):
        self.cap = capacity
        self.cache = {}  # map key to node

        self.left, self.right = Node(0, 0), Node(0, 0)
        self.left.next, self.right.prev = self.right, self.left

    # remove node from list
    def remove(self, node):
        prev, nxt = node.prev, node.next
        prev.next, nxt.prev = nxt, prev

    # insert node at right
    def insert(self, node):
        prev, nxt = self.right.prev, self.right
        prev.next = nxt.prev = node
        node.next, node.prev = nxt, prev

    def get(self, key: int) -> int:
        if key in self.cache:
            self.remove(self.cache[key])
            self.insert(self.cache[key])
            return self.cache[key].val
        return -1

    def put(self, key: int, value: int) -> None:
        if key in self.cache:
            self.remove(self.cache[key])
        self.cache[key] = Node(key, value)
        self.insert(self.cache[key])

        if len(self.cache) > self.cap:
            # remove from the list and delete the LRU from hashmap
            lru = self.left.next
            self.remove(lru)
            print(lru in self.cache)
            del self.cache[lru.key]


# Runtime: 793 ms	Memory: 123.5 MB
# Using Doubly Linked List
# Time: O(1) with O(1) operations
# Working on bug
# class Node:
#     def __init__(self, key: int, value: int):
#         self.key = key
#         self.value = value
#         self.next = None
#         self.prev = None


# class DoublyLinkedList:
#     def __init__(self):
#         self.head = None
#         self.tail = None
#         self.length = 0

#     def push(self, key: int, value: int):
#         newNode = Node(key, value)
#         if self.head is None:
#             self.head = newNode
#             self.tail = newNode
#         else:
#             self.tail.next = newNode
#             newNode.prev = self.tail
#             self.tail = newNode
#         self.length += 1
#         return newNode

#     def remove(self, node: int):
#         if node.next is None and node.prev is None:
#             self.head = None
#             self.tail = None
#         elif node.next is None:
#             self.tail = node.prev
#             self.tail.next = None
#         elif node.prev is None:
#             self.head = node.next
#             self.head.prev = None
#         else:
#             prev_node = node.prev
#             next_node = node.next
#             prev_node.next = next_node
#             next_node.prev = prev_node
#         self.length -= 1


# class LRUCache:
#     def __init__(self, capacity: int):
#         self.DLL = DoublyLinkedList()
#         self.map = {}  # {key: value} as {key: node}
#         self.capacity = capacity

#     def get(self, key: int) -> int:
#         if not self.map[key]:
#             return -1
#         value = self.map[key].value
#         self.DLL.remove(self.map[key])
#         self.map[key] = self.DLL.push(key, value)
#         return value

#     def put(self, key: int, value: int) -> None:
#         if key in self.map:
#             self.DLL.remove(self.map[key])
#         self.map[key] = self.DLL.push(key, value)
#         if self.DLL.length > self.capacity:
#             first_key = self.DLL.head.key
#             del self.map[first_key]
#             self.DLL.remove(self.DLL.head)
