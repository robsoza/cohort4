import funcs from './NodeLinkedListFunc.js';

test('Our Plumbing', () => {
    console.log(funcs.functions.hello());
});

test('Our Node Class', () => {
    let node = new funcs.Node('id1', 'a', 1);
    expect(node.id).toBe('id1');
    expect(node.subject).toBe('a');
    expect(node.amount).toBe(1);
});

test('Our LinkedList', () => {
    const linkedList = new funcs.LinkedList();
    expect(linkedList.current).toBeNull();

    expect(linkedList.first()).toBe('Empty List');

    linkedList.insert('a', 1);
    expect(linkedList.get().id).toBe('id1');
    expect(linkedList.next().id).toBe('id1');
    expect(linkedList.next().id).toBe('id1');
    expect(linkedList.prev().id).toBe('id1');
    expect(linkedList.prev().id).toBe('id1');

    linkedList.insert('b', 2);
    expect(linkedList.get().id).toBe('id2');
    expect(linkedList.next().id).toBe('id1');
    expect(linkedList.next().id).toBe('id2');
    expect(linkedList.prev().id).toBe('id1');
    expect(linkedList.prev().id).toBe('id2');

    linkedList.insert('c', 3);
    expect(linkedList.get().id).toBe('id3');
    expect(linkedList.next().id).toBe('id1');
    expect(linkedList.next().id).toBe('id2');
    expect(linkedList.prev().id).toBe('id1');
    expect(linkedList.prev().id).toBe('id3');

    expect(linkedList.first().id).toBe('id1');
    expect(linkedList.last().id).toBe('id3');
    expect(linkedList.total()).toBe(6);
    expect(linkedList.show()).toBe('c 3');
});

test('Our LinkedList delete', () => {
    const linkedList = new funcs.LinkedList();
    expect(linkedList.first()).toBe('Empty List');

    linkedList.insert('a', 1);
    expect(linkedList.first().id).toBe('id1');

    expect(linkedList.next().id).toBe('id1');
    expect(linkedList.next().id).toBe('id1');
    expect(linkedList.prev().id).toBe('id1');
    expect(linkedList.prev().id).toBe('id1');

    linkedList.delete()
    expect(linkedList.first()).toBe('Empty List');

    linkedList.insert('a', 1);
    linkedList.insert('b', 2);
    linkedList.insert('c', 3);

    expect(linkedList.get().id).toBe('id3');
    linkedList.delete();
    expect(linkedList.get().id).toBe('id1');
    expect(linkedList.next().id).toBe('id2');
    expect(linkedList.next().id).toBe('id1');

    linkedList.delete('id1');
    expect(linkedList.get().id).toBe('id2');

    linkedList.delete('id2');
    expect(linkedList.get()).toBe('Empty List');
    expect(linkedList.first()).toBe('Empty List');
    expect(linkedList.last()).toBe('Empty List');
    expect(linkedList.next()).toBe('Empty List');
    expect(linkedList.prev()).toBe('Empty List');

    linkedList.insert('a', 1);
    linkedList.insert('b', 2);
    linkedList.insert('c', 3);
    linkedList.delete();
    linkedList.delete();
    linkedList.delete();
    linkedList.delete();

    linkedList.insert('a', 1);
    linkedList.insert('b', 2);
    linkedList.insert('c', 3);
    linkedList.insert('d', 4);
    linkedList.delete();
    expect(linkedList.next().id).toBe('id2');
    linkedList.delete();
    expect(linkedList.next().id).toBe('id1');
    linkedList.delete();
    linkedList.delete();
    linkedList.delete();
    expect(linkedList.first()).toBe('Empty List');

});