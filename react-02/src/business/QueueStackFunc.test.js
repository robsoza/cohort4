import func from './QueueStackFunc';

test('FifoQueue function', () => {
    // enqueue
    const queue = new func.FifoQueue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue).toEqual({ "queue": [1, 2, 3] })

    // dequeue
    queue.dequeue();
    expect(queue).toEqual({ "queue": [2, 3] })
    queue.dequeue();
    expect(queue).toEqual({ "queue": [3] })
    queue.dequeue();
    expect(queue).toEqual({ "queue": [] })
})

test('LifoStack function', () => {
    // put in
    const stack = new func.LifoStack();
    stack.putIn(1);
    stack.putIn(2);
    stack.putIn(3);
    expect(stack).toEqual({ "stack": [1, 2, 3] })

    // take out
    stack.takeOut();
    expect(stack).toEqual({ "stack": [1, 2] })
    stack.takeOut();
    expect(stack).toEqual({ "stack": [1] })
    stack.takeOut();
    expect(stack).toEqual({ "stack": [] })
})