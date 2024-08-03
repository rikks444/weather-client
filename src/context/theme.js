import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(false);

    useEffect(() => {
        document.body.className = theme === 'light-mode' ? 'dark-mode' : 'light-mode';
    }, [theme]);

    const toggleMode = () => {
        theme === "dark-mode" ? setTheme("light-mode") : setTheme("dark-mode");
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleMode }}>
            {children}
        </ThemeContext.Provider>
    );
};
