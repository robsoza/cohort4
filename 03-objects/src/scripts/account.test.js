import { Account, AccountController } from './account.js'

test('does the Account function work?', () => {
    let myAcc = new Account('Checking', 25);
    expect(myAcc.name).toBe('Checking');
    expect(myAcc.balance).toBe(25);
    expect(myAcc).toEqual({ 'name': 'Checking', 'balance': 25 });
});

test('does the deposit function work?', () => {
    let myAcc1 = new Account('Checking', 25);
    myAcc1.deposit(25);
    expect(myAcc1.balance).toBe(50);
    myAcc1.deposit(50);
    expect(myAcc1.balance).toBe(100);
});

test('does the withdraw function work?', () => {
    let myAcc2 = new Account('Checking', 100);
    myAcc2.withdraw(25);
    expect(myAcc2.balance).toBe(75);
    myAcc2.withdraw(120);
    expect(myAcc2.balance).toBe(-45);
});

test('does the show function work?', () => {
    let myAcc3 = new Account('Checking', 100);
    let myAcc4 = new Account('Savings', 200);
    expect(myAcc3.show()).toStrictEqual(['Checking', 100]);
    expect(myAcc4.show()).toStrictEqual(['Savings', 200]);
});

test('Does that addAcc function work?', () => {
    const control = new AccountController;

    let myAcc4 = new Account('Savings', 50);
    let myAcc5 = new Account('Bonds', 60);

    control.addAcc(myAcc4);
    control.addAcc(myAcc5);

    expect(control.accs[0].name).toBe('Savings');
    expect(control.accs[0].balance).toBe(50);

    expect(control.accs[1].name).toBe('Bonds');
    expect(control.accs[1].balance).toBe(60);
});

test('does that deleteAcc function work?', () => {
    const control1 = new AccountController;
    let myAcc6 = new Account('Savings', 50);
    let myAcc7 = new Account('Bonds', 60);

    control1.addAcc(myAcc6);
    control1.addAcc(myAcc7);

    control1.deleteAcc('Bonds');
    expect(control1.accs).toEqual([{ 'name': 'Savings', 'balance': 50 }]);

    control1.deleteAcc('Savings');
    expect(control1.accs).toEqual([]);
});

test('does that accsTotal function work?', () => {
    const control2 = new AccountController;
    let myAcc8 = new Account('Checkings', 20);
    let myAcc9 = new Account('Bonds', 30);

    control2.addAcc(myAcc8);
    control2.addAcc(myAcc9);
    expect(control2.accsTotal()).toBe(50);

    control2.deleteAcc('Checkings');
    expect(control2.accsTotal()).toBe(30);
});

test('does that biggestAcc function work?', () => {
    const control3 = new AccountController;
    let myAcc10 = new Account('Checkings', 20);
    let myAcc11 = new Account('Bonds', 30);

    control3.addAcc(myAcc10);
    control3.addAcc(myAcc11);
    expect(control3.biggestAcc()).toBe(30);

    let myAcc12 = new Account('Savings', 100);
    control3.addAcc(myAcc12);
    expect(control3.biggestAcc()).toBe(100);
});

test('does that smallestAcc function work?', () => {
    const control4 = new AccountController;
    let myAcc14 = new Account('Checkings', 20);
    let myAcc15 = new Account('Bonds', 30);

    control4.addAcc(myAcc14);
    control4.addAcc(myAcc15);
    expect(control4.smallestAcc()).toBe(20);

    let myAcc16 = new Account('Savings', 10);
    control4.addAcc(myAcc16);
    expect(control4.smallestAcc()).toBe(10);
});