import React from 'react';

function AccFormComp(props) {
    const account = props.account;

    function focusElement(name) {
        const el = document.querySelector(`[name=${name}]`);
        el.focus();
        el.select();
    }

    function onSave(e) {
        // Get all the input values into a account object to save
        const accountToSave = {};
        accountToSave.key = account.key;

        const idaccountform = document.getElementById('idaccountform');
        const inputs = idaccountform.getElementsByTagName('input');

        for (let i = 0; i < inputs.length; i++) {
            accountToSave[inputs[i].name] = inputs[i].value;
        }

        // Do some simple validation
        try {
            if (!accountToSave.name) {
                focusElement('name');
                throw new Error('Name can not be blank');
            }
            if (!accountToSave.balance) {
                focusElement('balance');
                throw new Error('Balance can not be blank');
            }
            props.save(accountToSave);
            props.userMsg("Saved", "status");
        } catch (e) {
            props.userMsg(e.message, "error");
        }
        e.preventDefault();
    }

    function onDelete(e) {
        console.log('AccountForm.onDelete');
        const accountToDelete = {};
        accountToDelete.key = account.key;
        console.log(props.accs, 'onDelete accs');
        const idaccountform = document.getElementById('idaccountform');
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
            console.log('AccountForm.onDelete-try');
            props.delete(accountToDelete);
            props.userMsg("Deleted", "status");
        } catch (e) {
            props.userMsg(e.message, "error");
            console.log('AccountForm.onDelete-catch');
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
            <form id="idaccountform" onSubmit={onSave}>
                <div className="form-group">
                    <label>Account:</label>
                    <input name="name" defaultValue={account.name} className="input-control" placeholder='name...' />

                    <label className="right-inline">Balance:</label>
                    <input name="balance" defaultValue={account.balance} className="input-control" placeholder='balance...' type='number' />
                </div>

                <div className="form-group">
                    <label>&nbsp;</label>
                    <button onClick={onSave}>Save</button>
                    <button onClick={onDelete}>Delete</button>
                    <button onClick={onCancel}>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default AccFormComp;