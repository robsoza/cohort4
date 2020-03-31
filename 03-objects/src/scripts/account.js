/**
 * @description working with objects
 * @name Account
 */

class Account {

    constructor(name, v) {
        this.name = name;
        this.balance = Number(v);
    }

    deposit(v) {
        this.balance += Number(v);
    }

    withdraw(v) {
        this.balance -= Number(v);
    }

    show() {

        let acc = [this.name, ' : $' + this.balance.toFixed(2)];
        return acc.join('');
    }
}

class AccountController {

    constructor() {
        this.accs = [];
    }

    addAcc(acc) {
        this.accs.push(acc);
    }

    deleteAcc(name) {
        let i = this.accs.findIndex(x => x.name === name);
        this.accs.splice(i, 1);
    }

    accsTotal() {
        if (this.accs.length != []) {
            let value = this.accs.map((x) => x.balance);
            value = value.reduce((a, b) => (Number(a) + Number(b)));
            return Number.parseFloat(value).toFixed(2);
        }
    }

    biggestAcc() {
        if (this.accs.length != []) {
            this.accs.sort((a, b) => { return b.balance - a.balance });
            let value = [this.accs[0].name, ' : $' + (this.accs[0].balance.toFixed(2))];
            return value.join('');
        }
    }

    smallestAcc() {
        if (this.accs.length != []) {
            this.accs.sort((a, b) => { return a.balance - b.balance });
            let value = [this.accs[0].name, ' : $' + (this.accs[0].balance.toFixed(2))];
            return value.join('');
        }
    }

    isNewAcc(name) {
        for (let v in this.accs) {
            if (this.accs[v].name === name) {
                return 'error';
            }
        } return name;
    }
}

export { Account, AccountController };