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
        let myacc = [this.name, ' : $' + this.balance.toFixed(2)];
        return myacc.join('');
    }
}

class AccountController {

    constructor() {
        this.accs = [];
    }

    addAcc(name, num) {
        let pushAcc = new Account(name, num);
        this.accs.push(pushAcc);
    }

    showAddedAcc(name) {
            let myAcc = this.accs.find(x => x.name === name);
            myAcc = [myAcc.name, ' : $' + myAcc.balance.toFixed(2)];
            console.log(myAcc);
            return myAcc.join('');
    }

    deleteAcc(name) {
        let myAcc = this.accs.find(x => x.name === name);
        let i = this.accs.indexOf(myAcc);
       this.accs.splice(i,1);
    }

    accsTotal() {
        let value = this.accs.map((x) => x.balance);
        if (value.length > 0) {
            value = value.reduce((a, b) => (Number(a) + Number(b)));
            return '$' + Number.parseFloat(value).toFixed(2);
        }
    }

    biggestAcc() {
        this.accs.sort((a, b) => { return b.balance - a.balance });
        let value = [this.accs[0].name, ' : $' + this.accs[0].balance.toFixed(2)];
        return value.join('');
    }

    smallestAcc() {
        this.accs.sort((a, b) => { return a.balance - b.balance });
        let value = [this.accs[0].name, ' : $' + (this.accs[0].balance.toFixed(2))];
        return value.join('');
    }

    reNameAcc(name, newName) {
        newName = newName.toUpperCase();
        let myAcc = this.accs.find(x => x.name === name);
        let i = this.accs.indexOf(myAcc);
        this.accs[i].name = newName;
    }

    isNewAcc(name) {
            for (let v in this.accs) {
                if (this.accs[v].name === name) {
                    return 'ERROR';
                }
            } return name;
        }

    isNewAmount(num) {
        if (isNaN(num)) {
            return 'ERROR';
        } return num;
    }
}

export { Account, AccountController };