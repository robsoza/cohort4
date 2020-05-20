import React, { Component } from "react"

class CreateAccount extends Component {

    state = { initBalance: "", accountName: "" }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <fieldset className="accs">
                <legend>Create an Account</legend>
                <label>Initial Balance: </label>
                <input
                    type="text"
                    value={this.state.initBalance}
                    name="initBalance"
                    placeholder="Initial Balance"
                    onChange={this.handleChange}
                />
                <br />
                <label>Account Name: </label>
                <input
                    type="text"
                    value={this.state.accName}
                    name="accName"
                    placeholder="Account Name"
                    onChange={this.handleChange}
                />
                <div>
                    <button class="btn">Create new account</button>
                </div>
            </fieldset>
        )
    }
}

export default CreateAccount