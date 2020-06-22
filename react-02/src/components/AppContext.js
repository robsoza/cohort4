import React, { Component } from 'react';
import App from '../App';
import LinkedList from '../business/NodeLinkedListFunc.js'


export const AppContext = React.createContext();

export class ContextProvider extends Component {
    ctrl = new LinkedList.LinkedList();

    state = {
        node: "",
        total: "",
        loading: "",
        message: { text: "", class: "" }
    }

    handleStateChange = (states) => {
        for (let i = 0; i < states.length; i++) {
            this.setState({
                [states[i].state]: states[i].newState

            })

        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <AppContext.Provider
                value={{
                    state: this.state,
                    ctrl: this.ctrl,
                    handleStateChange: this.handleStateChange,
                    handleChange: this.handleChange
                }}>
                <App />
            </AppContext.Provider>
        )
    }

}