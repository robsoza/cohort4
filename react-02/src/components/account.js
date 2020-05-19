import React, { Component } from "react"

class Account extends Component {
    
    state = { initBalance: "", accName: "" }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <form>
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
                    value={this.state.lastName}
                    name="accName"
                    placeholder="Account Name"
                    onChange={this.handleChange}
                />
                <h1>{this.state.accName} {this.state.initBalance}</h1>
            </form>
        )
    }
}

export default Account