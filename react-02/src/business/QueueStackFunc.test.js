import func from './QueueStackFunc';

test('FifoQueue function', () => {
    // enqueue
    const queue = new func.FifoQueue();
    queue.enqueue(1);
    expect(queue.show()).toBe('1');
    queue.enqueue(2);
    expect(queue.show()).toBe('1,2');
    queue.enqueue(3);
    expect(queue.show()).toBe('1,2,3');

    // dequeue
    queue.dequeue();
    expect(queue.show()).toEqual('2,3');
    queue.dequeue();
    expect(queue.show()).toEqual('3');
    queue.dequeue();
    expect(queue.show()).toEqual('Empty Queue');
    queue.dequeue();
    expect(queue.show()).toEqual('Empty Queue');
})

test('LifoStack function', () => {
    // put in
    const stack = new func.LifoStack();
    stack.putIn(1);
    expect(stack.show()).toBe('1');
    stack.putIn(2);
    expect(stack.show()).toBe('2\r\n1');
    stack.putIn(3);
    expect(stack.show()).toEqual('3\r\n2\r\n1');

    // take out
    stack.takeOut();
    expect(stack.show()).toBe('2\r\n1');
    stack.takeOut();
    expect(stack.show()).toBe('1');
    stack.takeOut();
    expect(stack.show()).toBe('Empty Stack');
    stack.takeOut();
    expect(stack.show()).toBe('Empty Stack');
})