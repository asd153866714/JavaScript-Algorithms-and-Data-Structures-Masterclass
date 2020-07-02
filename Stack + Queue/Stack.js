class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}
class Stack {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }
    push(value) {
        var newNode = new Node(value)
        if (!this.first) {
            this.first = newNode
            this.last = newNode
        } else {
            var temp = this.first
            this.first = newNode
            this.first.next = temp
        }
        return ++this.size
    }
    pop() {
        if (this.size === 0) {
            return null
        } else {
            var temp = this.first
            if (this.first === this.last) {
                this.last = null
            }
            this.first = this.first.next
            this.size --
            return temp.value
        }
    }
}

var stack = new Stack()
stack.push('01')
stack.push('02')
stack.push('03')
console.log(stack.pop())