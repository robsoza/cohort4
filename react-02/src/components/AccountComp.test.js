import React from 'react';
import { render, screen, act } from '@testing-library/react';
import AccountComp from './AccountComp';

test('renders AccountComp', async () => {
    // set up test data
    const accounts = [
        { key: 'key1', name: 'Acc1', balance: 30 },
        { key: 'key2', name: 'Acc2', balance: 35 }
    ];

    jest.spyOn(global, "fetch").mockImplementation(() =>
        Promise.resolve({
            json: () => Promise.resolve(accounts)
        })
    );

    await act(async () => {
        render(<AccountComp />);
    });

    // screen.debug();

    screen.getByText(/my accounts/i);
});