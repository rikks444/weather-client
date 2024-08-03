import React, { useContext } from 'react';
import { ThemeContext } from '../context/theme';

function ThemeToggleButton() {
    const { theme, toggleMode } = useContext(ThemeContext)

    console.log(theme)

    return (
        <button className="toggle-button" onClick={toggleMode}>
            {theme === "dark" ? '🌙' : '🌞'}
        </button>
    );
}

export default ThemeToggleButton;
