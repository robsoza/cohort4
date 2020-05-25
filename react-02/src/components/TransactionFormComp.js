import React from 'react';

function TransactionFormComp(props) {
    const account = props.account;

    function focusElement(name) {
        const el = document.querySelector(`[name=${name}]`);
        el.focus();
        el.select();
    }

    function onAdd(e) {
        // Get all the input values into a account object to add
        const accountToMakeTransaction = {};
        accountToMakeTransaction.key = account.key;

        const idaccountform = document.getElementById('idtxnform');
        const inputs = idaccountform.getElementsByTagName('input');

        for (let i = 0; i < inputs.length; i++) {
            accountToMakeTransaction[inputs[i].name] = inputs[i].value;
        }
        console.log(accountToMakeTransaction)
        // try {
        //     if (!accountToAdd.name) {
        //         focusElement('name');
        //         throw new Error('Name can not be blank');
        //     }
        //     if (!accountToAdd.amount) {
        //         focusElement('txn-amount');
        //         throw new Error('Amount can not be blank');
        //     }
        //     props.add(accountToAdd);
        //     props.userMsg("Added", "clstatus");
        // } catch (e) {
        //     props.userMsg(e.message, "error");
        // }
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

        // Do some simple validation
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
                <form id="idtxnform" onSubmit={onAdd}>
                    <div>
                        <label>Transaction Amount:</label>
                        <input name="txn-amount" placeholder="Enter amount..." />

                        <label>Account's Name:</label>
                        <input name="name" defaultValue={account.name} />

                        <label>Transaction's Type:</label>
                        <select name="txn-type">
                            <option value="">Select a type...</option>
                            <option value="deposit">Deposit</option>
                            <option value="withdraw">Withdraw</option>
                        </select>
                    </div>

                    <div>
                        <label>&nbsp;</label>
                        <button onClick={onAdd}>Add</button>
                        <button onClick={onDelete}>Delete</button>
                        <button onClick={onCancel}>Cancel</button>
                    </div>
                </form>
            </fieldset>
        </div>
    )
}

export default TransactionFormComp;