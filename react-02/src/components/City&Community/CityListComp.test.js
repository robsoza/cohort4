import React from "react";
import { render, screen } from '@testing-library/react';

import CityListComp from './CityListComp';

test('test the basic CityListComp', () => {

    // set up the callbacks to test later
    const mockShowOneCallback = jest.fn();
    const mockOnAddCallback = jest.fn();
    const mockUserMsgCallback = jest.fn();

    // set up test data
    const community = [
        { city: "city1", country: "Country1", latitude: 1, longitude: 2, population: 3, key: 1 },
    ];

    // Render the form
    render(
        <CityListComp
            community={community}
            save={mockOnAddCallback}
            showOne={mockShowOneCallback}
            userMsg={mockUserMsgCallback}
        />);

    // screen.debug()

    // find screen text from h1 'My Accounts'
    screen.getByText(/random/i);
});