import React from 'react'

function AccountHistory() {
    return (
        <fieldset className="his">
        <legend>Account's History</legend>
        <table className="customers">
            <tr>
                <th>Accounts Total:</th>
                <th>Biggest Account:</th>
                <th>Smallest Account:</th>
            </tr>
            <tr>
                <td id="current-balance">0</td>
                <td id="biggest-acc">0</td>
                <td id="smallest-acc">0</td>
            </tr>
        </table>
        <div id="acc-history"> </div>
    </fieldset>
    )
}

export default AccountHistory