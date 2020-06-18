
import React from 'react';

function AccountSummaryComp(props) {
    let value = [];

    if (props.accs) {
        Object.keys(props.accs).forEach(key => {
            value.push({
                name: props.accs[key].name,
                balance: props.accs[key].balance
            });
        });
    };

    let total, smallest, biggest;
    if (value.length) {
        total = value.map((x) => x.balance);
        total = total.reduce((a, b) => Number(a) + Number(b));
        total = "$" + Number(total).toFixed(2);

        smallest = value.sort((a, b) => { return a.balance - b.balance });
        smallest = [value[0].name + " $", Number(value[0].balance).toFixed(2)];

        biggest = value.sort((a, b) => { return b.balance - a.balance });
        biggest = [value[0].name + " $", Number(value[0].balance).toFixed(2)];
    };

    return (
        <div>
            <h1>Accounts</h1>
            <fieldset id="his">
                <legend>Account's Summary</legend>
                <table className="customers">
                    <tbody>
                        <tr>
                            <th>Accounts Total:</th>
                            <th>Biggest Account:</th>
                            <th>Smallest Account:</th>
                        </tr>
                        <tr>
                            <td>{total}</td>
                            <td>{biggest}</td>
                            <td>{smallest}</td>
                        </tr>
                    </tbody>
                </table>
                <div id="acc-history"> </div>
            </fieldset>
        </div>
    )
}

export default AccountSummaryComp;