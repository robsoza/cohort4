class FifoQueue {
    constructor() {
        this.queue = [];
    }

    enqueue(el) {
        return this.queue.push(el);
    }

    dequeue() {
        return this.queue.shift();
    }
}

class LifoStack {
    constructor() {
        this.stack = [];
    }

    putIn(el) {
        return this.stack.push(el)
    }

    takeOut() {
        return this.stack.pop();
    }
}

export default { FifoQueue, LifoStack };