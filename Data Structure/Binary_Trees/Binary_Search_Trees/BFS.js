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

    find(value) {
        if (this.root === null) return false
        var current = this.root
            found = false
        while (current && !found) {
            if (value < current.value) {
                current = current.left
            } else if (value > current.value) {
                current = current.right
            } else {
                found = true
            }
        }
        if (!found) return false
        return current
    }

    contain(value) {
        if (this.root === null) return false
        var current = this.root
            found = false
        while (current && !found) {
            if (value < current.value) {
                current = current.left
            } else if (value > current.value) {
                current = current.right
            } else {
                return true
            }
        }
        return false
    }
}

let myTree = new BinarySearchTree()
myTree.insert(01)
myTree.insert(02)
myTree.insert(03)
myTree.insert(04)

console.log(myTree)