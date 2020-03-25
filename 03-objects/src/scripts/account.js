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
        return this.name, this.valance;
    }
}

class AccountController {

    constructor() {
        this.accs = [];
    }

    addAcc(acc) {
        let accs = this.accs;
        let msg = "";
        acc.name = acc.name.toLowerCase();
        acc.name = acc.name.charAt(0).toUpperCase() + acc.name.slice(1);
        if (isNaN(element) || element == "") {
            msg = "The input is not a valid number";
        } if (accs.find((element) => {
            return element.name === name;
        }) === undefined) {
            accs.push(acc.name, acc.balance);
            msg = "This account was created";
        } else {
            msg = "The account alreaty exists"
        } return [accs, msg];
    }
}

export { Account, AccountController };