import React from 'react';

function AccountFormComp(props) {
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
            if (!accountToSave.balance) {
                focusElement('balance');
                throw new Error('Balance can not be blank');
            }
            if (isNaN(accountToSave.balance)) {
                throw new Error('Balance must be a Number');
            }
            if (!accountToSave.name) {
                focusElement('name');
                throw new Error('Name can not be blank');
            }
            if (!isNewAcc(accountToSave.name)) {
                throw new Error('Account exists');
            }

            props.save(accountToSave);
            props.userMsg("Saved", "status");
        } catch (e) {
            props.userMsg(e.message, "error");
        }
        e.preventDefault();
    }

    function isNewAcc(name) {
        name = name.toUpperCase()
        Object.keys(props.accs).forEach(key => {
            let accName = props.accs[key].name.toUpperCase();
            if (accName === name) { name = null }
        }); return name;
    }

    function onCancel(e) {
        props.cancel(account)
        e.preventDefault()
    }

    return (
        <div>
            <h1>My Accounts</h1>
            <form id="idaccountform" onSubmit={onSave}>
                <fieldset>
                    <legend>Create an Account</legend>
                    <div>
                        <label>Initial balance:</label>
                        <input
                            name="balance"
                            defaultValue={account.balance}
                            className="input-control"
                            placeholder='amount...'
                        />

                        <label>Account's Name:</label>
                        <input
                            name="name"
                            defaultValue={account.name}
                            className="input-control"
                            placeholder='name...'
                        />
                    </div>

                    <div>
                        <label>&nbsp;</label>
                        <button onClick={onSave}> Save </button>
                        <button onClick={onCancel}> Cancel </button>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}

export default AccountFormComp;