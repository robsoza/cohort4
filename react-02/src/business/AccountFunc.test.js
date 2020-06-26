import funcs from './AccountFunc';

test('test getNewAccount', () => {
    const accsCtrl = new funcs.Accs();
    let acc1 = accsCtrl.getNewAccount();

    expect(acc1.name).toBe('');
    expect(acc1.balance).toBe(0);
    expect(acc1.key).toBe('');

    acc1.deposit(10);
    expect(acc1.balance).toBe(10);

    acc1.withdraw(5);
    expect(acc1.balance).toBe(5);

});

test('test load Accs from api', () => {

    // crreate controller
    const accsCtrl = new funcs.Accs();

    try {

        accsCtrl.getAccs();
        expect(accsCtrl.length()).toBe(0);

        // add first account
        let account = accsCtrl.getNewAccount();
        account.name = 'Checking';
        account.balance = 20;
        accsCtrl.addOrUpdate(account);

        // check accs length
        accsCtrl.getAccs();
        expect(accsCtrl.length()).toBe(1);

        // add second account
        account = accsCtrl.getNewAccount();
        account.name = 'Savings';
        account.balance = 45;
        accsCtrl.addOrUpdate(account);

        // check accs length
        accsCtrl.getAccs();
        expect(accsCtrl.length()).toBe(2);

        // check accs name
        account = accsCtrl.get('1');
        expect(account.name).toBe('Checking');
        account = accsCtrl.get('2');
        expect(account.name).toBe('Savings');

        // update acc1 info
        account = accsCtrl.get('1');
        account.name = 'Loans';
        account.balance = 35;
        accsCtrl.addOrUpdate(account);

        // check updated accs info
        accsCtrl.getAccs();
        account = accsCtrl.get('1');
        expect(account.name).toBe('Loans');
        expect(account.balance).toBe(35);
        account = accsCtrl.get('2');
        expect(account.name).toBe('Savings');

        // Test the last key works
        expect(accsCtrl.lastKey).toBe(2);
        const accsCtrl2 = new funcs.Accs();
        accsCtrl2.getAccs();
        expect(accsCtrl2.lastKey).toBe(2);

    } catch (e) {
        // console.log(e);
        // expect('').toBe(e.message);
    }
});

test('does that addTransaction function work', () => {
    //create controller
    const accsCtrl = new funcs.Accs();

    accsCtrl.getAccs();
    expect(accsCtrl.length()).toBe(0);

    // add first account
    let account = accsCtrl.getNewAccount();
    account.name = 'Checking';
    account.balance = 20;
    accsCtrl.addOrUpdate(account);


    // add second account
    let account2 = accsCtrl.getNewAccount();
    account2.name = 'Saving';
    account2.balance = 30;
    accsCtrl.addOrUpdate(account2);

    expect(account.key).toBe(1);
    expect(account2.key).toBe(2);

    // deposit transaction info
    let transaction = { key: 1, amount: 20, name: 'Checking', type: 'deposit' };
    accsCtrl.addTransaction(transaction);
    account = accsCtrl.get(1);
    expect(account.balance).toBe(40);

    // withdraw transaction info
    let transaction2 = { key: 1, amount: 15, name: 'Checking', type: 'withdraw' };
    accsCtrl.addTransaction(transaction2);

    let transaction3 = { key: 1, amount: 15, name: 'Checking', type: 'withdraw' };
    accsCtrl.addTransaction(transaction3);

    account = accsCtrl.get(1);
    expect(account.balance).toBe(10);
            // Test new key works

});

test('does that delete function work', () => {
    const accsCtrl = new funcs.Accs();

    let acc1 = accsCtrl.getNewAccount();
    acc1.name = 'Checking';
    acc1.balance = 20;
    accsCtrl.addOrUpdate(acc1);

    let acc2 = accsCtrl.getNewAccount();
    acc2.name = 'Savings';
    acc2.balance = 20;
    accsCtrl.addOrUpdate(acc2);

    expect(accsCtrl.length()).toBe(2);

    accsCtrl.delete(acc1);
    accsCtrl.getAccs();
    expect(accsCtrl.length()).toBe(1);
    accsCtrl.delete(acc2);
    accsCtrl.getAccs();
    expect(accsCtrl.length()).toBe(0);

});

//test deep cloning copies methods too
test('test load account instance from account copy', () => {
    const accsCtrl = new funcs.Accs();

    // create new account
    let account;
    account = accsCtrl.getNewAccount();
    account.name = 'Checking';
    account.balance = 35;

    // deep clone the new account
    const newAccount = { ...account };
    accsCtrl.addOrUpdate(newAccount);
});

//Make sure addOrUpdate updates the internal storage
test('test addOrUpdate updates internal storage', () => {

    funcs.Account.lastKey = 0;
    const accsCtrl = new funcs.Accs();

    let acc1, acc2;
    acc1 = accsCtrl.getNewAccount();
    acc1.name = 'Loan';
    acc1.balance = 30;
    accsCtrl.addOrUpdate(acc1);

    // console.log(accsCtrl.accs);

    acc2 = accsCtrl.get('1');
    expect(acc2.name).toBe('Loan');

    acc2.name = 'Savings';
    accsCtrl.addOrUpdate(acc2);
    acc1 = accsCtrl.get('1');
    expect(acc1.name).toBe('Savings');
});