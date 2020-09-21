class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }
    BFS() {
        var node = this.root,
            data = [],
            queue = []
        queue.push(node)
    
        while (queue.length) {
            node = queue.shift()
            data.push(node.value)
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        return data
    }
    
    Inorder() {
        var data = []
        let traverse = (node) => {
            if (node.left) traverse(node.left)
            data.push(node.value)
            if (node.right) traverse(node.right)
        }
        traverse(this.root)
        return data
    }

    Preorder() {
        var data = []
        let traverse = (node) => {
            data.push(node.value)
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)
        }
        traverse(this.root)
        return data
    }

    Postorder() {
        var data = []
        let traverse = (node) => {
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)
            data.push(node.value)
        }
        traverse(this.root)
        return data
    }
}