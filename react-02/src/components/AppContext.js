import React, { Component } from 'react';
import App from '../App';
import LinkedListFunc from '../business/NodeLinkedListFunc'
import AccountFunc from '../business/AccountFunc'
import QueueStackFunc from '../business/QueueStackFunc'

export const AppContext = React.createContext();

export class ContextProvider extends Component {
    listCtrl = new LinkedListFunc.LinkedList();
    accsCtrl = new AccountFunc.Accs();
    queueCtrl = new QueueStackFunc.FifoQueue();
    stackCtrl = new QueueStackFunc.LifoStack();

    state = {
        //linkedList
        node: '',
        total: '',
        loading: '',
        listMessage: { text: '', class: '' },
        //account
        account: '',
        onDom: 'account-list',
        accMessage: { text: '', class: '' },
        //queue and stack
        fifoQueue: '',
        lifoStack: '',
        fifoNode: 1,
        lifoNode: 1,
        fifoLifoMessage: { text: '', class: '' }
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
                    listCtrl: this.listCtrl,
                    accsCtrl: this.accsCtrl,
                    queueCtrl: this.queueCtrl,
                    stackCtrl: this.stackCtrl,
                    handleStateChange: this.handleStateChange,
                    handleChange: this.handleChange
                }}>
                <App />
            </AppContext.Provider>
        )
    }
}