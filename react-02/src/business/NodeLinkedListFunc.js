const functions = {
    hello() {
        return 'Hello World';
    }
}

class LinkedList {
    constructor() {
        this.current = null;
        this.head = null;
        this.tail = null;
        this.count = 0;
    }

    insert(subject, amount) {
        this.count++;
        const id = 'id' + this.count;
        const node = new Node(id, subject, amount);
        if (this.current) {

            //connect the new to the current.nextNode
            node.nextNode = this.current.nextNode;
            node.nextNode.prevNode = node;

            this.current.nextNode = node;
            node.prevNode = this.current;

            this.current = node;
            this.tail = node;
        } else {
            this.head = node;
            this.tail = node;
            this.current = node;
            node.nextNode = node;
            node.prevNode = node;
        }
        return id;
    }

    first() {
        if (this.current) {
            this.current = this.head;
            return this.current;
        }
        return 'Empty List';
    }

    last() {
        if (this.current) {
            this.current = this.tail;
            return this.current;
        }
        return 'Empty List';
    }

    next() {
        if (this.current) {
            this.current = this.current.nextNode;
            return this.current;
        }
        return 'Empty List';
    }

    prev() {
        if (this.current) {
            this.current = this.current.prevNode;
            return this.current;
        }
        return 'Empty List';
    }

    get() {
        if (this.current) {
            return this.current;
        }
        return 'Empty List';
    }
    
    total() {
        let total = 0; let i = 0;
        let current = this.head;
        while (current && this.count > i++) {
            total += Number(current.amount);
            current = current.nextNode;
        }
        return total;
    }

    show() {
        return `${this.current.subject} ${this.current.amount}`
    }

    delete() {
        //Empty list
        if (!this.current) { return 'Empty List' };
        //delete the head or first node
        if (this.current === this.head) {
            let current = this.head;
            this.head = this.current = current.nextNode;
            this.count--;
            if (current === this.tail) {
                this.head = this.current = this.tail = null;
            } else {
                this.head.prevNode = current.prevNode;
                this.tail = current.prevNode;
                this.tail.nextNode = current.nextNode;
            }
            return this.current;
        };
        //search the list with a while loop
        let current = this.head;
        let previous;
        while (current !== this.current) {
            previous = current;
            current = current.nextNode;
        }
        this.current = previous.nextNode = current.nextNode;
        this.count--;
        //delete the tail or last node
        if (current === this.tail) {
            this.current.prevNode = this.tail = previous;
            this.tail.prevNode = previous.prevNode;
        } else {
            //else delete the middle
            current.nextNode.prevNode = current.prevNode;
        }
    };
};

class Node {
    constructor(id, subject, amount) {
        this.id = id;
        this.subject = subject;
        this.amount = amount;
    }
}

export default { functions, LinkedList, Node };