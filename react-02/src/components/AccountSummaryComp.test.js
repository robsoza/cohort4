import React from "react";
import { render, screen } from '@testing-library/react';

import AccountSummaryComp from './AccountSummaryComp';

test('test the basic AccountSummaryComp', () => {
    // set up test data
    const accounts = {
        1: { key: 'key1', name: 'Acc1', balance: 30 },
        2: { key: 'key2', name: 'Acc2', balance: 35 }
    };
    // Render the form
    render(<AccountSummaryComp
        accs={accounts}
    />);

    // find screen text total
    screen.getByText(/total/i);
});