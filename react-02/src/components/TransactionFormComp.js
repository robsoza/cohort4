import React from 'react';

function TransactionFormComp(props) {
    const account = props.account;

    function focusElement(name) {
        const el = document.querySelector(`[name=${name}]`);
        el.focus();
        el.select();
    }

    function onSave(e) {

        const transaction = {};
        transaction.key = account.key;
        const inputs = document.querySelectorAll('input,select');

        for (let i = 0; i < inputs.length; i++) {
            transaction[inputs[i].name] = inputs[i].value;
        }

        try {
            if (!transaction.amount) {
                focusElement('amount');
                throw new Error('Amount can not be blank');
            }

            if (!transaction.name) {
                focusElement('name');
                throw new Error('Name can not be blank');
            }

            if (!transaction.type) {
                throw new Error('Type can not be blank');
            }

            props.trans(transaction);
            props.userMsg("Added", "clstatus");
        } catch (e) {
            props.userMsg(e.message, "error");
        }
        e.preventDefault();
    }

    function onDelete(e) {
        const accountToDelete = {};
        accountToDelete.key = account.key;
        const idaccountform = document.getElementById('idtxnform');
        const inputs = idaccountform.getElementsByTagName('input');

        for (let i = 0; i < inputs.length; i++) {
            accountToDelete[inputs[i].name] = inputs[i].value;
        }

        try {
            if (!accountToDelete.name) {
                focusElement('name');
                throw new Error('Name can not be blank');
            }

            props.delete(accountToDelete);
            props.userMsg("Deleted", "clstatus");
        } catch (e) {
            props.userMsg(e.message, "error");
        }
        e.preventDefault();
    }

    function onCancel(e) {
        props.cancel(account);
        e.preventDefault();
    }

    return (
        <div>
            <h1>My Accounts</h1>
            <fieldset>
                <legend>Make A Transaction</legend>
                <form id="idtxnform" onSubmit={onSave}>
                    <label>Transaction Amount:</label>
                    <input name="amount" placeholder="Enter amount..." />

                    <label>Account's Name:</label>
                    <input name='name' defaultValue={account.name} />

                    <label>Transaction's Type:</label>
                    <select name='type'>
                        <option value=''>Select a type...</option>
                        <option value="deposit">Deposit</option>
                        <option value="withdraw">Withdraw</option>
                    </select>
                    <div>
                        <label>&nbsp;</label>
                        <button onClick={onSave}>Save</button>
                        <button onClick={onDelete}>Delete</button>
                        <button onClick={onCancel}>Cancel</button>
                    </div>
                </form>
            </fieldset>
        </div>
    )
}

export default TransactionFormComp;