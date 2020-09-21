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

    insert(value) {
        var newNode = new Node(value)
        if (this.root === null) {
            this.root = newNode
            return this
        }
        var current = this.root
        while (true) {
            if (value === current.value) return false
            if (value < current.value) {
                if (current.left === null) {
                    current.left = newNode
                } else {
                    current = current.left
                } 
            } else if (value > current.value) {
                if (current.right === null) {
                    current.right = newNode
                } else {
                    current = current.right
                } 
            }
        }       
    }
}