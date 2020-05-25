import React from 'react';

function AccountsListComp(props) {

    let myAccsList;

    if (props.accs) {
        myAccsList = Object.keys(props.accs).map(k => {
            const acc = props.accs[k];
            return (
                <li key={acc.key} mykey={acc.key}> {acc.name} ${Number(acc.balance).toFixed(2)}</li>
            )
        });
    }

    function onClick(e) {
        props.showOne(e.target.getAttribute("mykey"));
    }

    const onAdd = () => {
        props.onAdd();
    }

    return (
        <div>
            <h1>My Accounts</h1>
            <fieldset>
                <legend>Account History</legend>
                <ol className="accList" onClick={onClick}>
                    {myAccsList}
                </ol>
                <button onClick={onAdd}>Add</button>
            </fieldset>
        </div>
    )
}

export default AccountsListComp;