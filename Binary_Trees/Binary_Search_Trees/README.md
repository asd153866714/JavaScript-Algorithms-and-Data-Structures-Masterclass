# Binary Search Tree

## Trees terminology

## Use of trees
* HTML DOM
* Network Routing
* Abstract Syntax Tree
* Artificial Intelligence
* Folders in Operation Systems
* Computer File Systems

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

## DFS
* Inorder
* Preorder
* Postorder