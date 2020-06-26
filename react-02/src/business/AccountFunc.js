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

    getAccs() {
        let accs = this.accs;
        return accs;
    }

    addOrUpdate(account) {
        let defaults;
        this.lastKey++;
        account.key = this.lastKey;
        defaults = {
            name: account.name,
            balance: account.balance,
            key: account.key
        }
        this.accs[account.key] = { ...defaults };
    }

    addTransaction(transaction) {
        let account = new Account(this.get(transaction.key));

        if (transaction.type === "deposit") {
            account.deposit(Number(transaction.amount));
        } if (transaction.type === "withdraw") {
            account.withdraw(Number(transaction.amount));
        }
        let defaults = {
            name: transaction.name,
            balance: account.balance,
            key: transaction.key
        }
        this.accs[transaction.key] = { ...defaults };
    }

    delete(account) {
        delete this.accs[account.key]
    }
}

class Account {
    static lastKey = 0;
    constructor(obj) {
        const defaults = { balance: '', name: '', key: '' }
        const data = { ...defaults, ...obj };
        this.balance = Number(data.balance);
        this.name = data.name;
        this.key = data.key;
    }

    deposit(num) {
        this.balance += Number(num);
    }

    withdraw(num) {
        this.balance -= Number(num);
    }
}

export default { Account, Accs };