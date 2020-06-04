import funcs from './LinkedList';

test('test LinkedList', () => {
    const control = new funcs.LinkedList();
    let list = control.getNewList();
    
    list.add('cat');
    list.add('dog');
    expect(list.length).toBe(2);

    list.add('pig');
    expect(list.length).toBe(3);

    list.add('cow');
    expect(list.length).toBe(4);

    list.remove("pig");
    expect(list.length).toBe(3);
    expect(list.indexOf('pig')).toBe(-1);
    expect(list.isEmpty()).toBe(false);
    expect(list.indexOf('cow')).toBe(2);

    expect(list.elementAt(0)).toBe('cat');

    list.addAt(0, 'cow');
    expect(list.elementAt(0)).toBe('cow');

    list.removeAt(0);
    expect(list.elementAt(0)).toBe('cat');
});