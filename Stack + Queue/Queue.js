class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }
    
    enqueue(value) {
        var newNode = new Node(value)
        if (!this.first) {
            this.first = newNode
            this.last = newNode
        } else {
            this.last.next = newNode
            this.last = newNode
        }
        return ++this.size
    }
    dequeue(){
        if (!this.first) return null
        var temp = this.first
        if (this.first === this.last) {
            this.last = null
        }
        this.first = this.first.next
        this.size --
        return temp.value
    }
}

var myQueue = new Queue()
myQueue.enqueue('01')
myQueue.enqueue('02')
myQueue.enqueue('03')
console.log(myQueue.dequeue())