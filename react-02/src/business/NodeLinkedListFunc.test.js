import funcs from './NodeLinkedListFunc';

test('test LinkedList', () => {
    const control = new funcs.LinkedList();
    let list = control.getNewList();
    
    list.insert('rob', 5);
    list.insert('bob', 5);
    expect(list.length).toBe(2);

    list.insert('ric', 3);
    expect(list.length).toBe(3);

    list.insert('meg', 2);
    expect(list.length).toBe(4);

    list.delete("ric");
    expect(list.length).toBe(3);
    expect(list.indexOf('ric')).toBe(-1);
  
    expect(list.isEmpty()).toBe(false);
    expect(list.indexOf('meg')).toBe(2);

    expect(list.subjectAt(0)).toBe('rob');

    list.insertAt(0, 'mac');
    expect(list.subjectAt(0)).toBe('mac');

    list.deleteAt(0);
    expect(list.subjectAt(0)).toBe('rob');
    expect(list.length).toBe(3);

    expect(list.show()).toEqual('[rob 5, bob 5, meg 2]');
    expect(list.last()).toBe('meg');
    
});