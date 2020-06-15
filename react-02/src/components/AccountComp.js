import React, { useState, useEffect } from 'react';

import accountFunc from '../business/AccountFunc';
import Loading from './LoadingComp';
import AccountFormComp from './AccountFormComp';
import AccountListComp from './AccountListComp';
import TransactionFormComp from './TransactionFormComp';
import AccountSummaryComp from './AccountSummaryComp';

function AccountComp() {
    const [accsCtrl, setAccsCtrl] = useState();
    const [account, setAccount] = useState();
    const [loading, setLoading] = useState();
    const [message, setMessage] = useState({ text: "", class: "" });
    const [onDom, setOnDom] = useState();

    useEffect(() => {
        console.log('----useEffect: general');
      });

    useEffect(() => {
        // Load the accs from the API only the first time
        function getData() {
            try {
                startLoadingAnimation();
                const accsCtrl = new accountFunc.Accs();
                setAccsCtrl(accsCtrl);
                accsCtrl.getAccs();
                setOnDom('account-list');
                userMsg("Accounts Loaded", "status");
            } catch (e) {
                userMsg("***** Turn the server on please! *****", "error");
            } finally {
                endLoadingAnimation();
            }
        }
        getData();
    }, []);

    function startLoadingAnimation() {
        setLoading(<Loading />);
    }

    function endLoadingAnimation() {
        setLoading('');
    }

    // onSave
    function onSave(account) {
        accsCtrl.addOrUpdate(account);
        setOnDom('account-list');
    }

    // onAdd
    const onAdd = () => {
        setAccount(accsCtrl.getNewAccount());
        setOnDom('account-form');
        userMsg();
    }

    // on delete account
    function onDelete(account) {
        accsCtrl.delete(account);
        accsCtrl.getAccs();
        setOnDom('account-list');
        userMsg();
    }

    // Show onCancel
    function onCancel() {
        setOnDom('account-list');
        userMsg();
    }

    // Show transaction form
    function onShow(key) {
        setAccount(accsCtrl.get(key));
        setOnDom('transaction-form');
        userMsg();
    }

    // set the message based on the class
    function userMsg(msg, type) {
        const cls = (type) ? 'cl' + type : 'clstatus';
        setMessage({ text: msg, class: cls });
    }

    function onTrans(transaction) {
        accsCtrl.addTransaction(transaction);
        setOnDom('account-list');
        userMsg();
    }

    let output;
    if (onDom === "account-list") {
        output =
            <div>
                <AccountSummaryComp
                    accs={accsCtrl.accs}
                />
                <AccountListComp
                    accs={accsCtrl.accs}
                    onAdd={onAdd}
                    showOne={onShow}
                    userMsg={userMsg}
                />
            </div>
    } if (onDom === "account-form") {
        output =
            <AccountFormComp
                account={account}
                accs={accsCtrl.accs}
                save={onSave}
                cancel={onCancel}
                userMsg={userMsg}
            />
    } else if (onDom === "transaction-form") {
        output =
            <TransactionFormComp
                account={account}
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
                {loading}
            </main>
            <label className={message.class}>{message.text}</label>
        </div>
    );
}

export default AccountComp;