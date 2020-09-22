# Recursion
* A **process**(function) that **calls itself**

## Use of Recursion
* JSON.parse / JSON.stringify
* document.getElementById and DOM traversal algorithms
* Object traversal
* Very common with more complex algorithms
* It's sometimes a cleaner alternative to iteration

## Two essential parts of a recursive function!
* Base Case: 
    * The condition when the recursion ends.

* Different Input

---

## Recap
* A recursive function is a function that invokes itself
* Your recursive functions should **always** have a base case and be invoked with different input each time
* When using recursion, it's often essential to return values from one function to another to extract data from each function call
* Helper method recursion is an alternative that allows us to use an external scope in our recursive functions
* Pure recursion eliminates the need for helper method recursion, but can be trickier to understand at first