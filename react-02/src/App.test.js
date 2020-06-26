import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import { ThemeContext, themes } from './components/Theme/ThemeContextComp';
import App from './App.js';

test('NameConsumer shows default value', () => {
  const { getByText } = render(<App />)
  expect(getByText(/^Learn/)).toHaveTextContent('Learn React')
})
