class ListNode {
    constructor(subject, amount, key) {
        this.forwardNode = null;
        this.subject = subject;
        this.amount = amount;
        this.key = key;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
        this.lastKey = 0;
    }

    length() {
        return this.length;
    }

    head() {
        return this.head;
    }

    getNewList() {
        return new LinkedList();
    }

    insert(subject, amount) {
        this.lastKey++;
        let node = new ListNode(subject, amount, this.lastKey);
        if (!this.head) {
            this.head = node;
        } else {
            let currentNode = this.head;
            while (currentNode.forwardNode) {
                currentNode = currentNode.forwardNode;
            }
            currentNode.forwardNode = node;
        }
        this.length++;
    };

    delete(subject) {
        let currentNode = this.head;
        let previousNode;
        if (currentNode.subject === subject) {
            this.head = currentNode.forwardNode;
        } else {
            while (currentNode.subject !== subject) {
                previousNode = currentNode;
                currentNode = currentNode.forwardNode;
            }
            previousNode.forwardNode = currentNode.forwardNode;
        }
        this.length--;
    };

    isEmpty() {
        return this.length === 0;
    };

    indexOf(subject) {
        let currentNode = this.head;
        let index = -1;
        while (currentNode) {
            index++;
            if (currentNode.subject === subject) {
                return index;
            } currentNode = currentNode.forwardNode;
        } return -1;
    };

    subjectAt(index) {
        let currentNode = this.head;
        let count = 0;
        while (count < index) {
            count++;
            currentNode = currentNode.forwardNode
        } return currentNode.subject;
    };

    insertAt(index, subject) {
        let node = new ListNode(subject);
        let currentNode = this.head;
        let previousNode;
        let currentIndex = 0;

        if (index > this.length) {
            return false;
        }

        if (index === 0) {
            node.forwardNode = currentNode;
            this.head = node;
        } else {
            while (currentIndex < index) {
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.forwardNode;
            }
            node.forwardNode = currentNode;
            previousNode.forwardNode = node;
        }
        this.length++;
    }

    deleteAt(index) {
        let currentNode = this.head;
        let previousNode;
        let currentIndex = 0;
        if (index < 0 || index >= this.length) {
            return null
        }
        if (index === 0) {
            this.head = currentNode.forwardNode;
        } else {
            while (currentIndex < index) {
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.forwardNode;
            }
            previousNode.forwardNode = currentNode.forwardNode
        }
        this.length--;
        return currentNode.subject;
    }

    show() {
        let output = '[';
        let currentNode = this.head;

        while (currentNode) {
            output += currentNode.subject;
            output += ' ';
            output += currentNode.amount;
            if (currentNode.forwardNode) {
                output += ',';
                output += ' ';
            }
            currentNode = currentNode.forwardNode;
        }
        output += ']';
        return output
    }

    last() {
        let currentNode = this.head;
        let count = 0;
        while (count < this.length - 1) {
            count++;
            currentNode = currentNode.forwardNode
        } return currentNode.subject;
    };
}

export default { Node, LinkedList };