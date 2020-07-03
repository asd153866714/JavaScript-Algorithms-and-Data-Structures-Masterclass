class Graph {
    constructor() {
        this.addjacencyList = {}
    }
    addVertex(vertex) {
        if (!this.addjacencyList[vertex]) this.addjacencyList[vertex] = []
    }
    addEdge(v1, v2) {
        this.addjacencyList[v1].push(v2)
        this.addjacencyList[v2].push(v1)
    }
    removeVertex(vertex) {
        while (this.addjacencyList[vertex].length) {
            const addjacencyVertex =  this.addjacencyList[vertex].pop()
            this.removeEdege(vertex, addjacencyVertex)
        }
        delete this.addjacencyList[vertex]
    }
    removeEdege(v1, v2) {
        this.addjacencyList[v1] = this.addjacencyList[v1].filter(
            (v) => v !== v2
        )
        this.addjacencyList[v2] = this.addjacencyList[v2].filter(
            (v) => v !== v1
        )
    }
}

let myGraph = new Graph()
myGraph.addVertex('a')
myGraph.addVertex('b')
myGraph.addVertex('c')

myGraph.addEdge('a', 'b')
myGraph.addEdge('b', 'c')

// myGraph.removeEdege('a', 'b')

myGraph.removeVertex('a')

console.log(myGraph)