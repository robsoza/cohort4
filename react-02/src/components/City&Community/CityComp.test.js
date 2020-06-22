import React from 'react';
import { render, screen, act } from '@testing-library/react';
import CityComp from './CityComp';

test('renders CityComp', async () => {
    // set up test data
    const community = [
        {
            city: 'City1',
            country: 'country1',
            key: 1,
            latitude: 2,
            longitude: 3,
            population: 4
        }
    ];

    jest.spyOn(global, "fetch").mockImplementation(() =>
        Promise.resolve({
            json: () => Promise.resolve(community)
        })
    );

    await act(async () => {
        render(<CityComp />);
    });

    // screen.debug();
    screen.getByText(/random/i);
});