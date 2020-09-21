# Stack
* LILO (Last In Last Out)

## Use of Stack
* Managing function invocations
* Undo / Redo (PhotoShop)
* Routing (the history object) is treated like a stack!

## Implementation
* Array
* Linked List

## Push
* The function should accept a value
* Create a new node with that value
* If there are no nodes in the stack, set the first and last property to be the newly created node 
* If there is at least one node, create a variable that stores the current first property on the stack
* Reset the first property to be the newly created node
* Set the next property on the node to be the previously created variable
* Increment the size of the stack by 1

## Pop
* If there are no nodes in the stack, return null
* Create a temporary variable to store the first property on the stack
* If there is only 1 node, set the first and last property to be null
* If there is more than one node, set the first property to be the next property on the current first
* Decrement the size by 1
* Return the value of the node removed

## Big O of Stack
* insert - O(1)
* remove - O(1)
* search - O(n)
* access - O(n)

# Queue
* FIFO (First In First Out)

## Use of Queue
* Online game waiting to join
* Background tasks
* Uploading resources
* Printing / Task processing

## Implementation
* Array
* Linked List

## Enqueue
* This function accepts some value
* Create a new node using that value passed to the function
* If there are no nodes in the queue, set this node to be the first and last property of the queue<br>
Otherwise, set the next property on the current last to be that node, and then set the last property of the queue to be that node
* Increment the size of the queue by 1

## Dequeue
* If there is no first property, just return null
* Store the first property in a variable
* See if the first is the same as the last (check if there is only 1 node). If so, set the first and last to be null
* If there is more than 1 node, set the first property to be the next property of first 
* Decrement the size by 1
* Return the value of the node dequeued

## Big O of Queue
* insert - O(1)
* remove - O(1)
* search - O(n)
* access - O(n)
