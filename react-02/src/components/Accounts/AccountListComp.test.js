import React from "react";
import { fireEvent, render, screen } from '@testing-library/react';

import AccountListComp from './AccountListComp';

test('test the basic AccountListComp', () => {

    // set up the callbacks to test later
    const mockShowOneCallback = jest.fn();
    const mockOnAddCallback = jest.fn();

    // set up test data
    const accounts = {
        1: { key: 'key1', name: 'Acc1', balance: 30 },
        2: { key: 'key2', name: 'Acc2', balance: 35 }
    };

    // Render the form
    render(<AccountListComp
        accs={accounts}
        showOne={mockShowOneCallback}
        onAdd={mockOnAddCallback}
    />);

    // screen.debug()

    // find screen text from h1 'My Accounts'
    screen.getByText(/account/i);

    //name has to be in one element with the key
    click('Acc1 $30.00');
    expect(mockShowOneCallback.mock.calls.length).toBe(1);
    expect(mockShowOneCallback.mock.calls[0][0]).toBe('key1');

    click('Acc2 $35.00');
    expect(mockShowOneCallback.mock.calls.length).toBe(2);
    expect(mockShowOneCallback.mock.calls[1][0]).toBe('key2');

    expect(mockOnAddCallback.mock.calls.length).toBe(0);
    click('Add');

    expect(mockOnAddCallback.mock.calls.length).toBe(1);
    expect(mockShowOneCallback.mock.calls.length).toBe(2);
});

function click(txt) {
    fireEvent.click(
        screen.getByText(txt)
    );
};