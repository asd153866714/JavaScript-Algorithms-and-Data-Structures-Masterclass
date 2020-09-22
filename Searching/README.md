# Searching Algorithms

* the **simplest way** to search for an value is to look at every element in the array and check if it's the value we want.

## JavaScript Search Method
* Array
    * indexOf
    * includes
    * find
    * findIndex

---

# Linear Search
* This function accepts an array and a value
* Loop through the array and check if the current array element is equal to the value
* If it is, return the index at which the element is found
* If the value is never found, return -1

## Big O of Linear Search
* Best - O(1)
* Average - O(n)
* Worst - O(n)

---

# Binary Search
* Binary search is a much faster form of search
* Rather than eliminating one element at a time, you can eliminate half of the remaining elements at a time
* Binary search only works on **sorted arrays!**

## Pseudocode
* This function accepts a **sorted array** and a value
* Create a left pointer at the start of the array, and a right pointer at the end of the array
* While the left pointer comes before the right pointer:
    * Create a pointer in the middle
    * If you find the value you want, return the index
    * If the value is too small, move the left pointer up
    * If the value is too large, move the right pointer down
* If you never find the value, return -1

## Big O of Binary Search
* Best - O(1)
* Average - O(log n)
* Worst - O(log n)

---

# Naive String Search
* Suppose you want to count the number of times a smaller string appears in a longer string

* A straightforward approach involves checking pairs of characters individually

## Pseudocode
* Loop over the longer string
* Loop over the shorter string
* If the characters don't match, break out of the inner loop
* If the characters do match, keep going
* If you complete the inner loop and find a match, increment the count of matches
* Return the count

---

# KMP String Search

---

# Recap
* Searching is a very common task that we often take for granted
* When searching through an unsorted collection, linear search is the best we can do
* When searching through a sorted collection, we can find things very quickly with binary search
* KMP provides a linear time algorithm for searches in strings