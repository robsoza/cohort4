import func from './NodeLinkedListFunc';

test('test plumming', () => {
    expect(func.test1()).toBe('hi')
})

test('test LinkedList Function', () => {
//create list
let list = new func.LinkedList();

//insert first and test
list.insert('a', 1);
expect(list.total()).toBe(1);
expect(list.first()).toBe('a');
expect(list.show()).toBe('a 1');
expect(list.next()).toBe('a');
expect(list.last()).toBe('a');
expect(list.previous()).toBe('a');
list.delete();
expect(list.first()).toBe(null);
expect(list.delete()).toBe('list is empty');
expect(list.total()).toBe(0);

//insert second and test
list.insert('a', 1);
list.insert('b', 2);
expect(list.show()).toBe('b 2');
expect(list.first()).toBe('a');
expect(list.next()).toBe('b');
expect(list.last()).toBe('b');
expect(list.previous()).toBe('a');

//delete
list.delete();
expect(list.show()).toBe('b 2');

//insert third and test
list.insert('c', 3);
expect(list.show()).toBe('c 3');
expect(list.total()).toBe(5);

//delete
list.delete();
expect(list.show()).toBe('b 2');

//insert more
list.insert('d', 4);
expect(list.previous()).toBe('b');

list.insert('e', 5);
list.insert('f', 6);
list.insert('g', 7);

//previous
expect(list.previous()).toBe('f');
expect(list.previous()).toBe('e');
expect(list.previous()).toBe('d');

//next
expect(list.next()).toBe('e');
expect(list.next()).toBe('f');
expect(list.next()).toBe('g');

});