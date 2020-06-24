import React from 'react';

export default function AccountListComp(props) {

    let myAccsList;

    if (props.accs) {
        myAccsList = Object.keys(props.accs).map(k => {
            const acc = props.accs[k];
            return (
                <li key={acc.key} mykey={acc.key}>{acc.name} ${Number(acc.balance).toFixed(2)}</li>
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
            <fieldset>
                <legend>Account History</legend>
                <ol className="clList accList" onClick={onClick}>
                    {myAccsList}
                </ol>
                <button onClick={onAdd}>Add</button>
            </fieldset>
        </div>
    )
}