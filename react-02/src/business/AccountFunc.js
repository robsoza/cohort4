import postData from './Fetch.js'
const url = 'http://localhost:5000/';

// test the plumbing
function hello() {
    return "Hello World";
}

class Accs {

    constructor() {
        this.accs = {};
        this.lastKey = 0;
    }

    length() {
        return Object.keys(this.accs).length;
    }

    get(key) {
        return this.accs[key];
    }

    getNewAccount() {
        return new Account({});
    }

    async getAccs() {
        const data = await postData(url + "all");

        // create a dictionary of accs and keep track of the last key
        const accs = {};
        data.forEach(x => {
            accs[x.key] = x;
            this.lastKey = (x.key > this.lastKey) ? x.key : this.lastKey;
        });

        this.accs = accs;
    }

    async addOrUpdate(account) {
        let theUrl;

        if (account.key) {
            theUrl = url + "update"
        } else {
            theUrl = url + "add"
            this.lastKey++;
            account.key = this.lastKey;
        }

        await postData(theUrl, account);
        this.accs[account.key] = account;
    }

    async addTransaction(transaction) {
        let theUrl = url + "update";
        let account = new Account(this.get(transaction.key));

        if (transaction.type === "deposit") {
            account.deposit(Number(transaction.amount));
        } else if (transaction.type === "withdraw") {
            account.withdraw(Number(transaction.amount));
        }

        let updateAccount = this.getNewAccount();
        updateAccount.name = transaction.name;
        updateAccount.balance = account.balance;
        updateAccount.key = account.key;

        await postData(theUrl, updateAccount);
        this.accs[account.key] = updateAccount;
    }

    total() {
        const a = this.accs;
        let total = 0;
        Object.keys(a).forEach(function (key) {
            total += a[key].balance;
        })
        return total;
    }

    async delete(account) {
        let theUrl;
        if (account.key) {
            theUrl = url + "delete"
        }
        await postData(theUrl, account);
        this.accs[account.key] = account;
    }
}

class Account {
    static lastKey = 0;
    constructor(obj) {
        const defaults = { balance: '', name: "", key: "" }
        const data = { ...defaults, ...obj };
        this.balance = Number(data.balance);
        this.name = data.name;
        this.key = data.key;
    }

    newKey() {
        Account.lastKey++;
        this.key = Account.lastKey;
    }

    deposit(num) {
        this.balance += Number(num);
    }

    withdraw(num) {
        this.balance -= Number(num);
    }
}

export default { Account, Accs, hello, url };