/**
 * @description working with objects
 * @name Account
 */

class Account {

    constructor(name, initBalance) {
        this.name = name;
        this.balance = initBalance;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        this.balance -= amount;
    }

    show() {
        return [this.name, this.balance];
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
        let i = this.accs.findIndex(x => x.name===name);
        this.accs.splice(i,1);   
    }
}

export { Account, AccountController };