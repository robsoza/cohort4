import React, { useState, useEffect } from 'react';

import funcs from '../business/AccountFunc';
import Loading from './LoadingComp';
import AccountFormComp from './AccountFormComp';
import AccountsListComp from './AccountsListComp';
import TransactionFormComp from './TransactionFormComp';

function AccountComp() {
    const [accsCtrl, setAccsCtrl] = useState();
    const [account, setAccount] = useState();
    const [loading, setLoading] = useState();
    const [message, setMessage] = useState({ text: "", class: "" });
    const [onDom, setOnDom] = useState();

    useEffect(() => {
        // This effect will run any time a state variable changes
    });

    useEffect(() => {
        // Load the accs from the API only the first time
        async function fetchData() {
            try {
                startLoadingAnimation();
                const myAccs = new funcs.Accs()
                setAccsCtrl(myAccs);
                await myAccs.getAccs();
                setOnDom('acc-list');
                userMsg("Accounts Loaded", "status");
            } catch (e) {
                userMsg("***** Turn the server on please! *****", "error");
            } finally {
                endLoadingAnimation();
            }
        }
        fetchData();
    }, []);


    function startLoadingAnimation() {
        setLoading(<Loading />);
    }

    function endLoadingAnimation() {
        setLoading('');
    }

    // onSave
    async function onSave(account) {
        await accsCtrl.addOrUpdate(account);
        setOnDom('acc-list');
    }

    // onAdd
    const onAdd = () => {
        setAccount(accsCtrl.getNewAccount());
        setOnDom('acc-form');
        userMsg();
      }

    // on delete account
    async function onDelete(account) {
        await accsCtrl.delete(account);
        await accsCtrl.getAccs();
        setOnDom('acc-list');
        userMsg();
    }

    // Show onCancel
    function onCancel() {
        setOnDom('acc-list');
        userMsg();
    }

    // Show transaction form
    function onShow(key) {
        setAccount(accsCtrl.get(key));
        setOnDom('txn-form');
        userMsg();
    }

    // set the message based on the class
    function userMsg(msg, type) {
        const cls = (type) ? 'cl' + type : 'clstatus';
        setMessage({ text: msg, class: cls });
    }

    let output;
    if (onDom === "acc-list") {
        output =
            <AccountsListComp
                accs={accsCtrl.accs}
                onAdd={onAdd}
                showOne={onShow}
                userMsg={userMsg}
            />
    } if (onDom === "acc-form") {
        output =
            <AccountFormComp
                account={account}
                save={onSave}
                cancel={onCancel}
                userMsg={userMsg}
            />
    } else if (onDom === "txn-form") {
        output =
            <TransactionFormComp
                account={account}
                save={onSave}
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