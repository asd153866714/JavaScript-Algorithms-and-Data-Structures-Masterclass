# Big O Notation
* Big O Notation is a way to formalize fuzzy counting
* It allows us to talk formally about how the runtime of an algorithm grows as the inputs grow
* We won't care about the details, only the trends

## Definition
* We say that an algorithm is O(f(n)) if the number of simple operations the computer has to do is eventually less than a constant times f(n), as n increases
    * f(n) could be linear (f(n) = n)
    * f(n) could be quadratic (f(n) = n  )
    * f(n) could be constant (f(n) = 1)
    * f(n) could be something entirely different!

## Big O Shorthands
* Arithmetic operations are constant
* Variable assignment is constant
* Accessing elements in an array (by index) or object (by key) is constant
* In a loop, the the complexity is the length of the loop times the complexity of whatever happens inside of the loop

## Time Complexity
* Performance Tracker Tool -- https://rithmschool.github.io/function-timer-demo/

## Space Complexity
* How much additional memory do we need to allocate in order to run the code in our algorithm?

### Space Complexity in JS
Rules of Thumb

* Most primitives (booleans, numbers, undefined, null) are constant space
* Strings require O(n) space (where n is the string length)
* Reference types are generally O( n), where n is the length (for arrays) or the number of keys (for objects)

## Recap
* To analyze the performance of an algorithm, we use Big O Notation
* Big O Notation can give us a high level understanding of the time or space complexity of an algorithm
* Big O Notation doesn't care about precision, only about general trends (linear? quadratic? constant?)
* The time or space complexity (as measured by Big O) depends only on the algorithm, not the hardware used to run the algorithm
* Big O Notation is everywhere, so get lots of practice!