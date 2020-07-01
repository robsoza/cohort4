//create a node for the queue
class FifoNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
//create a queue class
class FifoQueue {
    constructor() {
        this.front = null;
        this.back = null;
    }
    //enqueue
    enqueue(value) {
        let node = new FifoNode(value);

        if (!this.front) {
            this.front = node;
            this.back = node;
        }
        else {
            this.back.next = node;
            this.back = node;
        }
    }
    //dequeue
    dequeue() {
        let node = this.front;
        if (this.front) {
            this.front = this.front.next;
        }
        if (!this.front) {
            this.back = null;
        }
        return node;
    }
    //show the queue
    show() {
        if (!this.front) {
            return 'Empty Queue';
        } else {
            let tempQueue = [];
            let tempNode = this.front;
            while (tempNode) {
                tempQueue.push(tempNode.value);
                tempNode = tempNode.next;
            }
            return tempQueue.join(',');
        }
    }
}
//create a node for the stack
class StackNode {
    constructor(value, nextNode) {
        this.value = value;
        this.nextNode = nextNode;
    }
}
//create a stack class
class LifoStack {
    constructor() {
        this.top = null;
    }
    //putIn to the stack
    putIn(value) {
        let node = new StackNode(value, this.top);
        this.top = node;
    }
    //takeOut of the stack
    takeOut() {
        let value = null;

        if (this.top) {
            value = this.top.value;
            this.top = this.top.nextNode;
        }
        return value;
    }
    //show the stack
    show() {
        if (!this.top) {
            return 'Empty Stack';
        } else {
            let tempStack = [];
            let tempNode = this.top;
            while (tempNode) {
                tempStack.push(tempNode.value);
                tempNode = tempNode.nextNode;
            }
            return tempStack.join('\r\n');
        }
    }
}

export default { FifoQueue, LifoStack };