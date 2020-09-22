# Binary Search Tree

## What Is A Tree?
* A data structure that consists of nodes in a **parent / child** relationship

## Compare With List
* List - linear
* Tree - Not linear

## Trees terminology
* Root - The top node in a tree.
* Child -A node directly connected to another node when moving away from the Root.
* Parent - The converse notion of a child.
* Siblings -A group of nodes with the same parent.
* Leaf - A node with no children.
* Edge - The connection between one node and another.

## Use of trees
* HTML DOM
* Network Routing
* Abstract Syntax Tree
* Artificial Intelligence
* Folders in Operation Systems
* Computer File Systems

## Kind Of Trees
* Tree
* Binary Tree
* Binary Search Tree

## Binary Search Tree (BST)
* Every parent node has at most **two** children
* right of a parent node **less** than the parent
* right of a parent node **greater** than the parent

## BST insert
* Create a new node
* Starting at the root
    * Check if there is a root, if not - the root now becomes that new node!
    * If there is a root, check if the value of the new node is greater than or less than the value of the root
    * If it is greater 
        * Check to see if there is a node to the right
            * If there is, move to that node and repeat these steps
            * If there is not, add that node as the right property
    * If it is less
        * Check to see if there is a node to the left
            * If there is, move to that node and repeat these steps
            * If there is not, add that node as the left property

## BST find
* visualize -- https://visualgo.net/en/bst

## Big O of BST
* insert - O(log n)
* search - O(log n)

---

## Tree Traversal
* Breadth-first Search(BFS)
* Depth-first Search(DFS)

## BFS
* Create a queue (this can be an array) and a variable to store the values of nodes visited
* Place the root node in the queue
* Loop as long as there is anything in the queue
    * Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
    * If there is a left property on the node dequeued - add it to the queue
    * If there is a right property on the node dequeued - add it to the queue
* Return the variable that stores the values

## DFS - Inorder
* Create a variable to store the values of nodes visited
* Store the root of the BST in a variable called current
* Write a helper function which accepts a node
    * If the node has a left property, call the helper function with the left property on the node
    * Push the value of the node to the variable that stores the values
    * If the node has a right property, call the helper function with the right property on the node
* Invoke the helper function with the current variable
* Return the array of values

## DFS - preorder
* Create a variable to store the values of nodes visited
* Store the root of the BST in a variable called current
* Write a helper function which accepts a node
    * Push the value of the node to the variable that stores the values
    * If the node has a left property, call the helper function with the left property on the node
    * If the node has a right property, call the helper function with the right property on the node
* Invoke the helper function with the current variable
* Return the array of values

## DFS - Postorder
* Create a variable to store the values of nodes visited
* Store the root of the BST in a variable called current
* Write a helper function which accepts a node
    * If the node has a left property, call the helper function with the left property on the node
    * If the node has a right property, call the helper function with the right property on the node
    * Push the value of the node to the variable that stores the values
* Invoke the helper function with the current variable
* Return the array of values

---

## Recap
* Trees are non-linear data structures that contain a **root** and **child** nodes
* Binary Trees can have values of any type, but at most two children for each parent
* Binary Search Trees are a more specific version of binary trees where every node to the left of a parent is less than it's value and every node to the right is greater
* We can search through Trees using **BFS** and **DFS**