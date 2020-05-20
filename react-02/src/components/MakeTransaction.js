import React, { Component } from "react"

class MakeTransaction extends Component {

    state = { txnAmount: "", accName: "", txnType: "" }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <fieldset className="txns">
                <legend>Make a Transaction</legend>
                <label>Transaction Amount: </label>
                <input
                    type="text"
                    value={this.state.txnAmount}
                    name="txnAmount"
                    placeholder="Transaction Amount"
                    onChange={this.handleChange}
                />
                <br />
                <label>Account Name:</label>
                <select
                    value={this.state.accName}
                    onChange={this.handleChange}
                    name="accName"
                >
                    <option value="">select account</option>
                </select>
                <br />
                <label>Transaction Type:</label>
                <select
                    value={this.state.txnType}
                    onChange={this.handleChange}
                    name="txnType"
                >
                    <option value="">transaction type</option>
                    <option value="deposit">Deposit</option>
                    <option value="withdraw">Withdraw</option>
                </select>
                <div>
                    <button class="btn">Make a Transaction</button>
                </div>
            </fieldset>
        )
    }
}

export default MakeTransaction