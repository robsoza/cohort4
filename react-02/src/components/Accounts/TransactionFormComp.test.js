import React from "react";
import { fireEvent, render, screen } from '@testing-library/react';
import funcs from "../../business/AccountFunc";
import TransactionFormComp from './TransactionFormComp';

//test render and onSave
test('test render and save for TransactionFormComp', async () => {

    // set up the callbacks to test later
    const mockSaveCallback = jest.fn();
    const mockDeleteCallback = jest.fn();
    const mockCancelCallback = jest.fn();
    const mockUserMsgCallback = jest.fn();

    // create an accs controller and a new account
    const accsCtrl = new funcs.Accs()
    const account = accsCtrl.getNewAccount();

    // Render the form
    render(<TransactionFormComp
        account={account}
        trans={mockSaveCallback}
        delete={mockDeleteCallback}
        cancel={mockCancelCallback}
        userMsg={mockUserMsgCallback}
    />);

    // screen.debug()

    // find screen text from h1 'My Accounts'
    screen.getByText(/accounts/i);

    expect(mockSaveCallback.mock.calls.length).toBe(0);
    click('Save');

    //should get 'Amount can not be blank'
    expect(mockUserMsgCallback.mock.calls[0][0]).toMatch(/amount/i);
    expect(mockUserMsgCallback.mock.calls.length).toBe(1);

    //update the amount input and save
    updateValue('amount', 30);
    click('Save');

    //should get 'name can not be blank'
    expect(mockUserMsgCallback.mock.calls[1][0]).toMatch(/name/i);
    expect(mockUserMsgCallback.mock.calls.length).toBe(2);

    //update the name input and save
    updateValue('name', 'Savings');
    click('Save');

    //should get 'type can not be blank'
    expect(mockUserMsgCallback.mock.calls[2][0]).toMatch(/type/i);
    expect(mockUserMsgCallback.mock.calls.length).toBe(3);

    //update the name input and save
    updateValue('type', 'deposit');
    click('Save');

    expect(mockSaveCallback.mock.calls.length).toBe(1);
});

//test render and onDelete
test('test render and delete for TransactionFormComp', async () => {

    // set up the callbacks to test later
    const mockSaveCallback = jest.fn();
    const mockDeleteCallback = jest.fn();
    const mockCancelCallback = jest.fn();
    const mockUserMsgCallback = jest.fn();

    // create an accs controller and a new account
    const accsCtrl = new funcs.Accs()
    const account = accsCtrl.getNewAccount();

    // Render the form
    render(<TransactionFormComp
        account={account}
        trans={mockSaveCallback}
        delete={mockDeleteCallback}
        cancel={mockCancelCallback}
        userMsg={mockUserMsgCallback}
    />);

    // screen.debug()

    // find screen text from h1 'My Accounts'
    screen.getByText(/accounts/i);

    // Trigger a Delete
    click('Delete');

    //should get name can not be blank
    expect(mockUserMsgCallback.mock.calls[0][0]).toMatch(/name/i);
    expect(mockUserMsgCallback.mock.calls.length).toBe(1);

    //update the name input and save
    updateValue('name', 'Savings');
    click('Save');

    //should get amount can not be empty, but we only need name to delete
    expect(mockUserMsgCallback.mock.calls[1][0]).toMatch(/amount/i);
    expect(mockUserMsgCallback.mock.calls.length).toBe(2);

    //trigger a delete
    click('Delete');

    expect(mockUserMsgCallback.mock.calls[2][0]).toMatch(/deleted/i);
    expect(mockUserMsgCallback.mock.calls.length).toBe(3);
    expect(mockDeleteCallback.mock.calls.length).toBe(1);
});

//test render and onCancel
test('test render and cancel for TransactionFormComp', async () => {

    // set up the callbacks to test later
    const mockSaveCallback = jest.fn();
    const mockDeleteCallback = jest.fn();
    const mockCancelCallback = jest.fn();
    const mockUserMsgCallback = jest.fn();

    // create an accs controller and a new account
    const accsCtrl = new funcs.Accs()
    const account = accsCtrl.getNewAccount();

    // Render the form
    render(<TransactionFormComp
        account={account}
        trans={mockSaveCallback}
        delete={mockDeleteCallback}
        cancel={mockCancelCallback}
        userMsg={mockUserMsgCallback}
    />);

    // screen.debug()

    // find screen text from h1 'My Accounts'
    screen.getByText(/accounts/i);

    // Trigger a cancel
    click('Cancel');

    //no mesage will be displayed
    expect(mockCancelCallback.mock.calls.length).toBe(1);
});

//utility functions to save tons of code

function updateValue(name, value) {
    document.querySelector(`[name=${name}]`).value = value;
}

function click(txt) {
    fireEvent.click(
        screen.getByText(txt)
    );
}