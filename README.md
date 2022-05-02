## About The Project

- The Coding Interview Bootcamp: Alogrithms + Data Structures
- Ace your next Javascript coding interview by mastering data structures and algorithms.
- Tutorial for
- [Original Repo: AlgoCasts](https://github.com/StephenGrider/algocasts)
- [Stephen Grider](https://github.com/StephenGrider)

&nbsp;

## Notes

- Command to run a single test file: <code>npm test fib/test.js</code>

### Coding Interview

- <b>Contact Phase: </b>Work experience, side projects & social contacts
  - Talk to recruiter
  - Friend refers you
  - Submit resume online
- <b>Interview Phase: </b>Culture fit & Can you code?
  - Phone screen
  - Onsite interview
- <b>Evaluating coding ability</b>
  - Take-home assignment
  - Pair programming at a computer
  - Whiteboarding

&nbsp;

> "Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”."

> A series of numbers in which each number ( Fibonacci number) is the sum of the two preceding numbers. The simplest is the series 1, 1, 2, 3, 5, 8, etc.

```js
function fib(n) {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
}
```

&nbsp;
