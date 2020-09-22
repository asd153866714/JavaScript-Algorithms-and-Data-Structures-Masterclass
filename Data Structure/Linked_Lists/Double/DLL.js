class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}


class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        let newNode = new Node(value)
        if (this.length === 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length ++
        return this
    }

    pop() {
        if (!this.head) return undefined
        let poppedNode = this.tail
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.tail = poppedNode.prev
            this.tail.next = null
            poppedNode.prev = null
        }
        this.length --
        return poppedNode
    }

    shift() {
        if (!this.head) return undefined
        let oldHead = this.head
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.head = oldHead.next
            this.head.prev = null
            oldHead.next = null
        }
        this.length --
        return oldHead
    }

    unshift(value) {
        let newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode
        }
        this.length ++
        return this
    }

    get(index) {
        if (index < 0 || index >= this.length) return null
        let count, current;
        if (index <= this.length / 2) {
            count = 0
            current = this.head
            while (count !== index) {
                current = current.next
                count ++
            }
        } else {
            count = this.length - 1
            current = this.tail
            while (count !== index) {
                current = current.prev
                count --
            }
        }
        return current
    }

    set(index, value) {
        let foundNode = this.get(index)
        if (foundNode) {
            foundNode.value = value
            return true
        }
        return false
    }

    insertAt(index, value) {
        if (index <= 0 || index >= this.length) return false
        if (index === 0) return this.unshift()
        if (index === this.length) return this.push()

        let newNode = new Node(value)
        let beforeNode = this.get(index-1)
        let afterNode = beforeNode.next

        beforeNode.next = newNode, newNode.prev = beforeNode;
        newNode.next = afterNode, afterNode.prev = newNode;
        this.length ++
        return true
    }

    removeFrom(index) {
        if (index < 0 || index >= this.length) return undefined
        if (index === 0) return this.shift()
        if (index === this.length - 1) return this.pop()

        let removedNode = this.get(index)
        let beforeNode = removedNode.prev
        let afterNode = removedNode.next

        beforeNode.next = afterNode
        afterNode.prev = beforeNode
        removedNode.prev = null
        removedNode.next = null
        this.length --
        return removedNode
    }

    reverse() {

    }

    display() {
        let current = this.head,
            str = '';
        while (current) {
            str += current.value + ' -> '
            current = current.next
        }
        console.log(str)
        return str
    }
}

let myList = new DoublyLinkedList()

myList.push(100)
myList.push(201)
myList.push(250)
myList.push(350)
myList.push(999)

myList.pop()
myList.shift()
myList.unshift(650)
myList.insertAt(2, 450)
myList.removeFrom(3)
myList.set(2, 460)
// myList.reverse()

myList.display()