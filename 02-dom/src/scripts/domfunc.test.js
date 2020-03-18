import functions from "./domfuncs.js"

test("does the buildLi function work?", () => {
    const element = functions.buildLi("This is");
    expect(element.textContent.substr(0, 4)).toBe("This");
    expect(element.textContent.substr(0, 7)).toBe("This is");
});

test("does the buildCard function work?", () => {
    const element = functions.buildCard("MyCard")
    expect(element).toBeTruthy();
    expect(element.textContent.substr(0, 2)).toBe("My");
    expect(element.textContent.substr(0, 6)).toBe("MyCard");
});

test("does the buildBtn function work?", () => {
    const group = document.createElement("div");
    const btn1 = functions.buildBtn("Add Before", "addCardBeforeBtn", "cardBtn")
    const btn2 = functions.buildBtn("Add After", "addCardAfterBtn", "cardBtn")
    group.appendChild(btn1);
    group.appendChild(btn2);
    
    expect(btn1).toBeTruthy();
    expect(group.children.length).toBe(2);
    expect(group.childNodes[0].textContent).toBe("Add Before");
    expect(group.childNodes[1].textContent).toBe("Add After");
});

test("Does the addCardBefor function work?", () => {
    const group = document.createElement("div");
    const element = functions.buildCard("First Insert");
    group.appendChild(element);
    // console.log(group);
    // console.log(group.children);
    // console.log(element.parentElement);
    expect(group.children.length).toBe(1);

    const txt = 'New Element'
    functions.addCardBefore(element, txt);
    expect(group.children.length).toBe(2);
    expect(group.children[0].textContent.substr(0, 11)).toBe(txt);
    expect(group.children[1].textContent.substr(0, 12)).toBe("First Insert");
});

test("Does the addCardAfter function work?", () => {
    const group = document.createElement("div");
    const element = functions.buildCard("First Insert");
    group.appendChild(element);
    // console.log(group);
    // console.log(group.children);
    // console.log(element.parentElement);
    expect(group.children.length).toBe(1);

    const txt = 'New Element'
    functions.addCardAfter(element, txt);
    expect(group.children.length).toBe(2);
    expect(group.children[0].textContent.substr(0, 12)).toBe("First Insert");
    expect(group.children[1].textContent.substr(0, 11)).toBe("New Element");
});

test('does the deleteCard function work?', () => {
    const group = document.createElement('div');
    const card1 = functions.buildCard('First insert');
    const card2 = functions.buildCard('Second insert');
    group.appendChild(card1);
    expect(group.children.length).toBe(1);
    group.appendChild(card2);
    expect(group.children.length).toBe(2);

    functions.deleteCard(card1);
    expect(group.children.length).toBe(1);
    functions.deleteCard(card2);
    expect(group.children.length).toBe(0);
});