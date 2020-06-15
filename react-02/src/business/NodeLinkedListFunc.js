//test plumming
function test1() {
    return 'hi'
}

class Node {
    constructor(subject, amount) {
        this.subject = subject
        this.amount = amount
        this.forwardNode = null;
        this.backwardNode = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.currentNode = null;
    }

    insert(subject, amount) {
        let newNode = new Node(subject, amount);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.currentNode = newNode;
        } else {
            this.tail.forwardNode = newNode;
            newNode.backwardNode = this.tail;
            this.tail = newNode;
            this.currentNode = this.tail;
        }
    }

    first() {
        if (this.head) {
            this.currentNode = this.head
            return this.currentNode.subject;
        }
        return null
    }

    last() {
        this.currentNode = this.tail
        return this.currentNode.subject;
    }

    next() {
        if (this.currentNode.forwardNode) {
            this.currentNode = this.currentNode.forwardNode;
        }
        return this.currentNode.subject;
    }

    previous() {
        if (this.currentNode.backwardNode) {
            this.currentNode = this.currentNode.backwardNode;
        }
        return this.currentNode.subject;
    }

    show() {
        return `subject: ${this.currentNode.subject}, amount: ${this.currentNode.amount}`
    }

    delete() {
        if (this.currentNode) {
            if (this.currentNode === this.head) {
                if (this.currentNode === this.tail) {
                    this.head = null;
                    this.tail = null;
                    this.currentNode = null;
                } else {
                    this.head = this.currentNode.forwardNode;
                    this.head.backwardNode = null;
                    this.currentNode = this.head;
                }

            } else if (this.currentNode === this.tail) {
                if (this.currentNode === this.head) {
                    this.head = null;
                    this.tail = null;
                    this.currentNode = null;
                } else {
                    this.tail = this.currentNode.backwardNode;
                    this.tail.forwardNode = null;
                    this.currentNode = this.tail
                }

            } else {
                this.currentNode.backwardNode.forwardNode = this.currentNode.forwardNode;
                this.currentNode.forwardNode.backwardNode = this.currentNode.backwardNode;
                this.currentNode = this.currentNode.backwardNode;
            }
        }
        else return 'list is empty'
    }

    total() {
        let total = 0;
        let tempNode = this.head;
        if (tempNode) {
            while (tempNode !== null) {
                total += parseInt(tempNode.amount);
                tempNode = tempNode.forwardNode
            }
        }
        return total;
    }
}

export default { test1, Node, LinkedList };