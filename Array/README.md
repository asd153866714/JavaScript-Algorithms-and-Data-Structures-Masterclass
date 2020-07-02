# Object

## When to use Objects
* When you don't need order
* When you need fast access / insertion and removal

## Big O of Objects
* Insertion -   O(1)
* Removal -   O(1)
* Searching -   O(N)
* Access -   O(1)

## Big O of Object Methods
* Object.keys -   O(N)
* Object.values -   O(N)
* Object.entries -   O(N)
* hasOwnProperty -   O(1)

# Array

## When to use Arrays
* When you need order
* When you need fast access / insertion and removal (sort of....)

## Big O of Arrays
* Insertion -   It depends....

    * O(1) - push()
    * O(N) - unshift()

* Removal -   It depends....

    * O(1) - push()
    * O(N) - unshift()

* Searching -   O(N)
* Access -   O(1)

* Adding or Removing element to the begining of an array is costly, because we have to reindex every single element in array

## Big O of Arrays Operations
* push -   O(1)
* pop -   O(1)
* shift -   O(N)
* unshift -   O(N)
* concat -   O(N)
* slice -   O(N)
* splice -   O(N)
* sort -   O(N * log N)
* forEach/map/filter/reduce/etc. -   O(N)
