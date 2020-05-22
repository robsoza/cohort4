import React, { useState, useEffect } from 'react';

import AccFormComp from './AccFormComp';
import AccListComp from './AccListComp';
import Loading from './LoadingComp'
import funcs from '../business/AccountFunc';

function AccAppComp() {
    // useState
    const [accsCtrl, setAccsCtrl] = useState();
    const [account, setAccount] = useState();
    const [loading, setLoading] = useState();
    const [message, setMessage] = useState({ text: "", class: "" });
    const [toShow, setToShow] = useState();

    useEffect(() => {
        // This effect will run any time a state variable changes
    });

    /*
      This will only run once because the second parm to
      useEffect is what to monitor. In this case it is an emply
      array. The empty array will never change
    */

    useEffect(() => {
        // Load the accs from the API only the first time
        async function fetchData() {
            try {
                startLoadingAnimation();
                const myAccs = new funcs.Accs()
                setAccsCtrl(myAccs);
                await myAccs.getAccs();
                setToShow('list');
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

    // on save account
    async function onSave(account) {
        await accsCtrl.addOrUpdate(account);
        setToShow('list');
    }

    // on delete account
    async function onDelete(account) {
        await accsCtrl.delete(account);
        await accsCtrl.getAccs();
        setToShow('list');
        userMsg();
    }

    function onCancel() {
        setToShow('list');
        userMsg();
    }

    // Add a new account to the list
    const onAdd = () => {
        setAccount(accsCtrl.getNewAccount());
        setToShow('form');
        userMsg();
    }

    // Show an item from the AccountList
    function onShow(key) {
        setAccount(accsCtrl.get(key));
        setToShow('form');
        userMsg();
        console.log(key, 'AccountApp.onShow');
    }

    function userMsg(msg, type) {
        // set the class based on the type of message
        const cls = (type) ? 'cl' + type : 'clstatus';
        setMessage({ text: msg, class: cls });
    }

    let output;
    if (toShow === "list") {
        output =
            <AccListComp
                accs={accsCtrl.accs}
                showOne={onShow}
                onAdd={onAdd}
            />
    } else if (toShow === "form") {
        output =
            <AccFormComp
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

export default AccAppComp;