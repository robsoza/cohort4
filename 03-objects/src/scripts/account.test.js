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
    expect(myAcc1.balance).toBe(100.00);
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
    expect(myAcc3.show()).toStrictEqual('Checking : $100.00');
    expect(myAcc4.show()).toStrictEqual('Savings : $200.00');
});

test('Does the addAcc function work?', () => {
    const control = new AccountController;

    control.addAcc('Savings', 50);
    control.addAcc('Bonds', 60);

    expect(control.accs[0].name).toBe('Savings');
    expect(control.accs[0].balance).toBe(50);

    expect(control.accs[1].name).toBe('Bonds');
    expect(control.accs[1].balance).toBe(60);
});


test('does the showAddedAcc function work?', () => {
    const control = new AccountController;
    expect(control.showAddedAcc('Savings', 50)).toStrictEqual('Savings : $50.00');
    expect(control.showAddedAcc('Bonds', 60)).toStrictEqual('Bonds : $60.00');
});

test('does the deleteAcc function work?', () => {
    const control1 = new AccountController;
  
    control1.addAcc('Savings', '50.00');
    control1.addAcc('Bonds', '60.00');

    control1.deleteAcc('Bonds');
    expect(control1.accs).toEqual([{ 'name': 'Savings', 'balance': 50 }]);

    control1.deleteAcc('Savings');
    expect(control1.accs).toEqual([]);
});

test('does the accsTotal function work?', () => {
    const control2 = new AccountController;

    control2.addAcc('Checkings', 20);
    control2.addAcc('Bonds', 30);
    expect(control2.accsTotal()).toBe('$50.00');

    control2.deleteAcc('Checkings');
    expect(control2.accsTotal()).toBe('$30.00');
});

test('does the biggestAcc function work?', () => {
    const control3 = new AccountController;

    control3.addAcc('Checkings', 20);
    control3.addAcc('Bonds', 30);
    expect(control3.biggestAcc()).toBe('Bonds : $30.00');

    let myAcc12 = new Account('Savings', 100);
    control3.addAcc('Savings', 100);
    expect(control3.biggestAcc()).toBe('Savings : $100.00');
});

test('does the smallestAcc function work?', () => {
    const control4 = new AccountController;

    control4.addAcc('Checkings', 20);
    control4.addAcc('Bonds', 30);
    expect(control4.smallestAcc()).toBe('Checkings : $20.00');

    control4.addAcc('Savings', 10);
    expect(control4.smallestAcc()).toBe('Savings : $10.00');
});

test('does the isNewAcc function work?', () => {
    const control5 = new AccountController;
    control5.addAcc('Checkings', 50);
    control5.addAcc('Savings', 50);

    expect(control5.isNewAcc('Checkings')).toEqual('ERROR');
    expect(control5.isNewAcc('Savings')).toEqual('ERROR');
    expect(control5.isNewAcc('Bonds')).toEqual('Bonds');
    expect(control5.isNewAcc('Travel')).toEqual('Travel');
});

test('does the isNewAmmount function work?', () => {
    const control6 = new AccountController;
    expect(control6.isNewAmount(5)).toEqual(5);
    expect(control6.isNewAmount(6)).toEqual(6);
    expect(control6.isNewAmount('C')).toEqual('ERROR');
});