import React from 'react';
import { ThemeContext } from './ThemeContextComp';

function ThemeButtonComp() {
    return (
        <ThemeContext.Consumer>
            {({ toggleTheme }) => (
                <div>
                    <h1>Settings</h1>
                    <fieldset>
                        <legend>Themes:</legend>
                        <label>Change Theme:</label><br />
                        <button
                            onClick={toggleTheme}>
                            Dark / Light
                    </button>
                    </fieldset>
                </div>
            )}
        </ThemeContext.Consumer>
    );
}

export default ThemeButtonComp;