/**
 * @description working with objects
 * @name accounts
 */

class Account {

    constructor(name, balance) {
        this.name = name;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance++;
    }

    withdraw(amount) {
        this.balance--;
    }

    showBalance() {
        return `Your ${this.name} Balance is ${"$" + this.valance}`
    }

}

export { Account };