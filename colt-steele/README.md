## About The Project

- JavaScript Algorithms and Data Structures Masterclass
- The Missing Computer Science and Coding Interview Bootcamp
- [Colt Steele](https://github.com/Colt)

&nbsp;

---

&nbsp;

## Notes

- Went through this course way before I actively use GitHub. So I will be porting in notes from my pc from time to time.
- [Colt Steele Slides](https://cs.slides.com/colt_steele/)
- [Function Timer Demo](https://rithmschool.github.io/function-timer-demo/)

&nbsp;

---

&nbsp;

### Stacks & Queues

- <b>Stacks: </b>LIFO
  - Managing function invocations
  - Undo / Redo
  - Routing (the history object)
  - Array/ Linked List Implementation

&nbsp;

> <b>Anne: </b>You did not set the .next of the popped value to null, is there a reason why?
>
> In your solution the popped node still has a connection to the stack via its next property right? I am a bit confused because when doing the linked list we always made sure to severe all connections

> <b>William: </b>Using pop you are severing the last node and that nodes next property is already null since nothing follows it.

> <b>Anne: </b>But it is never set to null, so it still points to the list!

> <b>Alan: </b>You're right in that the popped node object will have a reference to the next item in the stack But since we're returning its value--and not the node object itself--the object will never be referenced again (by a variable or as a property in another object). This means that it'll get picked up by the engine's garbage collector! So it can never affect the stack once popped (only its value property is returned), and <b>no memory leak takes place (there's no longer a reference to the node object)</b>

- <b>Queue: </b>FIFO

&nbsp;

---

&nbsp;
