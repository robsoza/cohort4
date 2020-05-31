const url = 'http://localhost:5000/';

// test the plumbing
function hello() {
    return "Hello World";
}

async function postData(url = '', data = {}) {
    // Default options are marked with *

    const response = await fetch(url, {
        method: 'POST',     // *GET, POST, PUT, DELETE, etc.
        mode: 'cors',       // no-cors, *cors, same-origin
        cache: 'no-cache',  // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow',         // manual, *follow, error
        referrer: 'no-referrer',    // no-referrer, *client
        body: JSON.stringify(data)  // body data type must match "Content-Type" header
    });

    const json = await response.json();    // parses JSON response into native JavaScript objects
    json.status = response.status;
    json.statusText = response.statusText;

    return json;
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
        let account = this.get(transaction.key);
        account = new Account(account);

        if (transaction.type === "deposit") {
            account.deposit(Number(transaction.amount));
        } else if (transaction.type === "withdraw") {
            account.withdraw(Number(transaction.amount));
        }

        await postData(theUrl, account);
        this.accs[account.key] = account;
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
        await postData(theUrl, { key: account.key });
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

export default { Account, Accs, hello, url, postData };