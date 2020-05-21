import funcs from './AccountFunc';

global.fetch = require('node-fetch');

test('test plumbing', () => {
    expect(funcs.hello()).toBe("Hello World");
});

test('test postdata gives a good error if api server not started', async () => {
    try {
        // dummy url:port that does not exist
        const url = 'http://localhost:5678/';
        const data = await funcs.postData(url);
        // The above line should throw an error and we should never get to the next line
        expect("").toBe("This bad port # should have caused an exception.");
    }
    catch (e) {
        expect(e.code).toBe("ECONNREFUSED");
    }
    finally {
    }
});

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

test('test load Accs from api', async () => {

    // crreate controller
    const accsCtrl = new funcs.Accs();

    try {
        const url = funcs.url;
        const postData = funcs.postData;

        // clear the server and check length
        let data = await postData(url + 'clear');
        await accsCtrl.getAccs();
        expect(accsCtrl.length()).toBe(0);

        // add first account
        let account = accsCtrl.getNewAccount();
        account.name = 'Checking';
        account.balance = 20;
        await accsCtrl.addOrUpdate(account);

        // check accs length
        await accsCtrl.getAccs();
        expect(accsCtrl.length()).toBe(1);

        // add second account
        account = accsCtrl.getNewAccount();
        account.name = 'Savings';
        account.balance = 45;
        await accsCtrl.addOrUpdate(account);

        // check accs length
        await accsCtrl.getAccs();
        expect(accsCtrl.length()).toBe(2);

        // check accs name
        account = accsCtrl.get('1');
        expect(account.name).toBe('Checking');
        account = accsCtrl.get('2');
        expect(account.name).toBe('Savings');

        // update acc1 info
        account = accsCtrl.get('1');
        account.name = "Loans";
        account.balance = 35;
        await accsCtrl.addOrUpdate(account);

        // check updated accs info
        await accsCtrl.getAccs();
        account = accsCtrl.get('1');
        expect(account.name).toBe('Loans');
        expect(account.balance).toBe(35);
        account = accsCtrl.get('2');
        expect(account.name).toBe('Savings');

        // Test the last key works
        expect(accsCtrl.lastKey).toBe(2);
        const accsCtrl2 = new funcs.Accs();
        await accsCtrl2.getAccs();
        expect(accsCtrl2.lastKey).toBe(2);

    } catch (e) {
        console.log("*** Start the server please ***");
        console.log(e);
        expect("").toBe(e.message);
    }
});

/*
    This tests an interesting problem found in user testing.
    When an instance of a account Class is copied into a simple object
    the account methods are not copied only the properties are copied.
*/

test('test load account instance from account copy', async () => {
    const accsCtrl = new funcs.Accs();

    // clear the server
    let data = await funcs.postData(funcs.url + 'clear');

    // create new account
    let account;
    account = accsCtrl.getNewAccount();
    account.name = "Checking";
    account.balance = 35;

    // deep clone the new account
    const newAccount = { ...account };
    await accsCtrl.addOrUpdate(newAccount);
});

//Make sure addOrUpdate updates the internal storage

test('test addOrUpdate updates internal storage', async () => {

    // clear the server
    let data = await funcs.postData(funcs.url + 'clear');
    funcs.Account.lastKey = 0;
    const accsCtrl = new funcs.Accs();

    let acc1, acc2;
    acc1 = accsCtrl.getNewAccount();
    acc1.name = "Loan";
    acc1.balance = 30;
    await accsCtrl.addOrUpdate(acc1);

    // console.log(accsCtrl.accs);

    acc2 = accsCtrl.get('1');
    expect(acc2.name).toBe('Loan');

    acc2.name = "Savings";
    await accsCtrl.addOrUpdate(acc2);
    acc1 = accsCtrl.get('1');
    expect(acc1.name).toBe('Savings');
});