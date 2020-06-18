import React from 'react';

export const themes = {
    light: {
        foreground: '#000000',
        background: '#00324e',
    },
    dark: {
        foreground: '#ffffff',
        background: '#282c34',
    },
};

export const ThemeContext = React.createContext({
    theme: themes.light,
    toggleTheme: () => { },
});