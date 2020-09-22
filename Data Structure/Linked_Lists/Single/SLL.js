class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        let newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length ++
        return this
    }

    pop() {
        if (!this.head) return null

        let current = this.head
        let prev = current

        while (current.next) {
            prev = current
            current = current.next
        }

        this.tail = prev
        this.tail.next = null
        this.length --
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current
    }

    shift() {
        if (!this.head) return null
        let currentHead = this.head
        this.head = currentHead.next
        this.length --
        if (this.length === 0) {
            this.tail = null
        }
        return currentHead
    }

    unshift(value) {
        let newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length ++
        return this
    }
    
    get(index) {
        if (index < 0 || index.length >= this.length) return null
        let counter = 0
        let current = this.head
        while (counter !== index) {
            current = current.next
            counter ++
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
        if (index < 0 || index > this.length) return false
        if (index === this.length) return this.push(value)
        if (index === 0) return this.unshift(value)

        let newNode = new Node(value)
        let prev = this.get(index - 1)
        let temp = prev.next
        
        prev.next = newNode
        newNode.next = temp
        this.length ++
        return true
    }

    removeFrom(index) {
        if (index < 0 || index >= this.length) return undefined
        if (index === 0) return this.shift()
        if (index === this.length - 1) return this.pop()

        let prev = this.get(index - 1)
        let removed = prev.next
        prev.next = removed.next

        this.length --
        return removed
    }

    reverse() {
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        var next;
        var prev = null;
        for(var i = 0; i < this.length; i++){
          next = node.next;
          node.next = prev;
          prev = node;
          node = next;
        }
        return this;
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

let myList = new SinglyLinkedList()

myList.push(100)
myList.push(201)
myList.push(250)
myList.push(350)
myList.push(999)

myList.pop()
myList.reverse()
myList.shift()
myList.unshift(650)
myList.insertAt(2, 450)
myList.removeFrom(3)
myList.set(2, 460)

myList.display()