import React, { useEffect, useContext, useRef } from 'react';
import AccountFormComp from './AccountFormComp';
import AccountListComp from './AccountListComp';
import TransactionFormComp from './TransactionFormComp';
import AccountSummaryComp from './AccountSummaryComp';
import { AppContext } from '../AppContext';

export default function AccountComp() {
    const isCurrent = useRef(true);
    const context = useContext(AppContext);

    useEffect(() => {
        if (isCurrent.current) { getData() };
        const timer = setTimeout(() => { userMsg() }, 5000);
        return () => clearTimeout(timer);
    });

    function getData() {
        try {
            if (isCurrent.current) {
                context.accsCtrl.getAccs();
                context.handleStateChange([{
                    state: 'onDom',
                    newState: 'account-list'
                }]);
                userMsg("My Accounts", "status");
                return isCurrent.current = false;
            }
        } catch (e) {
            userMsg("***** accounts not loaded! *****", "error");
        }
    }

    // onSave
    function onSave(account) {
        context.accsCtrl.addOrUpdate(account);
        context.handleStateChange([{
            state: 'onDom',
            newState: 'account-list'
        }]);
    }

    // onAdd
    const onAdd = () => {
        context.handleStateChange([{
            state: 'account',
            newState: context.accsCtrl.getNewAccount()
        }]);
        context.handleStateChange([{
            state: 'onDom',
            newState: 'account-form'
        }]);
        userMsg("add new account", "status");
    }

    // on delete account
    function onDelete(account) {
        context.accsCtrl.delete(account);
        context.accsCtrl.getAccs();
        context.handleStateChange([{
            state: 'onDom',
            newState: 'account-list'
        }]);
        userMsg("saved", "status");
    }

    // Show onCancel
    function onCancel() {
        context.handleStateChange([{
            state: 'onDom',
            newState: 'account-list'
        }]);
        userMsg("canceled", "status");
    }

    // Show transaction form
    function onShow(key) {
        context.handleStateChange([{
            state: 'account',
            newState: context.accsCtrl.get(key)
        }]);
        context.handleStateChange([{
            state: 'onDom',
            newState: 'transaction-form'
        }]);
        userMsg("transaction from", "status");
    }

    // set the message based on the class
    function userMsg(msg, type) {
        const cls = (type) ? 'cl' + type : 'clstatus';
        context.handleStateChange([{
            state: 'accMessage',
            newState: { text: msg, class: cls }
        }])
    }

    function onTrans(transaction) {
        context.accsCtrl.addTransaction(transaction);
        context.handleStateChange([{
            state: 'onDom',
            newState: 'account-list'
        }]);
        userMsg("saved", "status");
    }

    let output;
    if (context.state.onDom === "account-list") {
        output =
            <div>
                <AccountSummaryComp
                    accs={context.accsCtrl.accs}
                />
                <AccountListComp
                    accs={context.accsCtrl.accs}
                    onAdd={onAdd}
                    showOne={onShow}
                    userMsg={userMsg}
                />
            </div>
    } if (context.state.onDom === "account-form") {
        output =
            <AccountFormComp
                account={context.state.account}
                accs={context.accsCtrl.accs}
                save={onSave}
                cancel={onCancel}
                userMsg={userMsg}
            />
    } else if (context.state.onDom === "transaction-form") {
        output =
            <TransactionFormComp
                account={context.state.account}
                trans={onTrans}
                delete={onDelete}
                cancel={onCancel}
                userMsg={userMsg}
            />
    }

    return (
        <div>
            <main className="App-main">
                {output}
            </main>
            <label className={context.state.accMessage.class}>{context.state.accMessage.text}</label>
        </div>
    );
}