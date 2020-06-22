import React from 'react';
// import func from '../../business/QueueStackFunc';

// export const fifoContext = React.createContext(new func.FifoQueue());
// export const stackContext = React.createContext(new func.LifoStack());

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