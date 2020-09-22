# Hash Table (Hash Map)

## WHAT IS A HASH TABLE?
* Hash tables are used to store key-value pairs.
* They are like arrays, but the keys are not ordered.
* Unlike arrays, hash tables are fast for all of the following operations: 
    
    * finding values, adding new values, and removing values!

## Hash in programming language
* Python has Dictionaries

* JS has Objects and Maps*

* Java, Go, & Scala have Maps

* Ruby has...Hashes

## WHAT MAKES A GOOD HASH?
1. Fast (i.e. constant time)
2. Doesn't cluster outputs at specific indices, but distributes uniformly
3. Deterministic (same input yields same output)

## Prime number
* The prime number in the hash is helpful in spreading out the keys more uniformly.
* It's also helpful if the array that you're putting values into has a prime length.

* [Why do hash functions use prime numbers?](https://computinglife.wordpress.com/2008/11/20/why-do-hash-functions-use-prime-numbers/)

* [Does making array size a prime number help in hash table implementation?](https://www.quora.com/Does-making-array-size-a-prime-number-help-in-hash-table-implementation-Why)

## Dealing with Collisions
1. Separate Chaining
2. Linear Probing

#### Separate Chaining
* With separate chaining, at each index in our array we store values using a more sophisticated data structure (e.g. an array or a linked list).

* Use a nested data structure((e.g. an array or a linked list).)

* This allows us to store multiple key-value pairs at the same index.

#### Linear Probing
* With linear probing, when we find a collision, we search through the array to find the next empty slot.

* Unlike with separate chaining, this allows us to store a single key-value at each index.

## Set / Get
* Set

    1. Accepts a key and a value
    2. Hashes the key
    3. Stores the key-value pair in the hash table array via separate chaining

* Get

    1. Accepts a key
    2. Hashes the key
    3. Retrieves the key-value pair in the hash table
    4. If the key isn't found, returns undefined

## Keys / Values
* Keys

    * Loops through the hash table array and returns an      array of keys in the table

* Values

    * Loops through the hash table array and returns an array of values in the table

## Big O of Hash Table
* Insert: O(1)
* Deletion: O(1)
* Access: O(1)

## Recap
* Hash tables are collections of key-value pairs
* Hash tables can find values quickly given a key
* Hash tables can add new key-values quickly
* Hash tables store data in a large array, and work by hashing the keys
* A good hash should be fast, distribute keys uniformly, and be deterministic
* Separate chaining and linear probing are two strategies used to deal with two keys that hash to the same index
* When in doubt, use a hash table!