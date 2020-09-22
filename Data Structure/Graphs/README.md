# Graph

## What Are Graphs
* A **graph data structure** consists of a finite (and possibly mutable) set of vertices or nodes or points
* Together with a set of unordered pairs of these vertices for an **undirected graph** or a set of ordered pairs for a **directed graph**

## Definitions
* Nodes + Connections

## Uses for Graphs
* Social Networks
* Location / Mapping
* Routing Algorithms
* Visual Hierarchy
* File System Optimizations
* EVERYWHERE!

#### Recommendations
* "People also watched"
* "You might also like..."
* "People you might know"
* "Frequently bought with"

## Essential Graph Terms
* Vertex - a node

* Edge - connection between nodes

* Weighted/Unweighted - values assigned to distances between vertices

* Directed/Undirected - directions assigned to distanced between vertices

## Sorting Graph

* Adjacency Matrix
    * Every time you add a new vertex, you have to add a new row and column.

* Adjacency List
    * Array (numeric)
    * Hash Table (string)

#### Difference

* Adjacency Matrix:
    * Takes up more space (in sparse graphs)
    * Slower to iterate over all edges
    * Faster to lookup specific edge 

* Adjacency List:
    * Can take up less space (in sparse graphs)
    * Faster to iterate over all edges
    * Can be slower to lookup specific edge

#### Why we use Adjacency List
Most data in the real-world tends to lend itself to sparser and/or larger graphs

## Add Vertex

## Add Edge

## Remove Vertex

## Remove Edge

# Graph Traversal

* Visiting/Updating/Checking
each vertex in a graph

## Uses for Graph Traversal
* Peer to peer networking
* Web crawlers
* Finding "closest" matches/recommendations
* Shortest path problems
    * GPS Navigation
    * Solving mazes
    * AI (shortest path to win the game)

## DFS
* Explore as far as possible down one branch before "backtracking"

#### DFS Recursive
* Pseudocode:
```
 DFS(vertex):
    if vertex is empty
        return (this is base case)
    add vertex to results list
    mark vertex as visited
    for each neighbor in vertex's neighbors:
       if neighbor is not visited:
          recursively call DFS on neighbor
```
<br>

* The function should accept a starting node
* Create a list to store the end result, to be returned at the very end
* Create an object to store visited vertices
* Create a helper function which accepts a vertex
    * The helper function should return early if the vertex is empty
    * The helper function should place the vertex it accepts into the visited object and push that vertex into the result array.
    * Loop over all of the values in the adjacencyList for that vertex
    * If any of those values have not been visited, recursively invoke the helper function with that vertex
* Invoke the helper function with the starting vertex
* Return the result array

#### DFS Iterative
* Pseucdcode:
```
DFS-iterative(start):
    let S be a stack
    S.push(start)
    while S is not empty
        vertex = S.pop()
        if vertex is not labeled as discovered:
            visit vertex (add to result list)
            label vertex as discovered
            for each of vertex's neighbors, N do 
                S.push(N)
```
<br>

* The function should accept a starting node
* Create a stack to help use keep track of vertices (use a list/array)
* Create a list to store the end result, to be returned at the very end
* Create an object to store visited vertices
* Add the starting vertex to the stack, and mark it visited
* While the stack has something in it:
    * Pop the next vertex from the stack
    * If that vertex hasn't been visited yet:
        ​* Mark it as visited
        * Add it to the result list
        * Push all of its neighbors into the stack
* Return the result array

## BFS
* Visit neighbors at current depth first!

#### BFS Iterative
* This function should accept a starting vertex
* Create a queue (you can use an array) and place the starting vertex in it
* Create an array to store the nodes visited
* Create an object to store nodes visited
* Mark the starting vertex as visited
* Loop as long as there is anything in the queue
* Remove the first vertex from the queue and push it into the array that stores nodes visited
* Loop over each vertex in the adjacency list for the vertex you are visiting.
* If it is not inside the object that stores nodes visited, mark it as visited and enqueue that vertex
* Once you have finished looping, return the array of visited nodes

---

# Recap
* Graphs are collections of vertices connected by edges
* Graphs can be represented using adjacency lists, adjacency matrices and quite a few other forms.
* Graphs can contain weights and directions as well as cycles
* Just like trees, graphs can be traversed using BFS and DFS
* Shortest path algorithms like **Dijkstra** can be altered using a heuristic to achieve better results like those with A*