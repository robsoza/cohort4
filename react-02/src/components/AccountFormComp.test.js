import React from "react";
import { fireEvent, render, screen, act } from '@testing-library/react';

import funcs from "../business/AccountFunc";
import AccountFormComp from './AccountFormComp';

test('test the basic AccountFormComp', async () => {
    //create a mock function to simulate the save, cancel, and userMsg
    // https://jestjs.io/docs/en/mock-functions

    const mockSaveCallback = jest.fn();
    const mockCancelCallback = jest.fn();
    const mockUserMsgCallback = jest.fn();

    // create an accs controller and a new account
    const accsCtrl = new funcs.Accs()
    const account = accsCtrl.getNewAccount();

    // default a few values
    account.name = 'Savings';
    account.balance = 30;

    // Render the form
    render(<AccountFormComp
        account={account}
        save={mockSaveCallback}
        cancel={mockCancelCallback}
        userMsg={mockUserMsgCallback}
    />);
    // screen.debug()

    // Did the names render correctly
    expect(getValue('name')).toBe('Savings');
    expect(getValue('balance')).toBe('30');

    // Update a few values on the form
    updateValue('name', 'Checkings');
    updateValue('balance', 35);

    // Trigger a Save
    click('Save');

    expect(getValue('name')).toBe('Checkings');
    expect(getValue('balance')).toBe('35');

    // The onSaveOrUpdate mock should have been called once
    expect(mockSaveCallback.mock.calls.length).toBe(1);

    // Grab the first parm sent to the mock Save object (which should be the account to Save)
    const saveAccount = mockSaveCallback.mock.calls[0][0];

    // console.log(saveAccount);
    expect(saveAccount.name).toBe('Checkings');
    expect(saveAccount.balance).toBe('35');

    // Trigger a cancel
    click('Cancel');

    // The cancel mock should have been called once
    expect(mockCancelCallback.mock.calls.length).toBe(1);
});

test('test all the attriutes render and are saveed for the basic AccountForm', async () => {
    const dummyData = {
        name: 'namexx',
        balance: '33',
    };

    const mockSaveCallback = jest.fn();
    const mockUserMsgCallback = jest.fn();

    const account = {};
    for (let k in dummyData) {
        account[k] = dummyData[k];
    }

    // Render the form
    render(<AccountFormComp
        account={account}
        save={mockSaveCallback}
        userMsg={mockUserMsgCallback}
    />);
    // screen.debug()

    // make sure every field rendered correctly
    for (let k in dummyData) {
        expect(dummyData[k]).toBe(getValue(k));
    }
    // screen.debug()

    // Trigger an save
    click('Save');

    // Grab the first parm sent to the mock save object 
    // (which should be the account to save)
    const saveAccount = mockSaveCallback.mock.calls[0][0];

    // console.log(saveAccount);
    for (let k in saveAccount) {
        expect(saveAccount[k]).toBe(dummyData[k]);
    }
});

test('test validation works', async () => {

    const account = {};
    const mockSaveCallback = jest.fn();
    const mockUserMsgCallback = jest.fn();

    // Render the form
    render(<AccountFormComp
        account={account}
        save={mockSaveCallback}
        userMsg={mockUserMsgCallback}
    />);
    // screen.debug()

    // Trigger an save to see what errors we get
    click('Save');

    // Should not have done an save
    expect(mockSaveCallback.mock.calls.length).toBe(0);
        console.log(mockSaveCallback.mock.calls)
    // Should have sent balance can't be blank msg
    expect(mockUserMsgCallback.mock.calls.length).toBe(1);
    expect(mockUserMsgCallback.mock.calls[0][0]).toMatch(/balance/i);

    // save balance and should now sent a name can't be blank msg
    updateValue('balance', 35);
    click('Save');
    expect(mockUserMsgCallback.mock.calls.length).toBe(2);
    expect(mockUserMsgCallback.mock.calls[1][0]).toMatch(/name/i);

    updateValue('name', 'xxx');
    click('Save');
    expect(mockSaveCallback.mock.calls.length).toBe(1);

    expect(mockUserMsgCallback.mock.calls.length).toBe(3);
    expect(mockUserMsgCallback.mock.calls[2][0]).toMatch(/saved/i);
});

//utility functions to save tons of code

function getValue(name) {
    return document.querySelector(`[name=${name}]`).value;
}

function updateValue(name, value) {
    document.querySelector(`[name=${name}]`).value = value;
}

function click(txt) {
    fireEvent.click(
        screen.getByText(txt)
    );
}