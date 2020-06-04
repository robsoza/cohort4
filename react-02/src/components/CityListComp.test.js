import React from "react";
import { fireEvent, render, screen } from '@testing-library/react';

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

    //name has to be in one element with the key

    click("city1  Lat: 1, long: 2, pupulation: 3,  IsaHamlet, in the Northern Hemisphere");

    // click('city1 Lat: 1, long: 2, pupulation: 3 Is a Hamlet, in the Northern Hemisphere');
    expect(mockShowOneCallback.mock.calls.length).toBe(0);
    expect(mockShowOneCallback.mock.calls[0][0]).toBe(/city1/i);

    // click('Acc2 $35.00');
    // expect(mockShowOneCallback.mock.calls.length).toBe(2);
    // expect(mockShowOneCallback.mock.calls[1][0]).toBe('key2');

    // expect(mockOnAddCallback.mock.calls.length).toBe(0);
    // click('Add');

    // expect(mockOnAddCallback.mock.calls.length).toBe(1);
    // expect(mockShowOneCallback.mock.calls.length).toBe(2);
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
