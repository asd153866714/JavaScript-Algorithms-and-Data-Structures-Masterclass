class Graph {
    constructor() {
        this.adjacencyList = {}
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
    }
    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2)
        this.adjacencyList[v2].push(v1)
    }
    removeVertex(vertex) {
        while (this.adjacencyList[vertex].length) {
            const adjacencyVertex =  this.adjacencyList[vertex].pop()
            this.removeEdege(vertex, adjacencyVertex)
        }
        delete this.adjacencyList[vertex]
    }
    removeEdege(v1, v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(
            (v) => v !== v2
        )
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(
            (v) => v !== v1
        )
    }
    DFS_Recursive(start) {
        const result = []
        const visited = {}
        const adjacencyList = this.adjacencyList;

        (function dfs(vertex) {
            if (!vertex) return null
            visited[vertex] = true
            result.push(vertex)
            adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    return dfs(neighbor)
                }
            });
        })(start)

        return result
    }
    DFS_Iterative(start) {
        const stack = [start]
        const result = []
        const visited = {}
        let currentVertex

        visited[start] = true
        while (stack.length) {
            console.log(stack)
            currentVertex = stack.pop()
            result.push(currentVertex)

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true
                    stack.push(neighbor)
                }
            })
        }
        return result
    }
    BFS(start) {
        const queue = [start]
        const result = []
        const visited = {}
        let currentVertex
        visited[start] = true

        while (queue.length) {
            console.log(queue)
            currentVertex = queue.shift()
            result.push(currentVertex)

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true
                    queue.push(neighbor)
                }
            })
        }
        return result
    }
}

let myGraph = new Graph()
myGraph.addVertex('a')
myGraph.addVertex('b')
myGraph.addVertex('c')

myGraph.addEdge('a', 'b')
myGraph.addEdge('b', 'c')

// myGraph.removeEdege('a', 'b')

// myGraph.removeVertex('a')

console.log(myGraph)

// console.log(myGraph.DFS_Recursive('a'))
// console.log(myGraph.DFS_Iterative('a'))
console.log(myGraph.BFS('c'))