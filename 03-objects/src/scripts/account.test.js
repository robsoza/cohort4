import { Account, AccountController } from "./account.js"

test('does the Account function work?', () => {
    let myAcc = new Account('Checking', 25);
    expect(myAcc.name).toBe('Checking');
    expect(myAcc.balance).toBe(25);
    expect(myAcc).toEqual({'name':'Checking', 'balance': 25});
});

test('does the deposit function work?', () => {
    let myAcc = new Account('Checking', 25);
    myAcc.deposit(25);
    expect(myAcc.balance).toBe(50);
    myAcc.deposit(50);
    expect(myAcc.balance).toBe(100);
});

test('does the withdraw function work?', () => {
    let myAcc = new Account('Checking', 100);
    myAcc.withdraw(25);
    expect(myAcc.balance).toBe(75);
    myAcc.withdraw(120);
    expect(myAcc.balance).toBe(-45);
});

test('does the show function work?', () => {
    let myAcc = new Account('Checking', 100);
    myAcc.show();
    expect(myAcc).toEqual({'name':'Checking', 'balance': 100});
});

test('Does that addAcc function work?', () => {
    let control = new AccountController;
    let myAcc = new Account ("Savings", 50)
    expect(control.addAcc(myAcc)).toEqual([['Savings', 50], "This account was created"]);
});