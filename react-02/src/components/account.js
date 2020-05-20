import React from 'react';
import CreateAccount from './CreateAccount';
import MakeTransaction from './MakeTransaction'
import AccountHistory from './AccountHistory'

function Account() {
    return (
        <div>
            <h1 className="title"> MY ACCOUNTS </h1>
            <div className="container">
                <CreateAccount />
                <MakeTransaction />
                <AccountHistory />
            </div>
        </div>
    )
}




export default Account;