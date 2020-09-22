# Dynamic Programming
* A method for solving a complex problem by breaking it down into a collection of simpler subproblems, solving each of those subproblems just once, and storing their solutions.

* It only works on problems with:
    * Overlapping Subproblems
    * Optimal Substructure

## Overlapping Subproblems
* A problem is said to have overlapping subproblems if it can be broken down into subproblems which are reused several times

* Fibonacci Sequence

* Merge Sort

## Optimal Substructure
* A problem is said to have optimal substructure if an optimal solution can be constructed from optimal solutions of its subproblems

* Shortest Path

* Longest Simple Path

## Big O of Fibonacci
* O(2^N)

## Big O of Fibonacci_Memorized
* O(N)

---

## Recap
* Dynamic Programming is the idea of breaking down a problem into smaller subproblems - it's hard
* Optimal substructure is required to use dynamic program and involves figuring out the correct expression to consistently solve subproblems
* Overlapping subproblems is the second essential part of dynamic programming 
* Greedy Algorithms are a more aggressive and not always efficient way of solving algorithms
* Backtracking is quite useful when solving for restrictive conditions with unknown possibilities